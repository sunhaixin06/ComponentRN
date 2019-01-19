import Tabs from './Tabs';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Tabs_ = { screen: Tabs, navigationOptions: Title };