import { Body, ContainerPrincipal, Row, ContainerOpcoes, Column, NomeQuadra, ContainerInformacoes, TituloInfo, TextoInfo } from "./styles"
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function QuadraEscolhida ({navigation}) {
  return (
    <Body>
      <ContainerOpcoes>
        <Ionicons name="chevron-back-circle" color="white" size={50} />
        <Row>
          <Ionicons name="sunny" color="white" size={50} />
          <FontAwesome name="user" color="white" size={50} />
        </Row>
      </ContainerOpcoes>
      <ContainerPrincipal>
        <NomeQuadra>Quadra Fulaninho de tal</NomeQuadra>
        <ContainerInformacoes>
          <Row>
            <TituloInfo>Endereço: </TituloInfo>
            <Column>
              <TextoInfo>Rua Nao sei oque de tal n° 123</TextoInfo>
              <TextoInfo>Bairro Tal</TextoInfo>
              <TextoInfo>Cidadezinha</TextoInfo>
            </Column>
          </Row>
          <Row>
            <TituloInfo>Contato: </TituloInfo>
          </Row>
        </ContainerInformacoes>
      </ContainerPrincipal>
    </Body>
  );

}