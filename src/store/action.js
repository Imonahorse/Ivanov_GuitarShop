import {createAction} from '@reduxjs/toolkit';

const ActionsTypes = {
  ADD_TO_BASKET: 'addToBasket',
};

const addToBasket = createAction(ActionsTypes.ADD_TO_BASKET, (article) => ({
  payload: article,
}));

export {addToBasket};
