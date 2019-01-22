import SwipeAction from './SwipeAction';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const SwipeAction_ = { screen: SwipeAction, navigationOptions: Title };