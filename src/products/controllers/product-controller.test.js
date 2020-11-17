import { ProductController } from './product-controller';

describe('Product controller', () => {
  it('Must return a product given an ID', () => {
    const productController = new ProductController();
    const product = productController.getProduct();
    expect(product).toEqual({
      _id: 1,
      name: 'abc',
      description: 'something',
      price: 10000,
      brand: 'generic',
      weight: '10 kg',
      dimensions: '50 x 50 x 50',
      releaseDate: '2010',
    });
  });
});
