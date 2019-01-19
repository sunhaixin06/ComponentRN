import Stepper from './Stepper';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Stepper_ = { screen: Stepper, navigationOptions: Title };