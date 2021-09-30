import React from 'react';
import Sorting from '../sorting/sorting';
import ArticleList from '../article-list/article-list';
import Pagination from '../pagination/pagination';

function Products() {
  return (
    <div>
      <Sorting/>
      <ArticleList/>
      <Pagination/>
    </div>
  );
}

export default Products;
