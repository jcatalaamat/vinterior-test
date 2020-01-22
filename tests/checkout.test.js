import Checkout from '../src/checkout';
import PromotionalRules from '../src/promotional-rules';

describe('Happy Vinterior tests', () => {
  it('Sums', () => {
    let co = Checkout(PromotionalRules);
    co.scan({ productCode: '001', name: 'Very Cheap Chair', price: 9.25 });
    co.scan({ productCode: '002', name: 'Little table', price: 45.0 });
    expect(co.basket.total).toBe(54.25);
  });

  it('% discount', () => {
    let co = Checkout(PromotionalRules);
    co.scan({ productCode: '001', name: 'Very Cheap Chair', price: 9.25 });
    co.scan({ productCode: '002', name: 'Little table', price: 45.0 });
    co.scan({ productCode: '003', name: 'Funky light', price: 19.95 });
    expect(co.basket.total).toBe(66.78);
  });

  it('Item discount', () => {
    let co = Checkout(PromotionalRules);
    co.scan({ productCode: '001', name: 'Very Cheap Chair', price: 9.25 });
    co.scan({ productCode: '003', name: 'Funky light', price: 19.95 });
    co.scan({ productCode: '001', name: 'Very Cheap Chair', price: 9.25 });
    expect(co.basket.total).toBe(36.95);
  });

  it('Item discount + % discount', () => {
    let co = Checkout(PromotionalRules);
    co.scan({ productCode: '001', name: 'Very Cheap Chair', price: 9.25 });
    co.scan({ productCode: '002', name: 'Little table', price: 45.0 });
    co.scan({ productCode: '001', name: 'Very Cheap Chair', price: 9.25 });
    co.scan({ productCode: '003', name: 'Funky light', price: 19.95 });
    expect(co.basket.total).toBe(73.76);
  });
});
