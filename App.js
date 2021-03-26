import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, StatusBar, View, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import Plants from './App/Components/Plants'
import Search from './App/Components/Search'

export default function App() {

  const [loading, setLoading] = useState(false);
  const [plants, setPlants] = useState([]);

  // retrieve lists of plants
  const loadPlants = async (plantSearch = '', plantFilter = '') => {
    setLoading(true);
    setPlants([]);
    let results = [];
    // if there is no search term, then get list of plants
    if (plantSearch !== '') {
      results = await APIRequest.requestSearchPlants(plantSearch);
    } else {
      results = await APIRequest.requestPlantList(plantFilter);
    }
    console.log(results);
    setLoading(false);
    setPlants(results);
  }

  useEffect(() => { loadPlants() }, []);
  const testPlantData = require('./App/Config/TestPlantData.json')
  {/*console.log(testPlantData)*/}
  console.log(plants);
  let contentDisplayed = '';
  /*if(loading){
      contentDisplayed = (
        <ActivityIndicator
        style={styles.activityIndicator}
        size = 'large' color= 'black' />
      )
      } else {
        contentDisplayed = ( 
        <Plants list={plants}/> )
      }
*/
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar/>
    <Image source={Images.logo} style={styles.logoStyle}/>
    <Search loadPlants={loadPlants}/>
    {loading ?
    (   <ActivityIndicator
        style={styles.activityIndicator}
        size = 'large' color= 'black' />
      ) : (<Plants list={plants}/>)
    }


      {/*First, the logo */}
      {/*add search*/}
      {/* And some plants */}
      {/* You can style and organize these however you want */}
      {/* Also, checkout the "./App/Config/APIRequest.js", if you want custom API calls or use test data*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 210
  },

  logoStyle: {
    justifyContent: 'center',
    resizeMode: 'contain',
    width: '60%',
    height: 80,
    marginTop: 210
  }

});
