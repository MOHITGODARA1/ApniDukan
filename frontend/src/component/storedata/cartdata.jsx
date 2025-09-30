import { useReducer,createContext,useContext } from "react";
const CartContext=createContext();
const iteminitalstate={
  item:[],
}
function cartReducer(state,action){
  switch(action.type){
    case "ADD_TO_CART":
      return{
        ...state,
        item:[...state.item,action.payload],
      };
    case "REMOVE_FROM_CART":
      return{
        ...state,
        item:state.item.filter((item)=>item.id!==action.payload)
      }
    default:
      return state;
  }
}
export function CartProvider({children}){
  const  [state,dispatch]=useReducer(cartReducer,iteminitalstate);
  function removeFromCart(id){
    dispatch({type:"REMOVE_FROM_CART",payload:id});
  }
  return(
    <CartContext.Provider value={{cart:state,dispatch,removeFromCart}}>
      {children}
    </CartContext.Provider>
  )
}
export function UseCart(){
  return useContext(CartContext);

}