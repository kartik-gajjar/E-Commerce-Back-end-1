'use strict';

const Joi = require('joi');
const config = require('config');
const Boom = require('@hapi/boom');

const errorHelper = require('@utilities/error-helper');
const Token = require('@utilities/create-token');

const User = require('@models/user.model').schema;

module.exports = {
  login: {
    validate: {},
    pre: [],
    handler: async (request, h) => {

      return h.response('Hello World!');
    },
  },
};
