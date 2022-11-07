import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import readUser from './readUser';

export default function readread(){
    var ee = null;
    readUser().then(userList => ee = userList)
}