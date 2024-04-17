'use strict';

/**
 * home-data-api service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-data-api.home-data-api');
