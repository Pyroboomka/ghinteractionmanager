import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';

export default function Screen1({ navigation }) {
  return (
	  <View style={styles.container}>
		<Text style={styles.title}>Screen1</Text>
		<Pressable onPress={() => navigation.navigate('Screen2')}>
		  <Text style={styles.title}>To Screen 2</Text>
		</Pressable>
	  </View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
  },
  title: {
	fontSize: 20,
	fontWeight: 'bold',
  },
  separator: {
	marginVertical: 30,
	height: 1,
	width: '80%',
  },
});
