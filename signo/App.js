import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ListaSignos from './ListaSignos'
import DetalheSigno from './DetalheSigno'
import { NativeRouter as Router , Switch, Route} from 'react-router-native'

class App extends Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            <Route path='/:idSigno' component={DetalheSigno} />
            <Route  component={ListaSignos} />
          </Switch>
        </View>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1  
  },
})
export default App

/*------------------------------------------------------------------------*/

// Aula 04
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <Text>{JSON.stringify(signos, undefined, 2)}</Text>  mostra a lista em JSON*/}
//         {signos.map((signo, key)=>(
//           <Text key={key}>{signo.nome}</Text>
//         ))}{/* Ppercora cada signos e lista como você defini */}
//       </View>
//     )
//   }
// }

/*------------------------------------------------------------------------*/
// AULA 05
// class App extends Component {
//   render() {
//     return <DetalheSigno idSigno={ 1 }/>

//     return (
//       <View style={styles.container}>
//           {signos.map((signo, key)=>(
//           <Button key={key} title={signo.nome}  onPress={ ()=>console.log('Clicou') } />
//         ))}{/* Ppercora cada signos e lista como você defini */}
//       </View>
//     )
//   }
// }

/*------------------------------------------------------------------------*/