import Provider from './Provider';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Provider_ = { screen: Provider, navigationOptions: Title };