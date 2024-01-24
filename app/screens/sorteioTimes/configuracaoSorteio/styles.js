import styled from 'styled-components/native';
import { backgroundColorLight } from '../../../assets/colors';

export const Container = styled.View`
  background-color: ${backgroundColorLight};
  display: flex;
  flex: 1;
`;

export const Cabecalho = styled.View`
  align-items: center;
`;

export const TitlePage = styled.Text`
    margin-top: 70px;
    font-size: 36px;
    color: white;
    letter-spacing: 5px;
    margin-bottom: 16px;
`;

export const TextoInfos = styled.Text`
    font-size: 18px;
    color: white;
    padding-bottom: 20px;
` 

export const Infos = styled.View`
    padding: 20px;
    margin-top: 60px;
`;

export const QuantidadeContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

export const QuantidadeInput = styled.TextInput`
    width: 140px;
    height: 30px;
    border-width: 1px;
    border-color: white;
    padding-left: 10px;
    border-radius: 10px;
    color: white;
`
export const BalancearContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

