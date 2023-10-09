import "./CreateUser.css";
import { v4 as uuidv4 } from "uuid";

function CreateUser({ modal, setModal, users, setUsers }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      id: uuidv4(),
      url: target["url"].value,
      firstName: target["firstName"].value,
      lastName: target["lastName"].value,
      age: target["age"].value,
      from: target["from"].value,
      job: target["job"].value,
      gender: target["gender"].value,
    };
    setUsers((oldUsers) => [...oldUsers, user]);
    e.target.reset();
    setModal(false);
  };

  return (
    <section
      className={
        modal
          ? "section-create-user section-create-user--active"
          : "section-create-user"
      }
    >
      <div
        className="section-create-user__inner"
        onClick={(e) => {
          if (e.target.classList.contains("section-create-user__inner")) {
            setModal(false);
            return;
          }
        }}
      >
        <div className="section-create-user__form-wrapper">
          <h2 className="section-create-user__title">Create new user</h2>
          <form
            className="section-create-user__form form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label className="form__label-input-wrapper">
              <span className="form__input-label">Image URL: </span>
              <input
                className="form__input"
                type="url"
                name="url"
                required
                autoComplete="off"
              />
            </label>
            <label className="form__label-input-wrapper">
              <span className="form__input-label">First Name: </span>
              <input
                className="form__input"
                type="text"
                name="firstName"
                required
                autoComplete="off"
              />
            </label>
            <label className="form__label-input-wrapper">
              <span className="form__input-label">Last Name: </span>
              <input
                className="form__input"
                type="text"
                name="lastName"
                required
                autoComplete="off"
              />
            </label>
            <label className="form__label-input-wrapper">
              <span className="form__input-label">Age: </span>
              <input
                className="form__input"
                type="number"
                min="1"
                max="100"
                maxLength="3"
                name="age"
                required
                autoComplete="off"
              />
            </label>
            <label className="form__label-input-wrapper">
              <span className="form__input-label">From: </span>
              <input
                className="form__input"
                type="text"
                name="from"
                required
                autoComplete="off"
              />
            </label>
            <label className="form__label-input-wrapper">
              <span className="form__input-label">Job: </span>
              <input
                className="form__input"
                type="text"
                name="job"
                required
                autoComplete="off"
              />
            </label>
            <div className="form__radios">
              <label className="form__label-radio-wrapper">
                <span className="form__label">Male ♂️</span>
                <input
                  className="form__radio"
                  type="radio"
                  name="gender"
                  value="male"
                  required
                  autoComplete="off"
                />
              </label>
              <label className="form__label-radio-wrapper">
                <span className="form__label">Female ♀️</span>
                <input
                  className="form__radio"
                  type="radio"
                  name="gender"
                  value="female"
                  required
                  autoComplete="off"
                />
              </label>
            </div>
            <button className="form__button">Apply</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateUser;
