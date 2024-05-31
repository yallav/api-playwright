const { test, expect } = require('@playwright/test');
const { Helper } = require('../utils/helper');

let helper = null;
let postBody = null;

test.beforeEach('before step', () => {
  helper = new Helper();
});

test('Create registration and verify details', async ({ request }) => {
  const postBody = helper.postbodyRequest();

  // Create registration
  const registrationRes = await request.post('/booking', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: postBody,
  });

  const registrationResBody = await registrationRes.json();
  expect(registrationRes.status()).toBe(200);
  expect(registrationRes.ok).toBeTruthy();
  expect(registrationResBody.booking).toHaveProperty(
    'lastname',
    postBody.lastname
  );

  console.log(registrationResBody.bookingid);

  // Validate the registration details
  const registrationDetails = await request.get('/booking/', {
    params: {
      lastname: postBody.lastname,
    },
  });

  expect(registrationDetails.ok()).toBeTruthy();
  expect(registrationDetails.status()).toBe(200);
});

test('Create registration and verify details with registration id', async ({
  request,
}) => {
  const postBody = helper.postbodyRequest();

  // Create registration
  const registrationRes = await request.post('/booking', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: postBody,
  });

  const registrationResBody = await registrationRes.json();
  expect(registrationRes.status()).toBe(200);
  expect(registrationRes.ok).toBeTruthy();
  expect(registrationResBody.booking).toHaveProperty(
    'lastname',
    postBody.lastname
  );

  // Validate the registration details
  const registrationDetails = await request.get(
    `/booking/${registrationResBody.bookingid}`
  );

  expect(registrationDetails.ok()).toBeTruthy();
  expect(registrationDetails.status()).toBe(200);
});
