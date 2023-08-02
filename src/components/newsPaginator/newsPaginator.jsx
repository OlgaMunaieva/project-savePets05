import { ArrovStyle, ArrovStyleLeft, Wraper } from './newsPaginator.styled.js';
import ReactPaginate from 'react-paginate';
import './pagination.css';

const NewsPaginator = ({  setItems, limit, news }) => {
  
  const pageCount = Math.ceil(news.length / limit);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * limit) % news.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);

    setItems(prevState => [...prevState,...news.slice(newOffset, newOffset + limit)]);
  };

  return (
    <>
      {news.length > 0 && (
        <Wraper>
          <ReactPaginate
            nextLabel={<ArrovStyle />}
            onPageChange={(e)=>handlePageClick(e)}
            pageRangeDisplayed={6}
            marginPagesDisplayed={1}
            pageCount={pageCount || 0}
            previousLabel={<ArrovStyleLeft />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-arr"
            nextClassName="page-item"
            nextLinkClassName="page-arr"
            breakLabel=""
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active-btn"
            renderOnZeroPageCount={null}
          />
        </Wraper>
      )}
    </>
  );
};

export default NewsPaginator;
