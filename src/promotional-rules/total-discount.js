import { counterDecimal } from '../utils';

const totalDiscount = {
  execute: (basket, totalOver = 60, discount = 10) => {
    basket.total = basket.items.reduce((prev, cur, curIndex, arr) => {
      const newTotal = cur.price + prev;
      return curIndex === arr.length - 1 && newTotal >= totalOver
        ? Number((newTotal * counterDecimal(discount)).toFixed(2))
        : newTotal;
    }, 0);
  }
};

export default totalDiscount;
