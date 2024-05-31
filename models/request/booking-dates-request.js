exports.BookingDates = class BookingDates {
  constructor(checkin, checkout) {
    this.checkin = checkin;
    this.checkout = checkout;
  }
  set set_checkin(checkin) {
    this.checkin = checkin;
  }
  get get_checkin() {
    return this.checkin;
  }
  set set_checkout(checkout) {
    this.checkout = checkout;
  }
  get get_checkout() {
    return this.checkout;
  }
};
