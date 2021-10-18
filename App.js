import { StatusBar } from 'expo-status-bar';
import React, { useState, setState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import ToDoItemComponent from './src/components/toDoItem';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRegistry } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addAction } from './src/store/actions/taskActions';


export default function AppWrapper() {

  return (
    <Provider store={store}> // Set context
      <App /> // Now App has access to context
    </Provider>
  )
}

export function App() {
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={text => setText(text)}
      />
      <Button onPress={() => dispatch(addAction(text))} title="Learn More" color="#841584" accessibilityLabel="Learn more about this purple button" />
      {todos.map(todo => (
        <ToDoItemComponent key={todo.key} text={todo.todo} />
      ))}
    </View>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
