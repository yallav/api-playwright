import { faker } from '@faker-js/faker';
const { DateTime } = require('luxon');

const { ReservationRequest } = require('../models/request/reservation-request');
const { BookingDates } = require('../models/request/booking-dates-request');

exports.Helper = class Helper {
  postbodyRequest() {
    const fName = faker.person.firstName();
    const lName = faker.person.lastName();
    const tPrice = faker.number.int(5000);

    const inDate = DateTime.now().toFormat('yyyy-MM-dd');
    const outDate = DateTime.now().plus({ day: 7 }).toFormat('yyyy-MM-dd');

    const bDates = new BookingDates(inDate, outDate);

    const registrationRequest = new ReservationRequest(
      fName,
      lName,
      tPrice,
      true,
      bDates,
      ''
    );

    return registrationRequest;
  }
};
