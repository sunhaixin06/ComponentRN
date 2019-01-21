import Steps from './Steps';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Steps_ = { screen: Steps, navigationOptions: Title };