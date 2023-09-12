import {
  Copy,
  FooterContaine,
  LogoFooter,
  SocialIcon,
  Socialcontainer,
} from "./styles";

import Facebook from "../../assets/Imagens/facebook_logo.svg";
import Tt from "../../assets/Imagens/twitter_logo.svg";
import Insta from "../../assets/Imagens/instagram_logo.svg";
import logo from "../../assets/Imagens/logo.svg";

const Footer = () => (
  <FooterContaine>
    <LogoFooter src={logo} alt="" />
    <Socialcontainer>
      <SocialIcon src={Facebook} alt="" />
      <SocialIcon src={Tt} alt="" />
      <SocialIcon src={Insta} alt="" />
    </Socialcontainer>
    <Copy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{" "}
    </Copy>
  </FooterContaine>
);

export default Footer;
