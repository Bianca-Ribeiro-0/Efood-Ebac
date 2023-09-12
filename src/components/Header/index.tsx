import logo from "../../assets/Imagens/logo.svg";
import { HeaderContainer, Logo, Title } from "./styles";

const Header = () => (
  <HeaderContainer>
    <Logo src={logo} alt="" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeaderContainer>
);

export default Header;
