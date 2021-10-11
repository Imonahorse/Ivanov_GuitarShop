const AppRoutes = {
  CATALOG: '/',
  BASKET: '/basket',
};

const SortOptions = {
  PRICE: 'по цене',
  VOTE: 'по популярности',
};

const SortButtons = {
  FROM_LOW_TO_HIGH: 'вверх',
  FROM_HIGH_TO_LOW: 'вниз',
};

const SortingTypes = (sortType, sortDirection) => {
  if (sortDirection === SortButtons.FROM_HIGH_TO_LOW) {
    return (a, b) => b[sortType] - a[sortType];
  }
  return (a, b) => a[sortType] - b[sortType];
};

// const SortingTypes = {
//   [SortOptions.PRICE]: (a, b) => b.price - a.price,
//   [SortOptions.POPULAR]: (a, b) => b.vote - a.vote,
// };

const makePriceString = (value) => value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ').trim();


export {AppRoutes, makePriceString, SortOptions, SortingTypes};
