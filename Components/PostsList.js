import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { postsData } from '../data/postsData';
import Feather from '../assets/svg/feather.svg';
import Map from '../assets/svg/map.svg';

export const PostsList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={postsData}
        renderItem={({ item }) => (
          <View style={styles.item} key={item.id}>
            <Image source={item.src} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.itemBottom}>
              <View style={styles.counter}>
                <TouchableOpacity>
                  <Feather width={24} height={24} stroke={'#BDBDBD'} />
                </TouchableOpacity>
                <Text style={styles.number}>0</Text>
              </View>
              <View style={styles.location}>
                <TouchableOpacity>
                  <Map width={24} height={24} stroke={'#BDBDBD'} />
                </TouchableOpacity>
                <Text style={styles.textLocation}>{item.location}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  item: {
    marginBottom: 32,
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
  },
  itemBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  counter: {
    flex: 1,
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  number: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  location: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  textLocation: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
