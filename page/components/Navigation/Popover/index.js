import Popover from './Popover';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Popover_ = { screen: Popover, navigationOptions: Title };