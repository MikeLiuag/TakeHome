import React, { useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { getDistance, convertDistance } from 'geolib';
import { StarWarsLandCoords } from '../../constants';
import { styles } from './styles';

const StarwarsDistance = () => {
    const [distance, setDistance] = useState<number | null>(null);

    useEffect(() => {
        const locationPermission =
            Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

        check(locationPermission)
            .then((result) => {
                if (result === RESULTS.GRANTED) {
                    getCurrentLocation();
                } else {
                    return request(locationPermission);
                }
            })
            .then((result) => {
                if (result === RESULTS.GRANTED) {
                    getCurrentLocation();
                } else {
                    console.log('Location permission denied');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const userCoords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };

                // Calculate distance using geolib
                const calculatedDistance = getDistance(userCoords, StarWarsLandCoords);
                const distanceInMiles = convertDistance(calculatedDistance, 'mi');

                setDistance(distanceInMiles);
            },
            (error) => {
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    return (
        <View style={styles.distanceRow}>
            <Text style={styles.distanceText}>Distance to Star Wars Land:</Text>
            <Text style={styles.distanceText}>{distance !== null ? `${distance.toFixed(2)} miles` : 'Calculating...'}</Text>
        </View>
    );
};

export default StarwarsDistance;