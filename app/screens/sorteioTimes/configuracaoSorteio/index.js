import React, { useState } from 'react';
import { Switch } from 'react-native';
import { Botao, BotaoTexto, Nome } from '../adicionarNomes/styles';
import { Container, Cabecalho, TitlePage, Infos, TextoInfos, BalancearContainer } from './styles';

const ConfigurarSorteio = ({route, navigation}) => {
  const {esporte, data, jogadoresEspeciais} = route.params
  const [balancear, setBalancear] = useState(false);
  const toggleSwitch = () => setBalancear(previousState => !previousState);
  return (
    <Container>
      <Cabecalho>
        <TitlePage>{esporte}</TitlePage>
      </Cabecalho>
      <Infos>
        <TextoInfos>Você inseriu: {data.length+jogadoresEspeciais.length} jogadores</TextoInfos>
        <BalancearContainer>
          <TextoInfos>Balancear nível técnico</TextoInfos>
          <Switch 
            value={balancear}
            onValueChange={toggleSwitch}
            style={{marginTop: -20}}
          />
        </BalancearContainer>
        <Botao 
          onPress={() => {
            // if (quantidadeTimes / data.lenght >= 2) {
              if (balancear == true) {
                alert("Em breve")
              } else {
                navigation.push("FinalPage", {
                  data: data,
                  esporte: esporte,
                  jogadoresEspeciais: jogadoresEspeciais,
                })
              }
            // }

          }}
          style={{alignSelf: "center", marginTop: 50}}
        >
          <BotaoTexto>Sortear</BotaoTexto>
        </Botao>
      </Infos>
    </Container>
  );
}

export default ConfigurarSorteio;