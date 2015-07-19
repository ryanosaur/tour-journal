'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	articles = require('../../app/controllers/articles.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/articles')
		.get(articles.list)
		.post(users.requiresLoginToken, articles.create); // authenticate using new requiresLoginToken middlewear

	app.route('/articles/:articleId')
		.get(articles.read)
		.put(users.requiresLoginToken, articles.hasAuthorization, articles.update)		// authenticate using new requiresLoginToken middlewear
		.delete(users.requiresLoginToken, articles.hasAuthorization, articles.delete);	// authenticate using new requiresLoginToken middlewear

	// Finish by binding the article middleware
	app.param('articleId', articles.articleByID);
};