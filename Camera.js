import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handlePress = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <View>
      <Text style={{ marginTop: 40, color: '#6a00ff',fontSize: 25, marginLeft: 40}}>Check Your Recent Alarms</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 40, color: '#6a00ff',fontSize: 25, marginLeft: 40}}>View Cameras</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    marginLeft: 10,
    marginRight: 10, 
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default App;
