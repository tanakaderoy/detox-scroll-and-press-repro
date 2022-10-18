/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';

const data = new Array(20)
  .fill(1)
  .map((x, i) => ({title: `Button #${i + 1}`, id: i}));

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(count + 1), [count]);
  const renderItem = useCallback(
    ({item}) => {
      return (
        <TouchableHighlight
          underlayColor={'rgb(23,12,54)'}
          style={styles.button}
          onPress={increment}
          testID={`Button_${item.id}`}>
          <Text style={styles.text}>{item.title}</Text>
        </TouchableHighlight>
      );
    },
    [increment],
  );

  const keyExtractor = useCallback(item => {
    return item.id;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text testID="count">{count}</Text>
      <FlatList
        testID="Button_List"
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  button: {
    height: 30,
    margin: 10,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
  },
});

export default App;
