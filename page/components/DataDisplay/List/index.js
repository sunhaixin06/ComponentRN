import List from './List';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const List_ = { screen: List, navigationOptions: Title };