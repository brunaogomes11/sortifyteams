import {
  Container,
  Logo,
  ContainerLogo,
  ContainerOpcoes,
  BotaoOpcao,
  TextoOpcao
} from "./styles.js";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function HomePage({ navigation }) {
  return (
    <Container>
      <ContainerLogo>
        <Logo
          resizeMode="contain"
          source={require("../../assets/icons/logo.png")}
        />
      </ContainerLogo>
      <ContainerOpcoes>
        <BotaoOpcao
          onPress={() =>
            navigation.navigate("Temporizador")
          }
        >
          <Ionicons name="stopwatch-outline" color="white" size={50} />
          <TextoOpcao>CRÔNOMETRO</TextoOpcao>
        </BotaoOpcao>
        <BotaoOpcao
          onPress={() =>
            navigation.navigate("SorteioEsportes", { nomeEsporte: "FUTEBOL" })
          }
        >
          <MaterialCommunityIcons name="dice-multiple-outline" color="white" size={50} />
          <TextoOpcao>SORTEAR TIMES</TextoOpcao>
        </BotaoOpcao>
        <BotaoOpcao
          onPress={() =>
            navigation.navigate("QuadraEscolhida")
          }
        >
          <FontAwesome5 name="clipboard-list" color="white" size={50} />
          <TextoOpcao>CRIAR RACHAS</TextoOpcao>
        </BotaoOpcao>
      </ContainerOpcoes>
    </Container>
  );
}
