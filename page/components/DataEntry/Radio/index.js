import Radio from './Radio';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Radio_ = { screen: Radio, navigationOptions: Title };