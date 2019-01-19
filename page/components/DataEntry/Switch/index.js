import Switch from './Switch';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Switch_ = { screen: Switch, navigationOptions: Title };