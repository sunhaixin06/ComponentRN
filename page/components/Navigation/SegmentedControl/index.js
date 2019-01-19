import SegmentedControl from './SegmentedControl';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const SegmentedControl_ = { screen: SegmentedControl, navigationOptions: Title };