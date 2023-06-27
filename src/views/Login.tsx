import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import mail from "../assets/images/user.svg";
import key from "../assets/images/lock.svg";
import logo from "../assets/images/logo.svg";
import PublicInput from "../components/PublicInput";
import { AuthServices } from "../services/AuthServices";
import { AuthorizeContext } from "../App";

const authServices = new AuthServices();

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setToken } = useContext(AuthorizeContext);

  const doLogin = async () => {
    try {
      setError("");
      if (
        !login ||
        login.trim().length < 5 ||
        !password ||
        password.trim().length < 6
      ) {
        return setError("Favor preencher os campos corretamente");
      }
      setLoading(true);

      await authServices.login({ login, senha: password }, setToken);
      setLoading(false);
    } catch (err: any) {
      console.log("Erro ao efetuar o login: ", err);
      setLoading(false);
      if (err?.response?.data?.erro) {
        return setError(err?.response?.data?.erro);
      }
      return setError(
        "Não foi possível realizar o login, por favor tente novamente."
      );
    }
  };

  return (
    <>
      <div className="container-public">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <form>
          <PublicInput
            icon={mail}
            name="Email"
            type="text"
            alt="Email"
            modelValue={login}
            setValue={setLogin}
          />
          <PublicInput
            icon={key}
            name="Senha"
            type="password"
            alt="Senha"
            modelValue={password}
            setValue={setPassword}
          />
          {error && <p className="error">{error}</p>}
          <button type="button" onClick={doLogin}>
            Login
          </button>
          <div className="register-info">
            <p>Não possui conta?</p>
            <Link to={"/register"}>Cadastre-se agora!</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
