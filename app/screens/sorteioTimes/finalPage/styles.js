import styled from "styled-components/native";
import { backgroundColorLight } from "../../../assets/colors";
export const Container = styled.View`
  background-color: ${backgroundColorLight};
  display: flex;
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

export const TitlePage = styled.Text`
  margin-top: 70px;
  font-size: 36px;
  color: white;
  letter-spacing: 5px;
  margin-bottom: 16px;
`;

export const ListaNomes = styled.SectionList`
  color: white;
  margin: 35px;
`;

export const CorpoTexto = styled.SafeAreaView`
  width: 100%;
  flex: 1;
`;

export const NomeItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3px;
`;

export const Infos = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Nome = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Nivel = styled.Text`
  color: white;
  font-size: 16px;
  padding-right: 5px;
`;

export const TituloSecao = styled.Text`
  background-color: #111111;
  width: 100%;
  color: white;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
`;
