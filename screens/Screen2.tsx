import * as React from 'react';
import { StyleSheet, InteractionManager } from 'react-native';
import { Text, View } from '../components/Themed';
import {useEffect, useState} from "react";


export default function Screen2() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
	console.log('UseEffect called');
	let task = InteractionManager.runAfterInteractions(() => {
	  console.log('RunAfterInteractions...', task);
	  setIsReady(true);
	})
	return () => {
	  console.log('UseEffect cleanup, task cancel', task);
	  task.cancel();
	}
  },[])

  return (
	  <View style={styles.container}>
		<Text style={styles.title}>Screen2</Text>
		<Text style={[styles.title, { color: isReady ? 'green' : 'red'}]}>{isReady ? 'isReady' : 'notReady'}</Text>
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
