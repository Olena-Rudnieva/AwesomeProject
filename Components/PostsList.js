import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Feather from '../assets/svg/feather.svg';
import Map from '../assets/svg/map.svg';

export const PostsList = ({ posts }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.item} key={item.id}>
            <Image
              source={{
                uri: item.src,
              }}
              style={{ width: 343, height: 240, borderRadius: 8 }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.itemBottom}>
              <View style={styles.counter}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('CommentsScreen', item)}
                >
                  <Feather width={24} height={24} stroke={'#BDBDBD'} />
                </TouchableOpacity>
                <Text style={styles.number}>0</Text>
              </View>
              <View style={styles.location}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MapScreen', {
                      location: {
                        locality: item.locality,
                        latitude: item.latitude,
                        longitude: item.longitude,
                      },
                    })
                  }
                >
                  <Map width={24} height={24} stroke={'#BDBDBD'} />
                </TouchableOpacity>
                <Text style={styles.textLocation}>{item.location}</Text>
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 34 }}
      />
      {/* <Image
        source={{
          uri: 'https://www.zastavki.com/pictures/originals/2023/Nature___Forest_Forest_road_in_the_summer_sun_162796_.jpg',
        }}
        style={{ width: 343, height: 'auto' }}
      />  */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
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
