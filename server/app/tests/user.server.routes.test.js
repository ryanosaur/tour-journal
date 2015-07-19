'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	app = require('../../server'),
	request = require('supertest'),
	agent = request.agent(app);


/**
 * Globals
 */
var user, credentials, loginToken;


describe('User Model Route Tests:', function() {


	describe('User Access', function(){
		before(function(done) {

			credentials = {
				username: 'username',
				password: 'password'
			};

			user = new User({
				firstName: 'Full',
				lastName: 'Name',
				displayName: 'Full Name',
				email: 'test@test.com',
				username: credentials.username,
				password: credentials.password,
				provider: 'local'
			});

			user.save(function(){
				done();
			});

		});		

		it('should allow a user to login and return a token', function(done){
			agent.post('/auth/signin')
				.send(credentials)
				.expect(200)
				.end(function(signinErr, signinRes) {
					// Handle signin error
					if (signinErr) {
						done(signinErr);
					}

					// attach login token to the article 
					should.exist(signinRes.body.loginToken);

					// save login token to use in next test
					loginToken = signinRes.body.loginToken;

					done();
				});

		});

		it('should allow a user to logout', function(done){
			agent.post('/auth/signout')
				.send({loginToken: loginToken})
				.expect(200)
				.end(function(signoutErr, signoutRes){

					// check for the correct signout message
					(signoutRes.body.message).should.equal('username successfully logged out');
					done();
				});
		});

		after(function(done) {
			User.remove().exec();
			done();
		});
	});

});

