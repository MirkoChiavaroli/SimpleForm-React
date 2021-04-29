const Formok = ({ name, email, password, matchingMail, setMatchingMail }) => {
  return (
    <div>
      <div className="matchingMail">
        <h1>Results</h1>
        <p>Name :{name}</p>
        <p>Email :{email}</p>
        <p>Password :{password}</p>
        <br />
        <button
          className="button"
          onClick={() => {
            setMatchingMail(false);
          }}
        >
          Edit your informations
        </button>
      </div>
    </div>
  );
};

export default Formok;

// fare un butto onclick e transormre setMatchingMail(false);
