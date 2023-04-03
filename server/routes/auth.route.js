'use strict';
// Never take constants here
module.exports = {
  plugin: {
    async register(server, options) {
      const API = require('@api/auth.api');
      server.route([
        {
          method: 'get',
          path: '/',
          config: {
            auth: null,
            plugins: {
              policies: ['log.policy'],
            },
            tags: ['api', 'Authentication'],
            description: 'Login',
            notes: 'Login',
            validate: API.login.validate,
            pre: API.login.pre,
            handler: API.login.handler,
          },
        },
      ]);
    },
    version: require('../../package.json').version,
    name: 'auth-routes',
  },
};
