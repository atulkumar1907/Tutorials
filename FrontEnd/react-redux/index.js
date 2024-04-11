const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const middleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE = "BUY_ICE"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIce() {
    return {
        type: BUY_ICE,
        info: 'first redux action'
    }
}
// const initialState = {
//     numOfCakes: 10,
//     numOfIce: 20
// }

const initialCake ={
    numOfCakes : 10
}

const initialIce = {
    numOfIce : 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'BUY_CAKE':
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case 'BUY_ICE':
//             return {
//                 ...state,
//                 numOfIce: state.numOfIce - 1
//             }
//         default:
//             return state
//     }
// }

const cakeRecuder = (state = initialCake, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}

const iceReducer = (state = initialIce, action) => {
    switch (action.type) {
        case 'BUY_ICE':
            return {
                ...state,
                numOfIce: state.numOfIce - 1
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeRecuder,
    ice: iceReducer
})
const store = createStore(rootReducer, middleware(logger))
console.log('initial state ', store.getState())


const unsubcribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIce())
unsubcribe()