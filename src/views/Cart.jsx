import React, { useContext } from 'react'
import { cartContext } from '../contexts/cartContext'

function Cart() {

    const { cart, setcart } = useContext(cartContext);


    let totalPrice = 0;

    cart.forEach(element => {
        totalPrice = totalPrice + (element.unitPrice * element.quantity);
    });

    const emptyCart = () => {
        setcart([])
    }

    const increaseQuantity = (id) => {
        let cartItem = cart.find(q => q.id == id);
        cartItem.quantity = cartItem.quantity + 1;
        setcart([...cart])

    }

    const decreaseQuantity = (id) => {

        let cartItem = cart.find(q => q.id == id);
        if(cartItem.quantity == 1){
            let filteredCart = cart.filter(q => q.id != id);
            setcart([...filteredCart])
        }
        else{
            cartItem.quantity = cartItem.quantity - 1;
            setcart([...cart])
        }
    }

    return (<>
        <h3>Total Price {totalPrice.toFixed(2)}</h3>
        <ul>
            {
                cart && cart.map((item) => {
                    return <>
                        <li style={{ fontSize: 22 }}>

                            {item.name} - {item.unitPrice.toFixed(2)} * {item.quantity} = {(item.quantity * item.unitPrice).toFixed(2)} 
                            
                            <button style={{marginLeft:20}} onClick={() => decreaseQuantity(item.id)}> - </button>
                            <button style={{marginLeft:2}} onClick={() => increaseQuantity(item.id)}> + </button>

                            </li>

                    </>
                })
            }
        </ul>
        <button onClick={() => emptyCart()}>Empty Cart</button>
    </>)
}

export default Cart