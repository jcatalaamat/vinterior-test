const veryCheapChairDiscount = {
  execute: (
    basket,
    itemQuantity = 2,
    name = 'Very Cheap Chair',
    newPrice = 8.5
  ) => {
    const itemMatches = basket.items.filter(x => x.name === name);
    basket.items = basket.items.map(x =>
      x.name === name && itemMatches.length >= itemQuantity
        ? { ...x, price: newPrice }
        : { ...x }
    );
  }
};

export default veryCheapChairDiscount;
