const redux = require("redux")

createStore = redux.createStore



buyCake = {
    type:"buy_cake",
    quantity : 100
}


const init_state ={num:10}

const reducer = (state = init_state,action) => {
    switch (action.type) {
        case "buy_cake": {
            
          return  {...init_state,numofcake : init_state.num-1}
    }
        default:
            return init_state;
    }
}







store = createStore(reducer)

console.log("init state ", store.getState())
store.subscribe(()=>console.log(store.getState()))

store.dispatch(buyCake)
store.dispatch(buyCake)
store.dispatch(buyCake)
store.dispatch(buyCake)
