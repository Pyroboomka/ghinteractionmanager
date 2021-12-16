import * as React from 'react';
import {Pressable, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';

export default function Initial({ navigation }) {
  return (
	  <View style={styles.container}>
		<Text style={styles.title}>InitialScreen</Text>
		<Text style={styles.title}>Pressing the button below will mount a new stack</Text>
		<Pressable onPress={() => navigation.navigate('Content')}>
		  <Text style={styles.title}>Mount a new stack</Text>
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
	marginVertical: 24,
  },
  separator: {
	marginVertical: 30,
	height: 1,
	width: '80%',
  },
});
