import Formok from "./Form-ok";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirm,
  setConfirm,
}) => {
  const checkEmail = (event) => {
    event.preventDefault();
    if (password !== confirm) {
      alert("Vos duex mots de passe ne sont pas identiques");
    } else {
      return showUp;
    }
  };
  return (
    <div>
      <div className="check-ok">
        <h1>Create account</h1>
        <form onSubmit={checkEmail}>
          <p>Name</p>
          <input
            value={name}
            placeholder="Mario Rossi"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />

          <p>Email</p>
          <input
            value={email}
            placeholder="mariorossi@lereacteur.io"
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <p>Password</p>
          <input
            className="password"
            value={password}
            placeholder="pip0djwkd$j"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />

          <p>Confirm your Password</p>
          <input
            className="confirm"
            value={confirm}
            placeholder="pip0djwkd$j"
            type="password"
            onChange={(event) => {
              setConfirm(event.target.value);
            }}
          />
          <br />
          <input type="submit" value="Se connecter" />
        </form>
      </div>
    </div>
  );
};

export default Form;