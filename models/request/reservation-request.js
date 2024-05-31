const { BookingDates } = require('../request/booking-dates-request');

exports.ReservationRequest = class ReservationRequest {
  constructor(fname, lname, tprice = 0, depid = true, bdates, aneeds = '') {
    this.firstname = fname;
    this.lastname = lname;
    this.totalprice = tprice;
    this.depositpaid = depid;
    this.bookingdates = bdates;
    this.additionalneeds = aneeds;
  }
  set set_firstname(firstname) {
    this.firstname = firstname;
  }
  get get_firstname() {
    return this.firstname;
  }
  set set_lastname(lastname) {
    this.lastname = lastname;
  }
  get get_lastname() {
    return this.lastname;
  }
  set set_totalprice(totalprice) {
    this.totalprice = totalprice;
  }
  get get_totalprice() {
    return this.totalprice;
  }
  set set_depositpaid(depositpaid) {
    this.depositpaid = depositpaid;
  }
  get get_depositpaid() {
    return this.depositpaid;
  }
  set set_bookingdates(bookingdates) {
    this.bookingdates = bookingdates;
  }
  get get_bookingdates() {
    return this.bookingdates;
  }
  set set_additionalneeds(additionalneeds) {
    this.additionalneeds = additionalneeds;
  }
  get get_additionalneeds() {
    return this.additionalneeds;
  }
};
