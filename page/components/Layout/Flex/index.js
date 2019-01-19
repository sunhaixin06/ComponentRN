import Flex from './Flex';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Flex_ = { screen: Flex, navigationOptions: Title };