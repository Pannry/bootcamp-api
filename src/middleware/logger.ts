// @desc      Logs request to console
const logger = (req: any, next: any) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  )
  next();
}

module.exports = logger;