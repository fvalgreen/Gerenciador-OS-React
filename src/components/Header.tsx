import { Navigation } from "./Navigation";
import logo from '../assets/images/logo.svg';


const Header = () => {
  return(
    <div className="container-header">
      <img src={logo} alt="Logo" className="logo"/>
      <Navigation />
    </div>
  )
}

export default Header;