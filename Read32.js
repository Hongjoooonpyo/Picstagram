import firestore from '@react-native-firebase/firestore';

async function Read() {
  const userRef = firestore().collection('User');
  const userList = new Array();

  userRef.get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());

        userList.push({
          pk: documentSnapshot.id,
          data: documentSnapshot.data()
        });

        console.log("real!!!!!", userList);

      });
      console.log("3");
      return userList;
      
    });
}

export { Read };