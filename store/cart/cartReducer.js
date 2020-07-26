import { 
    ADD_TO_CART,
    REMOVE_ITEM,
    SUB_QUANTITY,
    ADD_QUANTITY, 
    ADD_SHIPPING,
    ADD_QUANTITY_WITH_NUMBER,
    RESET_CART,
    ADD_TO_COMPARE,
    REMOVE_ITEM_FROM_COMPARE,
    SUB_SHIPPING
} from './cartActions'

const initState = {
    products: [
        {
            id: 1,
            title: "Linen crochet trim t-shirt",
            price: 190,
            image: require("../../images/img1.jpg"),
            imageHover: require("../../images/img-hover1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 2,
            title: "Neck empire sleeve t-shirts",
            price: 120,
            image: require("../../images/img2.jpg"),
            imageHover: require("../../images/img-hover2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 4,
            title: "Criss-cross V neck bodycon",
            price: 130,
            image: require("../../images/img4.jpg"),
            imageHover: require("../../images/img-hover4.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 5,
            title: "The cosmic cornucopia",
            price: 90,
            image: require("../../images/img5.jpg"),
            imageHover: require("../../images/img-hover5.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 6,
            title: "Tenku remastered",
            price: 180,
            image: require("../../images/img6.jpg"),
            imageHover: require("../../images/img-hover6.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 7,
            title: "Women's sherpa lined hoodie",
            price: 330,
            image: require("../../images/img7.jpg"),
            imageHover: require("../../images/img-hover7.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 8,
            title: "Belted chino trousers polo",
            price: 140,
            image: require("../../images/img8.jpg"),
            imageHover: require("../../images/img-hover8.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 9,
            title: "The cosmic cornucopia",
            price: 430,
            image: require("../../images/img1.jpg"),
            imageHover: require("../../images/img-hover1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 10,
            title: "Tenku remastered",
            price: 650,
            image: require("../../images/img2.jpg"),
            imageHover: require("../../images/img-hover2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 11,
            title: "Women's sherpa lined hoodie",
            price: 230,
            image: require("../../images/img3.jpg"),
            imageHover: require("../../images/img-hover3.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 12,
            title: "Linen crochet trim t-shirt",
            price: 670,
            image: require("../../images/img4.jpg"),
            imageHover: require("../../images/img-hover4.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 13,
            title: "Neck empire sleeve t-shirts",
            price: 120,
            image: require("../../images/img5.jpg"),
            imageHover: require("../../images/img-hover5.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 14,
            title: "Mermaid pencil midi lace",
            price: 540,
            image: require("../../images/img6.jpg"),
            imageHover: require("../../images/img-hover6.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 15,
            title: "Criss-cross V neck bodycon",
            price: 230,
            image: require("../../images/img7.jpg"),
            imageHover: require("../../images/img-hover7.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 16,
            title: "Belted chino trousers polo",
            price: 530,
            image: require("../../images/img8.jpg"),
            imageHover: require("../../images/img-hover8.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        }
    ],
    productsCollectionSix: [
        {
            id: 1,
            title: "Linen crochet trim",
            price: 190,
            image: require("../../images/sunglasses-image/sunglasses-img1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 2,
            title: "Neck empire sleeve",
            price: 120,
            image: require("../../images/sunglasses-image/sunglasses-img2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 3,
            title: "Mermaid pencil midi",
            price: 160,
            image: require("../../images/sunglasses-image/sunglasses-img3.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        }
    ],
    productsCollectionSeven: [
        {
            id: 1,
            title: "Linen Crochet Trim",
            price: 190,
            image: require("../../images/product-image/product-img1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 2,
            title: "Heartland Alabama",
            price: 300,
            image: require("../../images/product-image/product-img2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 3,
            title: "Mermaid pencil midi",
            price: 250,
            image: require("../../images/product-image/product-img3.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 4,
            title: "Criss-cross",
            price: 160,
            image: require("../../images/product-image/product-img4.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 5,
            title: "V neck bodycon",
            price: 214,
            image: require("../../images/product-image/product-img5.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 6,
            title: "Cosmic Cornucopia",
            price: 120,
            image: require("../../images/product-image/product-img6.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 7,
            title: "Tenku Remastered",
            price: 540,
            image: require("../../images/product-image/product-img7.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 8,
            title: "Lined Hoodie",
            price: 180,
            image: require("../../images/product-image/product-img8.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        }
    ],
    productsCollectionEight: [
        {
            id: 1,
            title: "Linen Crochet Trim",
            price: 190,
            image: require("../../images/product-image/product-img1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 2,
            title: "Heartland Alabama",
            price: 300,
            image: require("../../images/product-image/product-img2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 3,
            title: "Mermaid Pencil Midi",
            price: 250,
            image: require("../../images/product-image/product-img3.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 4,
            title: "Criss-cross",
            price: 160,
            image: require("../../images/product-image/product-img4.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 5,
            title: "Vneck Bodycon",
            price: 214,
            image: require("../../images/product-image/product-img5.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 6,
            title: "Cosmic Cornucopia",
            price: 120,
            image: require("../../images/product-image/product-img6.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 7,
            title: "Tenku Remastered",
            price: 540,
            image: require("../../images/product-image/product-img7.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 8,
            title: "Lined Hoodie",
            price: 180,
            image: require("../../images/product-image/product-img8.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        }
    ],
    productsCollectionNine: [
        {
            id: 1,
            title: "Linen Crochet Trim",
            price: 190,
            image: require("../../images/product-image/product-img1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 2,
            title: "Heartland Alabama",
            price: 300,
            image: require("../../images/product-image/product-img2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 3,
            title: "Mermaid Pencil Midi",
            price: 250,
            image: require("../../images/product-image/product-img3.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 4,
            title: "Criss-cross",
            price: 160,
            image: require("../../images/product-image/product-img4.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 5,
            title: "Vneck Bodycon",
            price: 214,
            image: require("../../images/product-image/product-img5.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 6,
            title: "Cosmic Cornucopia",
            price: 120,
            image: require("../../images/product-image/product-img6.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 7,
            title: "Tenku Remastered",
            price: 540,
            image: require("../../images/product-image/product-img7.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 8,
            title: "Lined Hoodie",
            price: 180,
            image: require("../../images/product-image/product-img8.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        }
    ],
    productsCollectionTen: [
        {
            id: 1,
            title: "Linen Crochet Trim",
            price: 190,
            image: require("../../images/product-image/product-img1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 2,
            title: "Heartland Alabama",
            price: 300,
            image: require("../../images/product-image/product-img2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 3,
            title: "Mermaid Pencil Midi",
            price: 250,
            image: require("../../images/product-image/product-img3.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 4,
            title: "Criss-cross",
            price: 160,
            image: require("../../images/product-image/product-img4.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 5,
            title: "Vneck Bodycon",
            price: 214,
            image: require("../../images/product-image/product-img5.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 6,
            title: "Cosmic Cornucopia",
            price: 120,
            image: require("../../images/product-image/product-img6.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 7,
            title: "Tenku Remastered",
            price: 540,
            image: require("../../images/product-image/product-img7.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 8,
            title: "Lined Hoodie",
            price: 180,
            image: require("../../images/product-image/product-img8.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        }
    ],
    productsCollectionEleven: [
        {
            id: 1,
            title: "Linen Crochet Trim",
            price: 190,
            image: require("../../images/product-image/product-img1.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 2,
            title: "Heartland Alabama",
            price: 300,
            image: require("../../images/product-image/product-img2.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 3,
            title: "Mermaid Pencil Midi",
            price: 250,
            image: require("../../images/product-image/product-img3.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 4,
            title: "Criss-cross",
            price: 160,
            image: require("../../images/product-image/product-img4.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 5,
            title: "Vneck Bodycon",
            price: 214,
            image: require("../../images/product-image/product-img5.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 6,
            title: "Cosmic Cornucopia",
            price: 120,
            image: require("../../images/product-image/product-img6.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 7,
            title: "Tenku Remastered",
            price: 540,
            image: require("../../images/product-image/product-img7.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        },
        {
            id: 8,
            title: "Lined Hoodie",
            price: 180,
            image: require("../../images/product-image/product-img8.jpg"),
            quickView: require("../../images/quick-view-img.jpg")
        }
    ],
    addedItems:[],
    addedItemsToCompare:[],
    total: 0,
    shipping: 0
}

export const cartReducer = (state = initState, action) => {
   
    if(action.type === ADD_TO_CART){
        let addedItem = action.product;
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item=> item.id === addedItem.id);
        if(existed_item){
            addedItem.quantity += 1 
            return {
                ...state,
                total: parseFloat(state.total) + parseFloat(addedItem.price)
            }
        } else {
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = parseFloat(state.total) + parseFloat(addedItem.price) 
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
        }
    }

    if(action.type === ADD_TO_COMPARE){
        let addedItemToCompare = state.products.find(item => item.id === action.id)
        
        addedItemToCompare.quantity = 1;
        
        return {
            ...state,
            addedItemsToCompare: [...state.addedItemsToCompare, addedItemToCompare]
        }
    }

    if(action.type === ADD_QUANTITY_WITH_NUMBER){
        let addedItem = state.products.find(item => item.id === action.id)
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item=> action.id === item.id)
        if(existed_item)
        {
            addedItem.quantity += action.qty
            return {
                ...state,
                total: state.total + addedItem.price * action.qty
            }
        } else {
            addedItem.quantity = action.qty;
            //calculating the total
            let newTotal = state.total + addedItem.price * action.qty
            
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    

    if(action.type === REMOVE_ITEM){
        let itemToRemove = state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );

        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === REMOVE_ITEM_FROM_COMPARE){
        let new_items = state.addedItemsToCompare.filter(item=> action.id !== item.id)
        
        return {
            ...state,
            addedItemsToCompare: new_items
        }
    }

    if(action.type === ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if(action.type === SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type === ADD_SHIPPING){
        return {
            ...state,
            shipping: state.shipping += 6
        }
    }

    if(action.type === SUB_SHIPPING){
        return {
            ...state,
            shipping: state.shipping -= 6
        }
    }

    if(action.type === RESET_CART){
        return {
            ...state,
            addedItems: [],
            total: 0,
            shipping: 0
        }
    }
    
    else {
        return state
    }
}
