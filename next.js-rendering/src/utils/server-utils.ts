import 'server-only';

export function serverSideFunction() {
  console.log(
    'Use multiple libraries, Use env variables, Interact with database, Process confidential information'
  );

  return 'Server result';
}
