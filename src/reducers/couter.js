export default function counter(state = 0, action){
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return 0
    }
}

