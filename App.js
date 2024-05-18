import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';


const App = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isInfoVisible1, setIsInfoVisible1] = useState(false);

  const handlePress = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  const handlePress1 = () => {
    setIsInfoVisible1(!isInfoVisible1);
  };

  return (


    <View style={styles.container}>
          <Text style={{color:'#6a00ff', fontSize: 45,marginTop: 20}}>
          Home
        </Text>
       
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          {isInfoVisible ? 'Hide Recent Alarms' : 'Show Recent Alarms'}
        </Text>
      </TouchableOpacity>
      {isInfoVisible && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            This is the additional information that you can view on the same page.
          </Text>
        </View>
      )}

<TouchableOpacity style={styles.button} onPress={handlePress1}>
        <Text style={styles.buttonText}>
          {isInfoVisible1 ? 'Hide Camera Feed' : 'Show Camera Feed'}
        </Text>
      </TouchableOpacity>
      {isInfoVisible && (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            This is the additional information that you can view on the same page.
          </Text>
        </View>
      )}
      <YoutubePlayer
  height={300}
  play={true}
  videoId={'iee2TATGMyI'}
  />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 5, 
    borderRadius: 5,
    marginTop:40, 
    marginBottom: 20,
    width: 300, 
    height: 30, 
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 75,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
  },
  infoText: {
    fontSize: 16,
  },
});

export default App;
