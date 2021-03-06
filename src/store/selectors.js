import {createSelector} from '@reduxjs/toolkit';
import {SortingTypes} from '../const';

const filterByPrice = (item, price) => {
  const {from, to} = price;

  if (!from && !to) {
    return item;
  }
  if (!from) {
    return item.price <= to;
  }
  if (!to) {
    return item.price >= from;
  }
  return item.price >= from && item.price <= to;
};

const filterByStrings = (item, strings) => {
  if (!strings.length) {
    return item;
  }

  return strings.some((string) => Number(string) === item.strings);
};

const filterByType = (item, types) => {
  if (!types.length) {
    return item;
  }

  return types.some((type) => type.toLowerCase() === item.type.toLowerCase());
};

const getTotalPriceCount = (total) => {
  let result = 0;
  total.forEach(({id, price, count}) => {
    const newPrice = count * price;
    return result += newPrice;
  });
  return result;
};

export const selectArticles = (state) => state.articles;

export const selectActiveSort = (state) => state.sorting;

export const selectPrice = (state) => state.price;

export const selectStringsCount = (state) => state.strings;

export const selectTypes = (state) => state.types;

export const selectActiveArticle = (state) => state.activeArticle;

export const selectBasket = (state) => state.basket;

export const selectDirection = (state) => state.direction;

export const selectTotal = (state) => state.price.total;

export const selectTotalPrice = (state) => getTotalPriceCount(state.price.total);

export const selectFilteredArticles = createSelector(selectArticles, selectPrice, selectStringsCount, selectTypes,
  (articles, price, strings, types) => (
    articles.filter((item) => {
      const filteredByPrice = filterByPrice(item, price);
      const filteredByStrings = filterByStrings(item, strings);
      const filteredByTypes = filterByType(item, types);
      return filteredByPrice && filteredByStrings && filteredByTypes;
    })
  ));

export const selectSortingArticles = createSelector(selectFilteredArticles, selectActiveSort, selectDirection, (articles, activeSort, activeDirection) => (
  articles
    .slice()
    .sort(SortingTypes(activeSort, activeDirection))
));

