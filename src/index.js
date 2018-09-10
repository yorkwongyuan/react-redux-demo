import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import App from './container/App';
import {adAsy, addIfOdd} from "./actions/index"

const store = createStore(reducers,applyMiddleware(thunk));

// 获取当前值
let currentValue = store.getState();
console.log(currentValue);

// 监控变化
store.subscribe(() => {
    const previousValue = currentValue;
    currentValue = store.getState();
    console.log('上一个值:', previousValue, '当前值:', currentValue)
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
