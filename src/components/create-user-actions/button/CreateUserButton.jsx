import "./CreateUserButton.css";

function CreateUserButton({ modal, setModal }) {
  return (
    <button
      onClick={() => {
        setModal(true);
      }}
      className={modal ? "create-user-button active" : "create-user-button"}
      type="button"
    >
      Create user
    </button>
  );
}

export default CreateUserButton;
