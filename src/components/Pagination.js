import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrev = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center mt-3">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrev}>
              Prev.
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Sig.
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
