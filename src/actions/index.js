// 定义actions
const increment = () => ({
    type: 'increment'
});
const decrement = () => ({
    type: 'decrement'
});

function addIfOdd(){
    return (dispatch, getState) => {
        const currentValue = getState();
        if(currentValue % 2 == 0) {
            return false;
        }
        dispatch(increment());
    }
};

// 异步操作
function adAsy(delay = 2000) {
    return (dispatch, getState) => {
        setTimeout(() => {
            console.log('执行');
            dispatch(increment())
        }, 2000)
    }
};



module.exports = {
    increment,
    decrement,
    addIfOdd,
    adAsy,
}