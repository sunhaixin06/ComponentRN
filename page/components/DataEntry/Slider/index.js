import Slider from './Slider';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Slider_ = { screen: Slider, navigationOptions: Title };

