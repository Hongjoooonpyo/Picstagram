import firestore from '@react-native-firebase/firestore';

export default function readUser() {
  const userRef = firestore().collection('User');
  const userList = new Array();

  return new Promise(resolve => {
    userRef.get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          userList.push({
            pk: documentSnapshot.id,
            data: documentSnapshot.data()
          })
        })
        resolve(userList);
      })
  })
}