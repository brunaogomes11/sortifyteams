import styled from "styled-components/native";
import { backgroundColorDark } from "../../../assets/colors";

export const Body = styled.SafeAreaView`
  background-color: ${backgroundColorDark};
  display: flex;
  height: 100vh;
  width: 100vw;
  flex: 1;
`;
export const Cabecalho = styled.SafeAreaView `
  display: flex;
  flex-direction: column;
`
export const ContainerPrincipal = styled.View`
`

export const ContainerOpcoes = styled.View `
  display: flex;
  flex-direction: row;
  width: 100vw;
  padding: 30px 5px;
  justify-content: space-between;
`
export const Row = styled.View `
  display: flex;
  flex-direction: row;
  width: 100vw;
`
export const Column = styled.View `
  display: flex;
  flex-direction: column;
`
export const ContainerLogo = styled.View`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Logo = styled.Image`
  width: 80vw;
`;
export const NomeQuadra = styled.Text `
  font-size: 24px;
  color: white;
`
export const FotosQuadraCarrousel = styled.View `
`
export const ContainerInformacoes = styled.View `

`
export const TituloInfo = styled.Text `
  font-size: 24px;
  color: white;
`
export const TextoInfo = styled.Text `
  font-size: 20px;
  color: white;
`