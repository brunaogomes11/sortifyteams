import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, 
    Cabecalho,
    InputNomes, 
    Botao, 
    BotaoTexto, 
    ListaNomes, 
    NomeItemContainer,
    Logo,
    Nome,
    ContainerLogo,
    BotaoConfirmar } from './styles';

const AdicionarTimes = ({route, navigation}) => {
    const [nome, updateNome] = useState('')
    const [dataTimes, updateDataTimes] = useState([])
    const [contador, updateContador] = useState(0)

    const handleAdd = () => {
        if (nome != ''){
            dataTimes.push({nome: nome, id: contador});
            updatedataTimes((data) => [...data]);
            updateNome('');
            updateContador(contador+1);
            updateNivel(0);
            setJogadorEspecial(false);
        } else {
            alert("Por favor insira um nome");
        }
    }

    const handleRemove = (id) => {
        const novosNomes = dataTimes.filter(item => item.id !== id);
        updateDataTimes([...novosNomes])
    }
    

    const renderItem = ({item}) => {
        return (
          <NomeItemContainer>
                <Nome>
                    {item.nome}
                </Nome>
                <MaterialIcons name="remove-circle" size={28} color="white" onPress={() => handleRemove(item.id)}/>
          </NomeItemContainer>
        );
    }
    
    return (
        <Container>
            <Cabecalho>
                <ContainerLogo>
                    <Logo
                        resizeMode="contain"
                        source={require("../../../assets/icons/logo.png")}
                    />
                </ContainerLogo>
                <InputNomes 
                    onChangeText={(text) => updateNome(text)}
                    value={nome}
                    placeholder="Digitar Nome do Time"
                    placeholderTextColor="black"
                />
                <Botao onPress={handleAdd}>
                    <BotaoTexto>Adicionar</BotaoTexto>
                </Botao>
            </Cabecalho>
            
            <ListaNomes 
                data={dataTimes}
                keyExtractor={(item, index) => String(index)}
                renderItem={renderItem}
                extraData={dataTimes}
            />
            <BotaoConfirmar onPress={() => {
                if(dataTimes.length >= 4) {
                    // navigation.push("ConfigurarSorteio", {
                    //     data: dataTimes,
                    //     esporte: nNomeEsporte,
                    //     jogadoresEspeciais: jogadoresEspeciais
                    // })
                } else {
                    alert("Você precisa adicionar pelo menos 4 times")
                }
            }}>
                <BotaoTexto style={{fontSize: 17}}>CONFIRMAR</BotaoTexto>
            </BotaoConfirmar>
        </Container>
    );
}

export default AdicionarTimes;