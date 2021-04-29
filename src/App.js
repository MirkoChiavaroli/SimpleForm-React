import "./App.css";
import { useState } from "react";
import Form from "./component/Form";
import Formok from "./component/Form-ok";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div>
      <Form
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        confirm={confirm}
        setConfirm={setConfirm}
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
