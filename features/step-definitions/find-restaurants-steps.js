const { setDefaultTimeout, Before, After, Given, When, Then } = require('cucumber')
const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const { expect } = require ('chai')

setDefaultTimeout(60 * 1000);

Before(async () => {
  const options = new chrome.Options()
  // options.addArguments('headless')
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build()
  this.browser = driver
})

When(
  'I enter the address {string} in the search bar on the homepage of {string}', async (address, url) => {
  const { browser } = this
  await browser.get(`${url}`)
  const searchBar = browser.findElement(By.tagName('input'))
  await searchBar.sendKeys(address)
  await browser.sleep(1000)
  await browser.findElement(By.tagName('aside')).click()
  await browser.sleep(1000)
  await browser
    .findElement(By.xpath("//*[text() = 'Find Restaurants Nearby']"))
    .click()
})

Then('I should see restaurants displayed', async () => {
  const { browser } = this
  await browser.sleep(2000)
  const result = browser
    .findElement(By.xpath("//*[text()[contains(.,'Cuisines & Categories')]]"))
  const resultOnPage = await result.isDisplayed()
  expect(resultOnPage).equal(true)
})
// __________________________________________________________
// Here is part two of the test commented out:

// When('I click the geolocation button on the homepage of {string}', async (url) => {
//   const { browser } = this
//   await browser.get(`${url}`)
     
     // need to target the compass properly
//   const compass = browser.findElement(By.tagName('button'))

     // need to click the browser alert to accept location sharing
     //  ...
     
//   await browser.findElement(By.tagName('aside')).click()
//   await browser.sleep(1000)
//   await browser
//     .findElement(By.xpath("//*[text() = 'Find Restaurants Nearby']"))
//     .click()
// })

// Then('I should see restaurants displayed.', async () => {
//   const { browser } = this
//   await browser.sleep(2000)
//   const result = browser.findElement(By.xpath("//*[text()[contains(.,'Cuisines & Categories')]]"))
//   const resultOnPage = await result.isDisplayed()
//   expect(resultOnPage).equal(true)
// })

// ___________________________________________________________________
// When('When enter the word {string} into the search bar at the homepage of {string}', async (searchWord, url) => {
//   const { browser } = this
//   await browser.get(`${url}`)
//   const searchBar = browser.findElement(By.tagName('input'))
//   await searchBar.sendKeys(searchWord)
//   await browser.sleep(1000)
//   await browser.findElement(By.tagName('aside')).click()
// })

// Then('I should see the error message {string} displayed on the page ', async (error) => {
//   const { browser } = this
//   await browser.sleep(2000)
//   const result = browser.findElement(By.xpath("//*[text()[contains(.,'Unable to determine the city of this location. Please try again')]]"))
//   const errorMessage = result.getAttribute()
//   const resultOnPage = await result.isDisplayed()
//   expect(resultOnPage).equal(true)
//   expect(error).equal(errorMessage)
// })

After(() => {
  this.browser.quit()
})
