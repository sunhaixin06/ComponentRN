import TabBar from './TabBar';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const TabBar_ = { screen: TabBar, navigationOptions: Title };