import CountUI from '../../components/Count'
//connect用于连接UI组件和redux
import { connect } from 'react-redux'
import {createIncrementAyncAction} from '../../redux/count_action'


//函数返回的对象中的key、value就作为传递给UI组件props的key、value---状态值
//此函数调用者为react-redux 其调动时已经自动将store.getState()方法返回值赋值给了state形参
function mapStateToProps(state) {
    return { count: state }
}

//函数返回的对象中的key、value就作为传递给UI组件props的key、value---操作状态的方法
//此函数调用者为react-redux 其调动时已经自动将store.dispatch()方法赋值给了dispatch形参
function mapDispatchToProps(dispatch) {
    //通知redux执行加法
    return { jia: (data) => { dispatch(createIncrementAyncAction(data)) } }
}

//暴露一个容器组件 connect()()第一个括号定义两个函数a b a为获取状态的函数 b为设置状态的函数 ；第二个括号为UI组件 
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)