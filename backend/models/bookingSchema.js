var booking = function BookingSchema(params) {
  this.venue = "";
  this.artist = "";
  this.time = "";
  this.date = "";
  this.type = "event";
  this.logistics = [];
};

module.exports = booking;
