import "./App.css";
import { useState } from "react";
import Form from "./component/Form";
import Formok from "./component/FormOk";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [matchingMail, setMatchingMail] = useState(false);

  return (
    <div>
      <Form
        className={matchingMail === true ? "hidden" : "display"}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirm={confirm}
        setConfirm={setConfirm}
        matchingMail={matchingMail}
        setMatchingMail={setMatchingMail}
      />
      <Formok
        className="showUp"
        name={name}
        email={email}
        password={password}
      />
    </div>
  );
}

export default App;
