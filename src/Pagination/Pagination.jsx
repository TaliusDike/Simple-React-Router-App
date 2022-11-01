import { useState } from "react";

const Pagination = (props) => {
  const totalUsers = props.totalUsers;
  const usersPerPage = props.usersPerPage;
  const finalPage = Math.ceil(totalUsers / usersPerPage);

  const [myPages, setMyPages] = useState(1);

  const prevHandler = () => {
    if (myPages === 1) return;
    setMyPages((prevPage) => prevPage - 1);
    props.onChange(myPages - 1);
  };

  const nextHandler = () => {
    if (myPages === finalPage) return;
    setMyPages((prevPage) => prevPage + 1);
    props.onChange(myPages + 1);
  };

  return (
    <div>
      <div className="pagination-flex">
        <button className="pagination-btn" onClick={prevHandler}>
          Prev
        </button>
        <p>{myPages}</p>
        <button className="pagination-btn" onClick={nextHandler}>
          Next
        </button>
      </div>
      {Array.from({ length: finalPage }, (_, i) => i + 1).map((each) => (
        <button
          className="pagination-pages-btn"
          onClick={() => {
            setMyPages(each);
            props.onChange(myPages);
          }}
          key={each}
        >
          {each}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
