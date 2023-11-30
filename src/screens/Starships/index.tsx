import { View } from 'react-native';
import StarshipList from './StarshipList';
import { styles } from './styles';

const Main = () => {
    return (
        <View style={styles.container}>
            <StarshipList />
        </View>
    )
}

export default Main;