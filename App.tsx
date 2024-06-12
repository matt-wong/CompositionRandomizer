// App.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Svg1, Svg2, Svg3 } from './assets/svgs';

const App = () => {
  const svgs: JSX.Element[] = [<Svg1 key="1" />, <Svg2 key="2" />, <Svg3 key="3" />];
  const [currentSvg, setCurrentSvg] = useState<JSX.Element>(svgs[0]);


  useEffect(() => {
    // Randomly select an SVG when the component mounts
    setCurrentSvg(svgs[Math.floor(Math.random() * svgs.length)]);
  }, []);

  const handleRandomize = () => {
    setCurrentSvg(svgs[Math.floor(Math.random() * svgs.length)]);
  };

  // test

  return (
    <View style={styles.container}>
      {currentSvg}
      <Button title="Randomize SVG" onPress={handleRandomize}/>
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
});

export default App;