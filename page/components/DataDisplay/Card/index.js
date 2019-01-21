import Card from './Card';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Card_ = { screen: Card, navigationOptions: Title };