const { test, expect } = require('@playwright/test');
const { Helper } = require('../utils/helper');
const tokenRequest = require('../testdata/token_request.json');

let helper = null;
let postBody = null;

test.beforeEach('before step', () => {
  helper = new Helper();
});

test('Create registration and update details with PUT', async ({ request }) => {
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

  // Get the token
  const tokenResponse = await request.post('/auth', {
    data: tokenRequest,
  });
  expect(tokenResponse.ok()).toBeTruthy();
  expect(tokenResponse.status()).toBe(200);

  const tokenResponseBody = await tokenResponse.json();
  const token = tokenResponseBody.token;

  // Update registration
  const putBody = helper.postbodyRequest();

  const updateRes = await request.put(
    `/booking/${registrationResBody.bookingid}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `token=${token}`,
      },
      data: putBody,
    }
  );

  expect(updateRes.status()).toBe(200);
  expect(updateRes.ok).toBeTruthy();
});

test('Create registration and update details with PATCH', async ({
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

  console.log(registrationResBody.bookingid);

  // Get the token
  const tokenResponse = await request.post('/auth', {
    data: tokenRequest,
  });
  expect(tokenResponse.ok()).toBeTruthy();
  expect(tokenResponse.status()).toBe(200);

  const tokenResponseBody = await tokenResponse.json();
  const token = tokenResponseBody.token;

  // Update registration
  const putBody = helper.postbodyRequest();

  const updateRes = await request.patch(
    `/booking/${registrationResBody.bookingid}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `token=${token}`,
      },
      data: {
        firstname: 'fname test',
        lastname: 'lname test',
      },
    }
  );

  expect(updateRes.status()).toBe(200);
  expect(updateRes.ok).toBeTruthy();
});
