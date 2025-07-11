import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={`page-${pageNumber}`}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-md border-none join-item ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // Small page count — just render them all
    if (pageCount <= 7) {
      for (let i = 1; i <= pageCount; i++) {
        pageButtons.push(addPageButton({ pageNumber: i, activeClass: page === i }));
      }
    } else {
      // Always show page 1
      pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

      // Add "..." if current page is far from 1
      if (page > 3) {
        pageButtons.push(
          <button key="start-ellipsis" disabled className="btn btn-md join-item">
            ...
          </button>
        );
      }

      // Show current page -1, current, current +1
      for (let i = page - 1; i <= page + 1; i++) {
        if (i > 1 && i < pageCount) {
          pageButtons.push(addPageButton({ pageNumber: i, activeClass: page === i }));
        }
      }

      // Add "..." if current page is far from last
      if (page < pageCount - 2) {
        pageButtons.push(
          <button key="end-ellipsis" disabled className="btn btn-md join-item">
            ...
          </button>
        );
      }

      // Always show last page
      pageButtons.push(addPageButton({ pageNumber: pageCount, activeClass: page === pageCount }));
    }

    return pageButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-center overflow-x-auto">
      <div className="join whitespace-nowrap">
        <button
          className="btn btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>

        {renderPageButtons()}

        <button
          className="btn btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ComplexPaginationContainer;