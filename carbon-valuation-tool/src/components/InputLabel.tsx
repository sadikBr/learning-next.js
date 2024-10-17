export default function InputLabel({
  children,
  value,
  htmlFor,
  errorMessage,
}: {
  children: React.ReactNode;
  value: string;
  htmlFor: string;
  errorMessage: string | undefined;
}) {
  return (
    <div>
      <label htmlFor={htmlFor}>{value}</label>
      {children}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}
