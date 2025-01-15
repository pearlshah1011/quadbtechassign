import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieContainer}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('DETAILS', { movie: item.show })}
    >
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: item.show.image?.medium || '../../assets/images/placeholder.png' }}
          style={styles.thumbnail}
        />
        {item.show.rating?.average && (
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{item.show.rating.average}</Text>
          </View>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.show.name}</Text>
        <View style={styles.genreContainer}>
          {item.show.genres?.slice(0, 2).map((genre, index) => (
            <View key={index} style={styles.genreBadge}>
              <Text style={styles.genreText}>{genre}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.summary} numberOfLines={3}>
          {item.show.summary?.replace(/<[^>]+>/g, '') || 'No summary available.'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color="#FF0000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search TV Shows"
            placeholderTextColor="#666"
            onFocus={() => navigation.navigate('Search')}
          />
        </View>
        <FlatList
          data={movies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    padding: 0,
  },
  listContainer: {
    padding: 16,
    paddingTop: 8,
  },
  movieContainer: {
    flexDirection: 'row',
    backgroundColor: '#111',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#222',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageWrapper: {
    position: 'relative',
  },
  thumbnail: {
    width: 110,
    height: 165,
  },
  ratingBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF0000',
    borderRadius: 6,
    padding: 4,
    minWidth: 32,
    alignItems: 'center',
  },
  ratingText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 6,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  genreBadge: {
    backgroundColor: '#FF000020',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#FF000050',
  },
  genreText: {
    color: '#FF0000',
    fontSize: 11,
    fontWeight: '500',
  },
  summary: {
    fontSize: 13,
    color: '#999',
    lineHeight: 18,
  },
});

export default HomeScreen;