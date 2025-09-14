const Product = require('./model/product');

class FakeDb {
  constructor() {
    this.products = [
      {
        coverImage: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'this is a heading1-1 contexst',
        heading2: 'this is a heading1-2 contexst',
        heading3: 'this is a heading1-3 contexst',
        headingtext1:
          'headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1',
        headingtext2:
          'headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2',
        headingtext3:
          'headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3',
      },
      {
        coverImage:
          'data: image / gif; base64, R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'this is a heading2-1 contexst',
        heading2: 'this is a heading2-2 contexst',
        heading3: 'this is a heading2-3 contexst',
        headingtext1:
          'headingtext2-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1',
        headingtext2:
          'headingtext2-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2',
        headingtext3:
          'headingtext2-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3',
      },
      {
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'this is a heading3-1 contexst',
        heading2: 'this is a heading3-2 contexst',
        heading3: 'this is a heading3-3 contexst',
        headingtext1:
          'headingtext3-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1headingtext1-1',
        headingtext2:
          'headingtext3-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2headingtext1-2',
        headingtext3:
          'headingtext3-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3headingtext1-3',
      },
    ];
  }
  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }

  seeDb() {
    this.pushProductsToDb();
  }
}

module.exports = FakeDb;
