import React from "react";
import {
  Container,
  ContainerLogo,
  Logo,
  NomeItemContainer,
  Nome,
  Infos,
  Nivel,
  ListaNomes,
  CorpoTexto,
  TituloSecao
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

const FinalPage = ({ route, navigation }) => {
  const { data, esporte, jogadoresEspeciais } = route.params;
  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function separarTimes(jogadores, esporte, jogadoresEspeciais) {
    let tamanhoTime;
    let quantidadePorTime;
    let times = [];
  
    if (esporte === "VÔLEI") {
      tamanhoTime = 6;
    } else if (esporte === "BASQUETE") {
      tamanhoTime = 5;
    } else if (esporte === "HANDEBOL") {
      tamanhoTime = 6;
    } else if (esporte === "FUTEBOL") {
      tamanhoTime = 4;
    } else {
      return null;
    }
    if (jogadores.length < tamanhoTime * 2) {
      quantidadePorTime = Math.ceil(jogadores.length / 2);
    } else {
      quantidadePorTime = tamanhoTime;
    }
    let contadorJogadores = 0;
    let contadorJogadoresEspeciais = 0;
    
    for (let i = 0; i < jogadores.length / quantidadePorTime; i++) {
      let haGoleiro = false;
      let time = {
        numTime: i + 1,
        data: [],
      };
      for (let j = 0; j < quantidadePorTime; j++) {
        if (contadorJogadores < jogadores.length) {
          time.data.push(jogadores[j]);
          contadorJogadores++;
        } 
        while (contadorJogadoresEspeciais < jogadoresEspeciais.length && !haGoleiro) {
          time.data.push(jogadoresEspeciais[contadorJogadoresEspeciais]);
          haGoleiro = true
          contadorJogadoresEspeciais++;
        }
      }
      times.push(time);
    }
    if (Math.round(jogadores.length / quantidadePorTime) < jogadoresEspeciais.length) {
      let timeJogadoresEspeciais = {
        numTime: ((esporte == 'VÔLEI' ? "Líberos " : "Goleiros ")+"Reservas"),
        data: [],
      };
      for (let k = contadorJogadoresEspeciais; k < jogadoresEspeciais.length; k++) {
        timeJogadoresEspeciais.data.push(jogadoresEspeciais[k]);
        contadorJogadoresEspeciais++;
      }
      times.push(timeJogadoresEspeciais);
    }
    return times;
  }
  const dataEmbaralhada = embaralhar(data);
  const timesSeparados = separarTimes(dataEmbaralhada, esporte, jogadoresEspeciais);

  const renderItem = ({ item }) => {
    return (
      <NomeItemContainer>
        <Nome>{item.nome}</Nome>
        <Infos>
          <Nivel>{item.nivelId}</Nivel>
          {item.jogadorEspecial === true ? (
            esporte == "VÔLEI" ? <MaterialIcons name="star" size={28} color="white" style={{paddingRight: 5}}/> : <MaterialIcons name="pan-tool" size={28} color="white" style={{paddingRight: 5}}/>
          ) : (
            <Nome></Nome>
          )}
        </Infos>
      </NomeItemContainer>
    );
  };

  return (
    <Container>
      <ContainerLogo>
        <Logo
          resizeMode="contain"
          source={require("../../../assets/icons/logo.png")}
        />
      </ContainerLogo>
      <CorpoTexto>
        <ListaNomes
          renderItem={renderItem}
          renderSectionHeader={(
            { section: { numTime } }
          ) => <TituloSecao>TIME {numTime}</TituloSecao>}
          sections={timesSeparados}
          keyExtractor={(item, index) => `${item.numTime}-${index}`}
        />
      </CorpoTexto>
    </Container>
  );
};

export default FinalPage;
