import {
    Container,
    Logo,
    ContainerLogo,
    ContainerTemporizador,
    ContainerOpcoes,
    BotaoOpcoesCr,
    TextoTemporizador
  } from "./styles.js";
import { TimerPicker } from "react-native-timer-picker";
import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function Temporizador({ navigation }) {
    const [timer, setTimer] = useState()
    const [minutos, setMinutos] = useState()
    const [segundos, setSegundos] = useState()
    const [timerClocking, setTimerClocking] = useState()
    const [pausado, setPause] = useState(true)

    return (
      <Container>
        <ContainerLogo>
          <Logo
            resizeMode="contain"
            source={require("../../assets/icons/logo.png")}
          />
        </ContainerLogo>
        <ContainerTemporizador style={{alignItems: "center", justifyContent: "center"}}>
            {!timerClocking ? <TimerPicker
                padWithNItems={1}
                hideHours
                onDurationChange={(duration) => {
                    setMinutos(duration.minutes)
                    setSegundos(duration.seconds)
                }}
                minuteLabel="min"
                secondLabel="sec"
                LinearGradient={LinearGradient}
                styles={{
                    pickerItem: {
                        fontSize: 24,
                        color: 'white',
                    },
                    pickerLabel: {
                        fontSize: 16,
                        color: 'white',
                        right: -35,
                    },
                    pickerLabelContainer: {
                        width: 60,
                    },
                    pickerItemContainer: {
                        width: 100,
                    },
                    pickerContainer: {
                        backgroundColor: "transparent",
                        alignItems: 'center',
                    },

                }}
            /> : <CountdownCircleTimer
            isPlaying={pausado}
            strokeWidth={15}
            size={200}
            duration={timer}
            colors={['#008800', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => {setTimerClocking(false)}}
          >
            {({ remainingTime }) => {
                    const minutes = Math.floor(remainingTime / 60)
                    const seconds = remainingTime % 60

                    return <TextoTemporizador>{minutes}:{seconds}</TextoTemporizador>
            }}
          </CountdownCircleTimer>}
            <ContainerOpcoes>
                <BotaoOpcoesCr
                    onPress={() => {

                        if (!timerClocking) {
                            if (minutos > 0 || segundos > 0) {
                                setTimer((minutos*60)+segundos)
                                setTimerClocking(true)
                            } else {
                                alert("Por favor aumente a quantidade de tempo")
                            }
                        } else {
                            pausado ? setPause(false) : setPause(true)
                        }
                    }}
                >
                    <MaterialCommunityIcons name={(timerClocking && pausado) ? "pause" : 'play'} color='white' size={50} />
                </BotaoOpcoesCr>
                <BotaoOpcoesCr
                    onPress={() => {
                        timerClocking ? setTimerClocking(false) : null}}
                >
                    <MaterialCommunityIcons name="stop" color={!timerClocking ? 'grey' : 'white'} size={50} />
                </BotaoOpcoesCr>
            </ContainerOpcoes>
        </ContainerTemporizador>
      </Container>
    );
  }
  