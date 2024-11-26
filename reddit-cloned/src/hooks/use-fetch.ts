import { useCallback, useEffect, useRef, useState } from "react";

export type FetchResponse<T> = {
  loading: boolean;
  error: string | null;
  data: T | null;
  url: string;
  load: () => Promise<void>;
  updateUrl: React.Dispatch<React.SetStateAction<string>>;
  updateOptions: React.Dispatch<React.SetStateAction<UseFetchOptions>>;
  updateRequestOptions: React.Dispatch<
    React.SetStateAction<RequestInit | undefined>
  >;
};

export type UseFetchOptions = {
  immediate: boolean;
};

export function useFetch<T>(
  initialUrl: string,
  initialRequestOptions?: RequestInit,
  initialOptions?: UseFetchOptions
): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [url, setUrl] = useState(initialUrl);
  const [options, setOptions] = useState(initialOptions || { immediate: true });
  const [requestOptions, setRequestOptions] = useState(initialRequestOptions);

  const abortController = useRef(new AbortController());

  const load = useCallback(async () => {
    abortController.current.abort();
    abortController.current = new AbortController();

    if (!url) {
      setError("Please provide a url to fetch data");
      return;
    }

    setError(null);
    setData(null);
    setLoading(true);

    const requestInitialOptions = requestOptions || {};
    requestInitialOptions.signal = abortController.current.signal;

    const currentAbortController = abortController.current;

    const response = await fetch(url, requestInitialOptions);

    if (!response.ok) {
      setLoading(false);
      setError("Something went wrong while getting the requested data.");
    }

    try {
      const json = await response.json();
      if (currentAbortController.signal.aborted) return;

      setData(json);
    } catch (e) {
      const err = e as Error;

      if (err.name === "AbortError") {
        setError(null);
        setData(null);
      } else {
        setError((err as Error).message);
      }
    }
    setLoading(false);
  }, [url, requestOptions]);

  useEffect(() => {
    if (options.immediate) {
      load();
    }

    return () => {
      return abortController.current.abort();
    };
  }, [options, load]);

  return {
    loading,
    error,
    data,
    url,
    load,
    updateUrl: setUrl,
    updateOptions: setOptions,
    updateRequestOptions: setRequestOptions,
  };
}
