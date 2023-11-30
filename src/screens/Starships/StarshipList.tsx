import { View, Text, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_STARSHIPS } from '../../graphQL/queries';
import { StarshipsResponse, Starship } from '../../graphQL/types';
import client from '../../graphQL/config';
import { styles } from './styles';

const StarshipList = () => {
    const { loading, error, data } = useQuery<StarshipsResponse>(GET_STARSHIPS, { client });
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error.message}</Text>;

    const starships = data?.allStarships.starships || [];

    return (
        <>
            <Text style={styles.starshipHead}>Total Counts: {starships.length} </Text>
            <FlatList
                data={starships}
                keyExtractor={(item: Starship) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.starshipItem}>
                        <Text style={styles.starshipText}>Name: {item.name}</Text>
                        <Text style={styles.starshipText}>Model: {item.model}</Text>
                    </View>
                )}
            />
        </>
    )
}

export default StarshipList;