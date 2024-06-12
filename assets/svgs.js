// svgs.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Svg1 = () => (
  <Svg height="100" width="100">
    <Path d="M50 0 L75 200 L25 200 Z" fill="red" />
  </Svg>
);

export const Svg2 = () => (
  <Svg height="100" width="100">
    <Path d="M10 10 H 90 V 90 H 10 Z" fill="blue" />
  </Svg>
);

export const Svg3 = () => (
  <Svg height="100" width="100">
    <Path d="M20 20 C 40 20, 65 10, 85 20 S 150 150, 180 80" fill="green" />
  </Svg>
);
