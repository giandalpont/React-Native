import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import signos from './Signo.json'

class App extends Component {

  onPress = ( idSigno )=>{
    this.history.push(`/${idSigno}`)
  }

  render() {
    return (
      <View style={styles.container}>
          {signos.map((signo, key)=>(
          <Button 
            key={key} 
            title={signo.nome}  
            onPress={ ()=> this.props.history.push( '/' + key ) } 
          />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 17    
  },
})
export default App
