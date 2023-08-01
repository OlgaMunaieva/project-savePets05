import { ArrovStyle, ArrovStyleLeft, Wraper } from "./newsPaginator.styled.js";
import ReactPaginate from "react-paginate";
import './pagination.css';

const NewsPaginator = ({click, page, limit,totalPages,news }) =>{

    const handlePageClick = (event) => {
        const newOffset = (event.selected * limit) % totalPages;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        click(newOffset);
      };

  return (
    <>
      {news.length > 0 && (
        <Wraper>
          <ReactPaginate
            nextLabel={<ArrovStyle />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={Math.ceil(totalPages / limit) || 0}
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
}

export default NewsPaginator;