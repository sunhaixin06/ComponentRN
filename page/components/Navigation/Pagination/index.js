import Pagination from './Pagination';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const Pagination_ = { screen: Pagination, navigationOptions: Title };