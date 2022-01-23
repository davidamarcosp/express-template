export default function logger(req, res, next) {
  const currentDatetime = new Date();

  const formattedDate =
    currentDatetime.getFullYear() +
    '-' +
    (currentDatetime.getMonth() + 1) +
    '-' +
    currentDatetime.getDate() +
    ' ' +
    currentDatetime.getHours() +
    ':' +
    currentDatetime.getMinutes() +
    ':' +
    currentDatetime.getSeconds();

  const method = req.method;
  const url = req.url;
  const status = res.statusCode;
  const log = `[${formattedDate}] ${method}:${url} [Status]: ${status}`;

  console.log(log);

  next();
}
