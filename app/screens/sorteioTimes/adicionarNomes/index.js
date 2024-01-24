import React, { useState } from 'react';
import { Switch, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Container, 
    Cabecalho,
    TitlePage, 
    InputNomes, 
    Botao, 
    BotaoTexto, 
    ListaNomes, 
    NivelSlider,
    SliderContainer,
    NivelNumber, 
    TextoInfos,
    InfoAdd,
    GoleiroInfo,
    NomeItemContainer,
    Infos,
    Nome,
    Nivel,
    BotaoConfirmar } from './styles';

const AdicionarNomes = ({route, navigation}) => {
    const [nome, updateNome] = useState('')
    const [data, updateData] = useState([])
    const [dataComJgrsEsp, updatedataComJgrsEsp] = useState([])
    const [jogadoresEspeciais, updateJogadoresEspeciais] = useState([])
    const [nivel, updateNivel] = useState(0)
    const [isJogadorEspecial, setJogadorEspecial] = useState(false);
    const [contador, updateContador] = useState(0)
    const toggleSwitch = () => setJogadorEspecial(previousState => !previousState);
    const { nomeEsporte } = route.params;
    let string = JSON.stringify(nomeEsporte)
    const nNomeEsporte = string.slice(1, -1);

    const handleAdd = () => {
        if (nome != '' && !isJogadorEspecial) {
            data.push({nome: nome, nivelId: nivel, jogadorEspecial: isJogadorEspecial, id: contador});
            updateData((data) => [...data]);
            updateNome('');
            updateContador(contador+1);
            updateNivel(0);
            setJogadorEspecial(false);
        } else if (nome != '' && isJogadorEspecial){
            jogadoresEspeciais.push({nome: nome, nivelId: nivel, jogadorEspecial: isJogadorEspecial, id: contador});
            updateJogadoresEspeciais((data) => [...data]);
            updateNome('');
            updateContador(contador+1);
            updateNivel(0);
            setJogadorEspecial(false);
        } else {
            alert("Por favor insira um nome");
        }
        if (nome != ''){
            dataComJgrsEsp.push({nome: nome, nivelId: nivel, jogadorEspecial: isJogadorEspecial, id: contador});
            updatedataComJgrsEsp((data) => [...data]);
            updateNome('');
            updateContador(contador+1);
            updateNivel(0);
            setJogadorEspecial(false);
        } 
    }

    const handleRemove = (id) => {
        const novosNomes = dataComJgrsEsp.filter(item => item.id !== id);
        updatedataComJgrsEsp([...novosNomes])
    }
    

    const renderItem = ({item}) => {
        return (
          <NomeItemContainer>
              <Nome>
                  {item.nome}
              </Nome>
              <Infos>
                  <Nivel>
                      {item.nivelId}
                  </Nivel>
                  {
                    item.jogadorEspecial === true
                    ? nNomeEsporte == "VÔLEI" ? <MaterialIcons name="star" size={28} color="white" style={{paddingRight: 5}}/> : <MaterialIcons name="pan-tool" size={28} color="white" style={{paddingRight: 5}}/>
                    : <Nome></Nome>
                  }
                  <MaterialIcons name="remove-circle" size={28} color="white" onPress={() => handleRemove(item.id)}/>
              </Infos>
          </NomeItemContainer>
        );
    }
    
    return (
        <Container>
            <Cabecalho>
                <TitlePage>{nNomeEsporte}</TitlePage>
                <InputNomes 
                    onChangeText={(text) => updateNome(text)}
                    value={nome}
                    placeholder="Digitar Nome"
                    placeholderTextColor="black"
                />
                <InfoAdd>
                    <TextoInfos>Nível técnico</TextoInfos>
                    <SliderContainer>
                        <NivelSlider 
                            thumbTintColor="white"
                            minimumValue={0}
                            maximumValue={5}
                            step={1}
                            value={nivel}
                            onValueChange={(nivel) => updateNivel(nivel)}
                        />
                        <NivelNumber>
                            {nivel}
                        </NivelNumber>
                    </SliderContainer>
                    {(nNomeEsporte === 'BASQUETE')
                        ? null
                        : <GoleiroInfo>
                            <TextoInfos>{(nNomeEsporte === 'VÔLEI') ? 'Líbero' : 'Goleiro'}</TextoInfos>
                            <Switch 
                                value={isJogadorEspecial}
                                onValueChange={toggleSwitch}
                            />
                        </GoleiroInfo>
                    }
                </InfoAdd>
                <Botao onPress={handleAdd}>
                    <BotaoTexto>Adicionar</BotaoTexto>
                </Botao>
            </Cabecalho>
            
            <ListaNomes 
                data={dataComJgrsEsp}
                keyExtractor={(item, index) => String(index)}
                renderItem={renderItem}
                extraData={dataComJgrsEsp}
            />
            {dataComJgrsEsp.length >= 6 ? <BotaoConfirmar onPress={() => {
                if(dataComJgrsEsp.length >= 6) {
                    navigation.push("ConfigurarSorteio", {
                        data: data,
                        esporte: nNomeEsporte,
                        jogadoresEspeciais: jogadoresEspeciais
                    })
                } else {
                    alert("Você precisa adicionar pelo menos 4 nomes")
                }
            }}>
                <BotaoTexto style={{fontSize: 17}}>CONFIRMAR</BotaoTexto>
            </BotaoConfirmar> : <View></View>}
        </Container>
    );
}

export default AdicionarNomes;