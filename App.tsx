// App.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Svg1, Svg2, Svg3, Svg4 } from './assets/svgs';
import { Svg } from 'react-native-svg';

const App = () => {
  const svgs: JSX.Element[] = [<Svg1 key="1" />, <Svg2 key="2" />, <Svg3 key="3" />, <Svg4 key='4'/>];
  const [currentSvgs, setCurrentSvgs] = useState<JSX.Element[]>([]);


  const randomizeSvgs = () => {
    const randomSvgs = [];
    const numSvgs = Math.floor(Math.random() * svgs.length) + 1;
    for (let i = 0; i < numSvgs; i++) {
      const randomIndex = Math.floor(Math.random() * svgs.length);
      randomSvgs.push(svgs[randomIndex]);
    }
    setCurrentSvgs(randomSvgs);
  };

  useEffect(() => {
    randomizeSvgs();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.canvas}>
        <Svg>
        {currentSvgs.map((SvgComponent, index) => (
          <Svg>{SvgComponent}</Svg>
        ))}
        </Svg>

      </View>
      <Button title="Randomize SVGs" onPress={randomizeSvgs} />
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
  canvas: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 20,
    marginBottom: 20,
    width: 350,
    height: 350
  },
});

export default App;