export function helloWorldService(method: string): string {
  const messages = {
    GET: 'GET => Hello World!',
    POST: 'POST => Hello World!'
  };
  return messages[method];
}
