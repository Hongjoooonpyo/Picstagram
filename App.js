import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import readUser from './readUser';

function App() {
  const [userList, setUserList] = useState([]);
  // useEffect(() => {
  //   readUser().then(list => setUserList(list))
  // });
  return (
    <>
      <Text>userListId!{JSON.stringify(userList)}</Text>
    </>
  );
}
export default App;