import React, {useEffect, useState} from 'react';
import Sorting from '../sorting/sorting';
import ArticlesList from '../articles-list/articles-list';
import Pagination from '../pagination/pagination';
import {useSelector} from 'react-redux';
import {selectSortingArticles} from '../../../store/selectors';

const initialPage = 1;
const articlePerPage = 9;

function Preview() {
  const articles = useSelector(selectSortingArticles);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [articlesPerPage] = useState(articlePerPage);

  useEffect(() => {
    const pageCount = Math.ceil(articles.length / articlesPerPage);

    if (pageCount < currentPage) {
      const pages = pageCount - initialPage;
      setCurrentPage(pageCount - pages);
    }
  }, [articles, articlesPerPage, currentPage]);

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
      <ArticlesList articles={currentArticles}/>
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
