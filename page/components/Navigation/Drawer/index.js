import Drawer from './Drawer';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Drawer_ = { screen: Drawer, navigationOptions: Title };