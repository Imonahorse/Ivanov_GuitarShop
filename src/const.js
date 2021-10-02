const AppRoutes = {
  MAIN: '/',
  CATALOG: '/catalog',
  BASKET: '/basket',
};

const makePriceString = (value) => value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ').trim();


export {AppRoutes, makePriceString};
