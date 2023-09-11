import styled from "styled-components";
import { cores } from "../../styles";

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
`;

export const LogoImg = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 50px;
  margin-bottom: 150px;
`;

export const Paragrafo = styled.p`
  color: ${cores.vermelhoClaro};
  font-family: Roboto;
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
