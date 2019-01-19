import SearchBar from './SearchBar';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const SearchBar_ = { screen: SearchBar, navigationOptions: Title };

