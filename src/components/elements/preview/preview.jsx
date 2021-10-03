import React, {useState} from 'react';
import Sorting from '../sorting/sorting';
import ArticleList from '../article-list/article-list';
import Pagination from '../pagination/pagination';
import {useSelector} from 'react-redux';

function Preview() {
  const articles = useSelector((state) => state.articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(9);
  const [activeSort, setActiveSort] = useState('по цене');

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = articles.slice(firstArticleIndex, lastArticleIndex);

  const paginate = (pageNumber) => {
    if (pageNumber === currentPage) {
      return;
    }
    setCurrentPage(pageNumber);
  };
  const nextPage = () => {
    setCurrentPage((prev) => prev === (Math.ceil(articles.length / articlesPerPage)) ? (Math.ceil(articles.length / articlesPerPage)) : prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev === 1 ? 1 : prev - 1);
  };

  return (
    <div>
      <Sorting/>
      <ArticleList articles={currentArticles}/>
      <Pagination
        articles={articles.length}
        articlesPerPage={articlesPerPage}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}

export default Preview;
