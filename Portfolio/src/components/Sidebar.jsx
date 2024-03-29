import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./informationContainer";

import Avatar from "../img/GustavoLucas.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gustavo Lucas" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="src/Gustavo_Lucas__AYRES_-_.pdf" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
