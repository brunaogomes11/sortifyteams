import styled from 'styled-components/native';
import Slider from '@react-native-community/slider';
import { backgroundColorLight, inputsColor } from '../../../assets/colors';

export const Container = styled.View`
  background-color: ${backgroundColorLight};
  display: flex;
  flex: 1;
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

export const NivelSlider = styled(Slider)`
    width: 245px;
`;

export const SliderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const NivelNumber  = styled.Text`
    font-size: 24px;
    margin-left: 10px;
    color: white;
`;

export const TextoInfos = styled.Text`
    font-size: 16px;
    letter-spacing: 2px;
    color: white;
`;

export const InfoAdd = styled.View`
    align-items: flex-start;
` ;

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

export const GoleiroInfo = styled.View`
    display: flex;
    width: 285px;
    flex-direction: row;
    justify-content: space-between;
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
