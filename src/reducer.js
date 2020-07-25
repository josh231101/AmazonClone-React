export const initialState = {
    basket : [],
    user : null,
}

const reducer = (state, action) => {
    console.log(state)
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return { 
                ...state,
                basket : [...state.basket, action.item]
             }
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for Removing from basket
            console.log("ENTER!!!")
            let newBasket = [...state.basket]
            console.log(newBasket); 

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            console.log(index)

            if(index >=0){
                // Is in the basket, remove it
                newBasket.splice(index,1);
            }else{
                console.warn(
                    'Cant rmeove product'
                )
            }

            return { 
                ...state, 
                basket: newBasket, }
        default : 
            return state;

    }
}
export default reducer;