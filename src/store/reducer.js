import electricGuitar from '../components/elements/articles-list/guitar-1.png';
import ukulele from '../components/elements/articles-list/guitar-3.png';
import acousticGuitar from '../components/elements/articles-list/guitar-4.png';
import {createReducer} from '@reduxjs/toolkit';
import {
  addActiveArticle,
  addPriceFrom,
  addPriceTo,
  addStringsCount,
  addToBasket,
  addTypes,
  changeDirection,
  changeSort,
  deleteFromBasket,
  addTotalPrice, changeGuitarCount
} from './actions';

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return rand.toFixed(1);
}

const findId = (array, id) => array.find((card) => card.id === id);

const addNewId = (card, array) => {
  const index = array.findIndex((item) => item.id === card.id);
  if (index === -1) {
    array.push(card);
    return array;
  }

  return array;
};

const changeCount = (card, array) => {
  const index = array.findIndex((item) => item.id === card.id);
  if (index === -1) {
    return array;
  }

  return [...array.slice(0, index), card, ...array.slice(index + 1)];
};


const deleteId = (card, array) => {
  const index = array.findIndex((item) => item.id === card.id);
  if (index === -1) {
    return;
  }

  array.splice(index, 1);
  return array;
};

const articles = [
  {
    id: 1,
    article: 'SO757575',
    name: 'Честер Bass',
    type: 'электрогитара',
    vote: 15,
    strings: 7,
    rating: randomInteger(1, 4),
    price: 17500,
    img: electricGuitar,
  },
  {
    id: 2,
    article: 'TK129049',
    name: 'СURT Z300',
    type: 'электрогитара',
    vote: 9,
    strings: 7,
    rating: randomInteger(1, 4),
    price: 29500,
    img: electricGuitar,
  },
  {
    id: 3,
    article: 'RO111111',
    name: 'Roman LX',
    type: 'укулеле',
    vote: 21,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 6800,
    img: ukulele,
  },
  {
    id: 4,
    article: 'TK436457',
    name: 'СURT T300',
    type: 'электрогитара',
    vote: 15,
    strings: 6,
    rating: randomInteger(1, 4),
    price: 30000,
    img: electricGuitar,
  },
  {
    id: 5,
    article: 'DI192138',
    name: 'Dania Super',
    type: 'акустическая гитара',
    vote: 5,
    strings: 7,
    rating: randomInteger(1, 4),
    price: 3500,
    img: acousticGuitar,
  },
  {
    id: 6,
    article: 'SO934345',
    name: 'Честер WX',
    type: 'электрогитара',
    vote: 17,
    strings: 6,
    rating: randomInteger(1, 4),
    price: 15300,
    img: electricGuitar,
  },
  {
    id: 7,
    article: 'DI082347',
    name: 'Dania VX',
    type: 'укулеле',
    vote: 5,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 2200,
    img: ukulele,
  },
  {
    id: 8,
    article: 'SO135646',
    name: 'Честер Plus',
    type: 'электрогитара',
    vote: 27,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 30000,
    img: electricGuitar,
  },
  {
    id: 9,
    article: 'VO154751',
    name: 'Виолана 300',
    type: 'акустическая гитара',
    vote: 3,
    strings: 7,
    rating: randomInteger(1, 4),
    price: 1700,
    img: acousticGuitar,
  },
  {
    id: 10,
    article: 'TK244556',
    name: 'СURT Clasic',
    type: 'электрогитара',
    vote: 20,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 23000,
    img: electricGuitar,
  },
  {
    id: 11,
    article: 'TK134663',
    name: 'СURT Z250',
    type: 'электрогитара',
    vote: 19,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 18700,
    img: electricGuitar,
  },
  {
    id: 12,
    article: 'SO123212',
    name: 'Честер 7X',
    type: 'электрогитара',
    vote: 30,
    strings: 7,
    rating: randomInteger(1, 4),
    price: 35000,
    img: electricGuitar,
  },
  {
    id: 13,
    article: 'SO123234',
    name: 'Честер 6V',
    type: 'электрогитара',
    vote: 29,
    strings: 6,
    rating: randomInteger(1, 4),
    price: 14900,
    img: electricGuitar,
  },
  {
    id: 14,
    article: 'VO519510',
    name: 'Виолана Mix',
    type: 'акустическая гитара',
    vote: 7,
    strings: 6,
    rating: randomInteger(1, 4),
    price: 7600,
    img: acousticGuitar,
  },
  {
    id: 15,
    article: 'VO457369',
    name: 'Виолана 250x',
    type: 'акустическая гитара',
    vote: 19,
    strings: 6,
    rating: randomInteger(1, 4),
    price: 6500,
    img: acousticGuitar,
  },
  {
    id: 16,
    article: 'FB625903',
    name: 'Фабио Лайт',
    type: 'акустическая гитара',
    vote: 26,
    strings: 7,
    rating: randomInteger(1, 4),
    price: 12000,
    img: acousticGuitar,
  },
  {
    id: 17,
    article: 'FB576948',
    name: 'Фабио L100',
    type: 'акустическая гитара',
    vote: 31,
    strings: 7,
    rating: randomInteger(1, 4),
    price: 9900,
    img: acousticGuitar,
  },
  {
    id: 18,
    article: 'LU012032',
    name: 'Liana Z200',
    type: 'акустическая гитара',
    vote: 28,
    strings: 12,
    rating: randomInteger(1, 4),
    price: 8900,
    img: acousticGuitar,
  },
  {
    id: 19,
    article: 'LU546853',
    name: 'Liana Z100',
    type: 'акустическая гитара',
    vote: 34,
    strings: 12,
    rating: randomInteger(1, 4),
    price: 10500,
    img: acousticGuitar,
  },
  {
    id: 20,
    article: 'LU458283',
    name: 'Liana Z300',
    type: 'акустическая гитара',
    vote: 9,
    strings: 6,
    rating: randomInteger(1, 4),
    price: 13300,
    img: acousticGuitar,
  },
  {
    id: 21,
    article: 'RO324341',
    name: 'Roman RX',
    type: 'укулеле',
    vote: 37,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 4800,
    img: ukulele,
  },
  {
    id: 22,
    article: 'RO214235',
    name: 'Roman TX',
    type: 'укулеле',
    vote: 5,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 1900,
    img: ukulele,
  },
  {
    id: 23,
    article: 'DI132414',
    name: 'Dania U100',
    type: 'укулеле',
    vote: 23,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 2500,
    img: ukulele,
  },
  {
    id: 24,
    article: 'DI934754',
    name: 'Dania WR',
    type: 'укулеле',
    vote: 3,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 3800,
    img: ukulele,
  },
  {
    id: 25,
    article: 'DI034292',
    name: 'Dania LE',
    type: 'укулеле',
    vote: 10,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 4100,
    img: ukulele,
  },
  {
    id: 26,
    article: 'MI193214',
    name: 'Mirana V10',
    type: 'укулеле',
    vote: 14,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 2700,
    img: ukulele,
  },
  {
    id: 27,
    article: 'VO043244',
    name: 'Виолана Mini',
    type: 'укулеле',
    vote: 29,
    strings: 4,
    rating: randomInteger(1, 4),
    price: 6700,
    img: ukulele,
  },
];

const initialState = {
  articles: articles,
  activeArticle: '',
  sorting: '',
  direction: '',
  price: {
    from: '',
    to: '',
    total: [],
  },
  types: [],
  strings: [],
  basket: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToBasket, (state, action) => {
      state.basket = addNewId(action.payload, state.basket);
      state.price.total = state.basket.map((item) => ({id: item.id, price: item.price, count: 1}));
    })
    .addCase(changeGuitarCount, (state, action) => {
      state.price.total = changeCount(action.payload, state.price.total);
    })
    .addCase(deleteFromBasket, (state, action) => {
      state.basket = deleteId(action.payload, state.basket);
    })
    .addCase(addTotalPrice, (state, action) => {
      state.price.total = addNewId(action.payload, state.price.total);
    })
    .addCase(changeSort, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(changeDirection, (state, action) => {
      state.direction = action.payload;
    })
    .addCase(addPriceFrom, (state, action) => {
      state.price.from = action.payload;
    })
    .addCase(addPriceTo, (state, action) => {
      state.price.to = action.payload;
    })
    .addCase(addStringsCount, (state, action) => {
      state.strings = action.payload;
    })
    .addCase(addTypes, (state, action) => {
      state.types = action.payload;
    })
    .addCase(addActiveArticle, (state, action) => {
      state.activeArticle = findId(state.articles, action.payload);
    });
});

export default reducer;
