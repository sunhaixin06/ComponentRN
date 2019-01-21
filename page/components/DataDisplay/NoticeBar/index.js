import NoticeBar from './NoticeBar';

const Title = ({navigation}) =>({
    title: `${navigation.state.params.name}`
})

export const NoticeBar_ = { screen: NoticeBar, navigationOptions: Title };