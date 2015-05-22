'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "gitstars-secret",

  GITHUB_ID: 'be63fe752fb528d70cdd',
  GITHUB_SECRET: '1d3acadf6159db7e0fba6d8c6f052f898c00b88b',

  // Control debug level for modules using visionmedia/debug
  DEBUG: '',

  // Deploy
  deploy: {
    GITHUB_ID: '4cc25b0c9c88e0b6da5e',
    GITHUB_SECRET: '56645be9590f1800847369ab8ecb9b7fcf523d15'
  }
};
