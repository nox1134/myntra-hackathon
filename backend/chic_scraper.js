const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const Outcome = require('../backend/src/models/Outcome'); // Ensure the path is correct

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Set User-Agent and viewport
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  await page.setViewport({ width: 1280, height: 800 });

  try {
    await mongoose.connect('mongodb+srv://rakshitamanocha:82qPBtjnJ7CN9SPO@cluster0.2086aqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    await page.goto('https://www.myntra.com/women-clothing?f=Categories%3ABlazers%2CBodysuit%2CCorset%2CShirts%2CSweatshirts', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    console.log('Page loaded');

    await page.waitForSelector('.product-base', { timeout: 20000 });

    const products = await page.evaluate(() => {
      const baseUrl = 'https://www.myntra.com/';
      const items = Array.from(document.querySelectorAll('.product-base'));
      return items.map(item => {
        const brandElement = item.querySelector('.product-brand');
        const titleElement = item.querySelector('.product-product');
        const priceElement = item.querySelector('.product-price .product-discountedPrice');
        const linkElement = item.querySelector('a');
        const imageElement = item.querySelector('.product-imageSliderContainer picture img');
        const imageUrl = imageElement ? imageElement.src : null;
        const relativeUrl = linkElement ? linkElement.getAttribute('href') : null;
        const productUrl = relativeUrl ? baseUrl + relativeUrl.slice(1) : null;

        return {
          title: titleElement ? titleElement.innerText.trim() : null,
          price: priceElement ? priceElement.innerText.trim() : null,
          imageUrl: imageUrl,
          brand: brandElement ? brandElement.innerText.trim() : null,
          productUrl: productUrl
        };
      }).filter(product => 
        product.title && 
        product.price && 
        product.imageUrl && 
        product.brand && 
        product.productUrl
      );
    });

    console.log('Products extracted:', products);

    const outcome = 'Chic Trendsetter'; 
    const url = 'https://www.myntra.com/women-clothing?f=Categories%3ABlazers%2CBodysuit%2CCorset%2CShirts%2CSweatshirts';

    const outcomeDoc = new Outcome({
      outcome: outcome,
      url: url,
      products: products
    });

    await outcomeDoc.save();
    console.log('Data saved to the database');

  } catch (error) {
    console.error('Error during scraping or database operation:', error);
  } finally {
    await browser.close(); 
    mongoose.connection.close(); 
  }
})();
