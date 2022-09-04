import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const TrainingMain = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default TrainingMain;
