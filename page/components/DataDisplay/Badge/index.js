import Badge from './Badge';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Badge_ = { screen: Badge, navigationOptions: Title };