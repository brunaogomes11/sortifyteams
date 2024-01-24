import styled from 'styled-components/native';
import { backgroundColorLight, inputsColor } from '../../../assets/colors';

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

export const Cabecalho = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const TitlePage = styled.Text`
    margin-top: 35px;
    font-size: 36px;
    color: white;
    letter-spacing: 5px;
    margin-bottom: 16px;
`;

export const InputNomes = styled.TextInput`
    border-width: 1px;
    border-color: black;
    border-radius: 10px;
    background-color: ${inputsColor};
    padding-left: 10px;
    width: 310px;
    height: 40px;
`;

export const Botao = styled.TouchableOpacity`
    background-color: white;
    width: 200px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

export const BotaoTexto = styled.Text`
    color: black;
    font-size: 18px;
    letter-spacing: 2px;
`;

export const ListaNomes = styled.FlatList`
    color: white;
    margin: 20px;
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
    font-size: 18px;
`;

export const Nivel = styled.Text`
    color: white;
    font-size: 18px;
    padding-right: 5px;
`;

export const BotaoConfirmar = styled.TouchableOpacity`
    background-color: white;
    width: 250px;
    height: 45px;
    margin-bottom: 30px;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-radius: 5px;
`;
