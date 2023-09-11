import { Imagem, LogoImg, Paragrafo, Container } from "./styles";
import bannerImg from "../../assets/Imagens/Vector.png";
import Logo from "../../assets/Imagens/logo.svg";

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Container>
      <LogoImg src={Logo} alt="Efood" />
      <Paragrafo>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Paragrafo>
    </Container>
  </Imagem>
);

export default Header;
