import { useState } from "react";
import mail from "../assets/images/envelope.svg";
import key from "../assets/images/chave.svg";
import logo from "../assets/images/logo.svg";
import PublicInput from "../components/PublicInput";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const doLogin = async () => {

    alert(`login: ${login}, senha: ${password}`)
  }

  return (
    <>
      <div className="container-public">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <form>
          <PublicInput icon={mail} name="Email" type="text" alt="Email" modelValue={login} setValue={setLogin} />
          <PublicInput icon={key} name="Senha" type="password" alt="Senha" modelValue={password} setValue={setPassword} />
          <button type="button" onClick={doLogin}>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
