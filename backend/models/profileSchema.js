var profile = function ProfileSchema(params) {
  this.id = params.username || 'undefined';
  this.password = params.password;
  this.email = params.email; 
  this.userType = params.userType || 'undefined';
  this.genre = params.genre || 'undefined';
  this.location = params.location || 'undefined';
  this.profile_img = params.profile_img || 'http://placehold.it/150x150';
  this.reviews = [];
};

module.exports = profile;
