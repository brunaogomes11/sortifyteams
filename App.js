
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SorteioEsportes from './app/screens/sorteioTimes/sorteioEsportes'
import AdicionarNomes from './app/screens/sorteioTimes/adicionarNomes';
import ConfigurarSorteio from './app/screens/sorteioTimes/configuracaoSorteio';
import FinalPage from './app/screens/sorteioTimes/finalPage';
import HomePage from './app/screens/rachasHome';
import Temporizador from './app/screens/temporizador';
import AdicionarTimes from './app/screens/criarTorneio/adicionarTimes';
import QuadraEscolhida from './app/screens/criarRacha/quadraEscolhida';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          header: () => null,
          contentStyle: { backgroundColor: '#333333' },
        }}
      >
        <Stack.Screen name="HomePage" component={HomePage}/>
        <Stack.Screen name="Temporizador" component={Temporizador}/>
        <Stack.Screen name="SorteioEsportes" component={SorteioEsportes}/>
        <Stack.Screen name="AdicionarNomes" component={AdicionarNomes}/>
        <Stack.Screen name="ConfigurarSorteio" component={ConfigurarSorteio}/>
        <Stack.Screen name="AdicionarTimes" component={AdicionarTimes}/>
        <Stack.Screen name="QuadraEscolhida" component={QuadraEscolhida}/>
        {/* <Stack.Screen name="ConfigurarChaveamento" component={ConfigurarSorteio}/> */}
        <Stack.Screen name="FinalPage" component={FinalPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;