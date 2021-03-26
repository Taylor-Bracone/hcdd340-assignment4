import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  Linking,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  APIRequest,
} from 'react-native';
// human interface guideline
// https://github.com/hectahertz/react-native-typography
import { human } from 'react-native-typography';
import { Metrics, Colors } from '../Themes';
import * as WebBrowser from 'expo-web-browser';

export default function Plants(props) {
  this.FlatListItems = props;
  console.log(props);

  function getSource(image_url) {
    var i = image_url.replace('https://', 'http://');
    //console.log(i)
    return image_url.replace('https://', 'http://');
  }

  const _handlePressButtonAsync = async (image_url) => {
    let result = await WebBrowser.openBrowserAsync(image_url);
  };

  return (
    <SafeAreaView>
      <View>
        {
          <FlatList
            style={{ marginTop: 40 }}
            data={this.FlatListItems.list}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: 'row',
                  width: '73%',
                  marginBottom: 24,
                }}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      _handlePressButtonAsync(getSource(item.image_url))
                    }>
                    <Image
                      source={{ uri: getSource(item.image_url) }}
                      style={styles.circle}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.name}>{item.common_name}</Text>
                  <Text style={{ fontSize: 10 }}>
                    Scientific Name
                    <Text style={styles.sciname}>
                      {' ' + item.scientific_name}.
                    </Text>
                    This plant comes from the
                    <Text style={styles.family}>{' ' + item.family + ' '}</Text>
                    and the
                    <Text style={styles.genus}>{' ' + item.genus + ' '}</Text>
                    genus.
                  </Text>
                </View>
              </View>
            )}
          />
          /* FlatList or SectionList */
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 20,
  },

  sciname: {
    fontWeight: 'bold',
  },

  family: {
    fontStyle: 'italic',
  },

  genus: {
    fontStyle: 'italic',
  },

  circle: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
  },
});
