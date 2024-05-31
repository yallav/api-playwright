## Playwright and API
This repo demonstrates API automation testing pattern in Playwright

### Setup (from scratch)
1. Clone the porject repo by executing the following command
```
git clone https://github.com/yallav/api-playwright.git
```
2. Initiate the Playwright with the following command from the project root directory
```
npm init playwright@latest
```
We can see the following message that indicates successful initialization of Playwright tool
![alt text](/documentation/image-1.png)
3. Install dotenv plugin by executing the following command from the project root directory
```
npm install dotenv -D
```

### Setup (from repo)
1. Clone the porject repo by executing the following command
```
git clone https://github.com/yallav/saucedemo-playwright.git
```
2. Install all dependencies with the following command from the projet root directory
```
npm install
```
### Test Scenario
1. Create registration with POST and fetch details with GET endpoints
2. Create registration with POST and update registration with PUT and PATCH end points

### Execute the test
1. Test can be exeucted in headless mode with the following command
```
npx playwright test
