// 组件模块，只负责输出组件，不涉及和react-redux连接方面的逻辑
import React, { Component } from 'react';

const Header = class Header extends Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { counter, increment, decrement, adAsy } = this.props
        return (
            <div>
                <button onClick={adAsy}>
                    +
                </button>
                <button onClick={decrement}>
                    -
                </button>
                数字为:
            {counter}
            </div>
        )
    }
}

export default Header


