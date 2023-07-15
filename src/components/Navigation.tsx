import {useLocation, useNavigate} from "react-router-dom";
import home from "../assets/images/home.svg";
import homeAtivo from "../assets/images/home-ativo.svg";
import notebook from "../assets/images/notebook.svg";
import notebookAtivo from "../assets/images/notebook-ativo.svg";
import user from "../assets/images/user.svg";
import userAtivo from "../assets/images/user-ativo.svg";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mobile = window.innerWidth <= 760;

  const getIcon = (name: string) => {
    switch(name){
      case 'home':
        if(location.pathname !== '/chamados' && location.pathname !== '/user'){
          return homeAtivo;
        }
        return home;
      case 'chamados':
        if(location.pathname === '/chamados' || location.pathname === '/newTicket'){
          return notebookAtivo;
        }
        return notebook;
      case 'user':
        if(location.pathname === '/user'){
          return userAtivo;
        }
        return user;
      default:
        return "";
      
    }
  }

  return (
    <div className="container-navigation">
      <ul>
        <li>
          <img src={getIcon('home')} alt="home" className="iconNav" onClick={() => navigate('/')}/>
        </li>
        <li>
          <img src={getIcon('chamados')} alt="chamados" className="iconNav" onClick={() => navigate('/chamados')}/>
        </li>
        <li>
          <img src={getIcon('user')} alt="user" className="iconNav" onClick={() => navigate('/user')} />
        </li>
      </ul>
    </div>
  );
};
