import React from 'react'
import {Pagination} from 'react-bootstrap'
import {useDispatch, } from 'react-redux';
import { getCoins } from '../Features/Favorites/favoritesSlice';


function PaginationComponent() {
  const [page, setPage] = React.useState(1);
 


  
  const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  const dispatch = useDispatch();
React.useEffect(()=>{
  dispatch(getCoins({page:page}))
 }, [page, dispatch]); 

    
    const alwaysShown  = false
    const pagesCount = 20;
    
    const isPaginationShown = alwaysShown ? true : pagesCount > 1;
    const isCurrentPageFirst = page === 1;
    const isCurrentPageLast = page === pagesCount;
  
    const changePage = number => {
      if (page === number) return;
      // dispatch(changeCurrentPage(number))
      setPage(number)
      scrollToTop();
    };
    const onPageNumberClick = pageNumber => {
      changePage(pageNumber);
    };
  
    const onPreviousPageClick = () => {
      const previous = page - 1 
      changePage(previous);
    };
  
    const onNextPageClick = () => {
      const next = page + 1
      changePage(next);
    };
  
   
    let isPageNumberOutOfRange;
  
    const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
      const pageNumber = index + 1;
      const isPageNumberFirst = pageNumber === 1;
      const isPageNumberLast = pageNumber === pagesCount;
      const isCurrentPageWithinTwoPageNumbers =
        Math.abs(pageNumber - page) <= 2;
  
      if (
        isPageNumberFirst ||
        isPageNumberLast ||
        isCurrentPageWithinTwoPageNumbers
      ) {
        isPageNumberOutOfRange = false;
        return (
          <Pagination.Item
            key={pageNumber}
            onClick={() => onPageNumberClick(pageNumber)}
            active={pageNumber === page}
          >
            {pageNumber}
          </Pagination.Item>
        );
      }
  
      if (!isPageNumberOutOfRange) {
        isPageNumberOutOfRange = true;
        return <Pagination.Ellipsis key={pageNumber} className="muted" />;
      }
  
      return null;
    });
      
    return (
      <>
        {isPaginationShown && (
          <Pagination>
            <Pagination.Prev
              onClick={onPreviousPageClick}
              disabled={isCurrentPageFirst} /* if the current page is the first, disable previous button */
            />
            {pageNumbers}
            <Pagination.Next
              onClick={onNextPageClick}
              disabled={isCurrentPageLast}  /* if the current page is the first, disable previous button */
            />
          </Pagination>
        )}
      </>
    );
  };
  

  export default PaginationComponent;
  
    