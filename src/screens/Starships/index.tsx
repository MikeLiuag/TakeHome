import { View } from 'react-native';
import StarshipList from './StarshipList';
import StarwarsDistance from './StarwarsDistance';
import { styles } from './styles';

const Main = () => {
    return (
        <View style={styles.container}>
            <StarwarsDistance />
            <StarshipList />
        </View>
    )
}

export default Main;