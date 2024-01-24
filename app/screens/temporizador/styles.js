import styled from "styled-components/native";
import { backgroundColorLight } from "../../assets/colors";
export const Container = styled.SafeAreaView`
  background-color: ${backgroundColorLight};
  display: flex;
  height: 100vh;
  width: 100vw;
  flex: 1;
`;
export const ContainerLogo = styled.View`
  display: flex;
  margin-top: 80px;
  margin-bottom: 50px;
`;
export const Logo = styled.Image`
  width: 80vw;
`;

export const ContainerTemporizador = styled.View`
  display: flex;
`;
export const ContainerOpcoes = styled.View`
  margin-top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const BotaoOpcoesCr = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  margin: 20px 10px;
`;

export const TextoTemporizador = styled.Text `
  color: white;
  font-size: 25px;
`