// ! Basic format
// const winston = require("winston");

// const youtubeLogger = () => {
//   const logger = winston.createLogger({
//     level: "info",
//     format: winston.format.json(),
//     transports: [
//       new winston.transports.File({
//         filename: "logs/error.log",
//         level: "error",
//       }),
//       new winston.transports.File({
//         filename: "logs/combine.log",
//       }),
//     ],
//   });

//   return logger;
// };

// module.exports = youtubeLogger;

// ! Consoling with Format
// const { createLogger, format, transports } = require("winston");
// const { combine, timestamp, printf, colorize } = format;

// const myFormat = printf(({ level, message, timestamp }) => {
//   return `[${timestamp}] [${level}] [${message}]`;
// });

// const youtubeLogger = () => {
//   const logger = createLogger({
//     level: "silly",
//     format: combine(colorize(), timestamp({ format: "hh:mm:ss" }), myFormat),
//     transports: [new transports.Console()],
//   });
//   return logger;
// };

// module.exports = youtubeLogger;

// ! Final use case

const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] [${timestamp}] [${message}]`;
});

const productionLogger = () => {
  const logger = createLogger({
    level: "info",
    format: combine(timestamp(), myFormat),
    transports: [
      new transports.File({
        filename: "logs/info.log",
        level: "info",
      }),
      new transports.File({
        filename: "logs/error.log",
        level: "error",
      }),
      new transports.File({
        filename: "logs/combine.log",
      }),
    ],
  });
  return logger;
};

module.exports = productionLogger;
