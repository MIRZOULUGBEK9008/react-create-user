import "./App.css";
import { useState } from "react";
import CreateUserButton from "./components/create-user-actions/button/CreateUserButton";
import CreateUser from "./components/create-user-actions/create-user/CreateUSer";
import Header from "./components/header/Header";
import NoUser from "./components/no-user/NoUser";

function App() {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  const handleDelete = (id) => {
    setUsers((oldUsers) => oldUsers.filter((user) => user.id !== id));
  };
  return (
    <>
      <Header userCounter={users.length} />
      <CreateUserButton modal={modal} setModal={setModal} />
      <div className="container">
        <ul className="users">
          {users.map((user) => {
            const { url, firstName, lastName, age, from, job, gender, id } =
              user;
            return (
              <li className="users__card card" key={id}>
                <div className="card__inner">
                  <img
                    className="card__img"
                    src={url}
                    alt={firstName}
                    width="50"
                    height="50"
                  />
                  <h3 className="card__title">{`${firstName}, ${lastName}, ${age} age`}</h3>
                  <dl className="card__info info">
                    <div className="info__term-detail">
                      <dt className="info__term">From: </dt>
                      <dd className="info__detail">{from}</dd>
                    </div>
                    <div className="info__term-detail">
                      <dt className="info__term">Job: </dt>
                      <dd className="info__detail">{job}</dd>
                    </div>
                    <div className="info__term-detail">
                      <dt className="info__term">Gender: </dt>
                      <dd className="info__detail">{gender}</dd>
                    </div>
                  </dl>
                  <button
                    className="card__button"
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <CreateUser
        modal={modal}
        setModal={setModal}
        users={users}
        setUsers={setUsers}
      />
    </>
  );
}

export default App;
