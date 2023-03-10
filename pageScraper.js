const scraperObject = {
  url: "https://www.imet.cat/calendari-portes-obertes-llars-infants",
  async scraper(browser) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });
    console.log(`Navigating to ${this.url}...`);
    await page.goto(this.url);
    await page.screenshot({ path: "example.png" });

    await page.waitForSelector('div[class*="principal"]');

    const element = await page.waitForSelector('div[class="contingut"]'); // select the element
    const value = await element.evaluate((el) => el.textContent); // grab the textContent from the element, by evaluating this function in the browser context
    console.log(value);
  },
};

module.exports = scraperObject;
