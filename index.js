const redux = require("redux")

const buy_cake = "buy_cake";
const createStore = redux.createStore


// action buy cake


function buyCake(){ return{
    type :buy_cake,
    info : "first action"
}}



// (state, Action) => 
const initstate = {num_cake:10}

const reducer = (state = initstate,action)=>{
    switch (action.type) {
        case buy_cake: return{

            ...initstate,
            numCake :   initstate.num_cake --
}
            
            break;
    
        default:
            return initstate;
    }

}

const store = createStore(reducer)
console.log("init state" , store.getState(  ))

store.subscribe(()=>console.log("update state",store.getState( )))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
console.log(...initstate)