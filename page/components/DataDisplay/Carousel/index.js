import Carousel from './Carousel';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Carousel_ = { screen: Carousel, navigationOptions: Title };