import "./App.css";
import { useState } from "react";
import Form from "./component/Form";
import Formok from "./component/FormOk";
import Footer from "./component/Footer";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [matchingMail, setMatchingMail] = useState(false);

  return (
    <div>
      <main>
        <div className="container">
          {matchingMail === false ? (
            <Form
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
          ) : (
            <Formok
              name={name}
              email={email}
              password={password}
              matchingMail={matchingMail}
              setMatchingMail={setMatchingMail}
            />
          )}

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
