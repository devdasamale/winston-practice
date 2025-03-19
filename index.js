const logger = require("./logger");

logger.error("error info"); // Level 0
logger.warn("warn info"); // Level 1
logger.info("info info"); // Level 2
logger.http("http info"); // Level 3
logger.verbose("verbose info"); // Level 4
logger.debug("debug info"); // Level 5
logger.silly("silly info"); // Level 6

// If you do not explicitly define the levels that winston should use, the npm levels above will be used.
