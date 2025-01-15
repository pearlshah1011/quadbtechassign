import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: movie.image?.original || '../../assets/images/placeholder.png' }} 
          style={styles.image} 
          resizeMode="contain"
        />
        <View style={styles.overlay} />
        <Text style={styles.title}>{movie.name}</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>
            {movie.rating?.average || 'N/A'}
          </Text>
          <Text style={styles.ratingLabel}>Rating</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>
            {movie.summary?.replace(/<[^>]+>/g, '') || 'No summary available.'}
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.sectionTitle}>Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Language:</Text>
            <Text style={styles.detailText}>{movie.language}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Genres:</Text>
            <Text style={styles.detailText}>{movie.genres?.join(', ') || 'N/A'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Premiered:</Text>
            <Text style={styles.detailText}>{movie.premiered || 'N/A'}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Runtime:</Text>
            <Text style={styles.detailText}>{movie.runtime ? `${movie.runtime} minutes` : 'N/A'}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageContainer: {
    width: '100%',
    height: 450,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: '#000',
    opacity: 0.7,
  },
  title: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#000',
  },
  ratingContainer: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginTop: -30,
    elevation: 5,
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  ratingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ratingLabel: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#ffffff10',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ffffff20',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.9,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    color: '#ff0000',
    fontSize: 16,
    fontWeight: 'bold',
    width: 100,
  },
  detailText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
});

export default DetailsScreen;