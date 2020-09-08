import React from 'react';


const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total,prd) => total + prd.price * prd.quantity , 0 );
    let shipping = 0;
    if (total > 0){
        shipping = 12.99;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total > 35){
        shipping = 0;
    }

    const tax = Math.round(total / 10);
    const grandTotal = (total+shipping+tax);

    return (
        <div>
            <h1> Order Summary</h1>
             <p>Items Ordered: {cart.length}</p>
             <p>Product Price: {total} </p>
             <p><small>Shipping Cost: {shipping}</small></p>
             <p><small>Tax + Vat: {tax}</small></p>
             <p>Total Price: {grandTotal}</p>
             <br/>
           {
               props.children
           }

        </div>
    );
};

export default Cart;