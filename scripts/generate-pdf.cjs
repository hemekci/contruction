const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlPath = path.join(__dirname, '../public/katalog/palplans-teknik-katalog.html');
  const pdfPath = path.join(__dirname, '../public/katalog/naviga-palplans-katalog-2024.pdf');

  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('PDF oluşturuldu:', pdfPath);
}

generatePDF().catch(console.error);
