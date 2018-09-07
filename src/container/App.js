// 此模块主要用于连接组件和react-redux
import { connect } from 'react-redux';
import Header from '../component';
import { increment, decrement } from '../actions'

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    increment: (...args) => dispatch(increment(...args)),
    decrement: (...args) => dispatch(decrement(...args))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);