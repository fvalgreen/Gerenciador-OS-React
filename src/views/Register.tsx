import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mail from "../assets/images/mail.svg";
import sector from "../assets/images/sector.svg";
import user from "../assets/images/user.svg";
import key from "../assets/images/lock.svg";
import logo from "../assets/images/logo.svg";
import PublicInput from "../components/PublicInput";
import { AuthServices } from "../services/AuthServices";

const authServices = new AuthServices();

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const doRegister = async () => {
    try {
      setError("");
      if(confirmPassword !== password){
        return setError('As senhas devem ser iguais')
      }
      if (
        !email ||
        email.trim().length < 5 ||
        !password ||
        password.trim().length < 6 || !department ||
        department.trim().length < 3 || !name ||
        name.trim().length < 3
      ) {
        return setError("Favor preencher os campos corretamente");
      }
      setLoading(true);

      const body = {
        nome: name,
        email,
        senha: password,
        setor: department
      }

      await authServices.register(body);      
      setLoading(false);
      return navigate('/?success=true')

    } catch (err: any) {
      console.log("Erro ao efetuar o login: ", err);
      setLoading(false);
      if (err?.response?.data?.erro) {
        return setError(err?.response?.data?.erro);
      }
      return setError(
        "Não foi possível realizar o cadastro, por favor tente novamente."
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
            icon={user}
            name="Nome"
            type="text"
            alt="Nome"
            modelValue={name}
            setValue={setName}
          />
          <PublicInput
            icon={sector}
            name="Setor"
            type="text"
            alt="Setor"
            modelValue={department}
            setValue={setDepartment}
          />
          <PublicInput
            icon={mail}
            name="Email"
            type="text"
            alt="Email"
            modelValue={email}
            setValue={setEmail}
          />
          <PublicInput
            icon={key}
            name="Senha"
            type="password"
            alt="Senha"
            modelValue={password}
            setValue={setPassword}
          />
          <PublicInput
            icon={key}
            name="Confirmar Senha"
            type="password"
            alt="Confirmar senha"
            modelValue={confirmPassword}
            setValue={setConfirmPassword}
          />
          {error && <p className="error">{error}</p>}
          <button type="button" onClick={doRegister} disabled={loading} className={loading? 'disabled' : ''}>
            {loading ? "...Carregando" : "Cadastrar"}
          </button>
          <div className="info">
            <p>Já possui conta?</p>
            <Link to={"/"}>Faça seu Login agora!</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
