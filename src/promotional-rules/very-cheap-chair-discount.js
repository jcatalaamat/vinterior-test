const veryCheapChairDiscount = {
  execute: (basket, productCode = '001', itemQuantity = 2, newPrice = 8.5) => {
    const itemMatches = basket.items.filter(x => x.productCode === productCode);
    basket.items = basket.items.map(x =>
      x.productCode === productCode && itemMatches.length >= itemQuantity
        ? { ...x, price: newPrice }
        : { ...x }
    );
  }
};

export default veryCheapChairDiscount;
