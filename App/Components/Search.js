import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import { Metrics, Colors } from '../Themes';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default function Search(props) {
  let newText = '';

  const plantFinder = (loadPlants) => {
    console.log(newText);
    props.loadPlants(newText);
  };

  function changeText(text) {
    newText = text;
  }

  return (
    <View>
      {
        <TouchableOpacity>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.inputs}
              placeholder="search for plant"
              clearTextOnFocus
              clearButtonMode="while-editing"
              onChangeText={(text) => changeText(text)}
              onSubmitEditing={(text) => {
                props.loadPlants(newText);
                this.updateText.clear();
              }}
              ref={(text) => {
                this.updateText = text;
              }}
              keyboardType="web-search"
            />
            <Ionicons
              style={styles.searchIcon}
              name="ios-search-outline"
              size={26}
              color="black"
              onPress={() => {
                //console.log(props.loadPlants)
                props.loadPlants(newText);
                this.updateText.clear();
              }}
            />
          </View>
        </TouchableOpacity>
        /* user input and a search button */
      }
      {/*const searching = require('./App.js')
    //sending(loadPlants)*/}
    </View>
  );
}

const styles = StyleSheet.create({
  inputs: {
    padding: 11,
    borderWidth: 0.1,
    borderRadius: 12,
    backgroundColor: '#dbd5d5',
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
    height: 46,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginLeft: '5%',
    marginBottom: -30,
  },

  searchIcon: {
    marginBottom: 20,
    marginLeft: 10,
  },
});
