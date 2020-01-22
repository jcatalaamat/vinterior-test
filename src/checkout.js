const Checkout = promotionalRules => {
  let basket = {
    items: [],
    total: 0
  };

  let scan = item => {
    basket.items.push(item);
    promotionalRules.rules.forEach(rule => rule.execute(basket));
  };

  return { basket, scan };
};

export default Checkout;
