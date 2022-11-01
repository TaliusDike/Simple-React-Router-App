import User from "./User";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";

const myUsersPerPage = 6;

const Users = ({ users }) => {
    const [startingPoint, setStartingPoint] = useState(0)
    const end = startingPoint + myUsersPerPage;

    const changePage = (myPages) => {
        setStartingPoint((myPages - 1) * myUsersPerPage);
    }

  return (
    <section className="userspage-container">
      <ol>
        <h2>SEE ALL 30 APP USERS BELOW:</h2>
        {users.slice(startingPoint, end).map((user, i) => (
          <User name={user.name} email={user.email} key={user.id} />
        ))}
      </ol>
      <Pagination totalUsers={users.length} usersPerPage={myUsersPerPage} onChange={changePage} />
    </section>
  );
};

export default Users;
