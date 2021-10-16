import {createAction} from '@reduxjs/toolkit';

const ActionsTypes = {
  ADD_TO_BASKET: 'addToBasket',
  CHANGE_SORT: 'changeSort',
  ADD_PRICE_FROM: 'addPriceFrom',
  ADD_PRICE_TO: 'addPriceTo',
  ADD_STRINGS_COUNT: 'addStringsCount',
  ADD_TYPES: 'addTypes',
  ADD_ACTIVE_ARTICLE: 'addActiveArticle',
  CHANGE_SORT_DIRECTION: 'changeSortDirection',
  DELETE_FROM_BASKET: 'deleteFromBasket',
  ADD_TOTAL_PRICE: 'addTotalPrice',
  CHANGE_GUITAR_COUNT: 'changeGuitarCount',
  ADD_TO_BASKET_COUNT: 'addToBasketCount',
  DELETE_FROM_TOTAL: 'deleteFromTotal',
};

const deleteFromTotal = createAction(ActionsTypes.DELETE_FROM_TOTAL, (id) => ({
  payload: id,
}));

const addTotalPrice = createAction(ActionsTypes.ADD_TOTAL_PRICE, (price) => ({
  payload: price,
}));

const changeGuitarCount = createAction(ActionsTypes.CHANGE_GUITAR_COUNT, (count) => ({
  payload: count,
}));

const addToBasket = createAction(ActionsTypes.ADD_TO_BASKET, (article) => ({
  payload: article,
}));

const deleteFromBasket = createAction(ActionsTypes.DELETE_FROM_BASKET, (article) => ({
  payload: article,
}));

const changeSort = createAction(ActionsTypes.CHANGE_SORT, (sortType) => ({
  payload: sortType,
}));

const changeDirection = createAction(ActionsTypes.CHANGE_SORT_DIRECTION, (sortDirection) => ({
  payload: sortDirection,
}));

const addPriceFrom = createAction(ActionsTypes.ADD_PRICE_FROM, (priceFrom) => ({
  payload: priceFrom,
}));

const addPriceTo = createAction(ActionsTypes.ADD_PRICE_TO, (priceTo) => ({
  payload: priceTo,
}));

const addStringsCount = createAction(ActionsTypes.ADD_STRINGS_COUNT, (strings) => ({
  payload: strings,
}));

const addTypes = createAction(ActionsTypes.ADD_TYPES, (types) => ({
  payload: types,
}));

const addActiveArticle = createAction(ActionsTypes.ADD_ACTIVE_ARTICLE, (types) => ({
  payload: types,
}));

const addToBasketCount = createAction(ActionsTypes.ADD_TO_BASKET_COUNT, (count) => ({
  payload: count,
}));

export {
  addToBasket,
  changeSort,
  addPriceFrom,
  addPriceTo,
  addStringsCount,
  addTypes,
  addActiveArticle,
  changeDirection,
  deleteFromBasket,
  addTotalPrice,
  changeGuitarCount,
  addToBasketCount,
  deleteFromTotal
};
