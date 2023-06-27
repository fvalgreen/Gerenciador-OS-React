import { useState } from "react";
import mail from "../assets/images/user.svg";
import key from "../assets/images/lock.svg";
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
          {error && 
            <p className="error">{error}</p>
          }
          <button type="button" onClick={doLogin}>Login</button>
        </form>
        <div className="register-info">
          <p>Não possui conta?</p>
          <span>Cadastre-se agora!</span>
        </div>
      </div>
    </>
  );
};

export default Login;
