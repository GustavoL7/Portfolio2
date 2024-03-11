import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/gustavo-lucas-ayres-a68558281/"  },
  { name: "github", icon: <FaGithub />, url: "https://github.com/GustavoL7" },
  { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/gustav_lks/" },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.url} className="social-btn" id={network.name} target="_blank" key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
