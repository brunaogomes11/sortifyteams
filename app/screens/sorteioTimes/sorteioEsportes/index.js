import {
  Container,
  TextoEsporte,
  Esportes,
  Logo,
  ContainerLogo,
  BotaoEsporte,
} from "./styles.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function SorteioEsportes({ navigation }) {
  return (
    <Container>
      <ContainerLogo>
        <Logo
          resizeMode="contain"
          source={require("../../../assets/icons/logo.png")}
        />
      </ContainerLogo>
      <Esportes>
        <BotaoEsporte
          onPress={() =>
            navigation.navigate("AdicionarNomes", { nomeEsporte: "VÔLEI" })
          }
        >
          <FontAwesome5 name="volleyball-ball" color="white" size={50} />
          <TextoEsporte>VÔLEI</TextoEsporte>
        </BotaoEsporte>
        <BotaoEsporte
          onPress={() =>
            navigation.navigate("AdicionarNomes", { nomeEsporte: "BASQUETE" })
          }
        >
          <FontAwesome5 name="basketball-ball" color="white" size={50} />
          <TextoEsporte>BASQUETE</TextoEsporte>
        </BotaoEsporte>
        <BotaoEsporte
          onPress={() =>
            navigation.navigate("AdicionarNomes", { nomeEsporte: "FUTEBOL" })
          }
        >
          <FontAwesome name="soccer-ball-o" color="white" size={50} />
          <TextoEsporte>FUTEBOL</TextoEsporte>
        </BotaoEsporte>
        <BotaoEsporte
          onPress={() =>
            navigation.navigate("AdicionarNomes", { nomeEsporte: "HANDEBOL" })
          }
        >
          <MaterialIcons name="sports-handball" color="white" size={50} />
          <TextoEsporte>HANDEBOL</TextoEsporte>
        </BotaoEsporte>
      </Esportes>
    </Container>
  );
}
