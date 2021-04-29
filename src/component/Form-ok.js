const Formok = ({ name, email, password }) => {
  return (
    <div>
      <div className="showUp">
        <h1>Results</h1>
        <p>Name :{name}</p>
        <p>Email :{email}</p>
        <p>Password :{password}</p>
        <br />
        <input type="submit" value="Edit your informations" />
      </div>
    </div>
  );
};

export default Formok;
