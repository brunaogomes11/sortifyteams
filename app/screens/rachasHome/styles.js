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

export const ContainerOpcoes = styled.View`
  display: flex;
  flex: 2;
`;

export const BotaoOpcao = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px 10px;
`;

export const TextoOpcao = styled.Text`
  color: white;
  font-size: 40px;
  margin-left: 10px;
`;