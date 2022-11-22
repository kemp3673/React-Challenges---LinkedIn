import { useState, useEffect } from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart () {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const updateQuantity = (index, action) => {
    let stateCopy = [...cart];
    if (action === 'ADD') {stateCopy[index].quantity++};
    if (action === 'MINUS') {stateCopy[index].quantity--};
    if (stateCopy[index].quantity < 1) {
      stateCopy.splice(index, 1);
    }
    setCart(stateCopy);
  };

  const addToCart = (item) => {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].name === item.name) {
        updateQuantity(i, 'ADD');
        return;
      }
    }
    setCart([...cart, {...item, quantity: 1}])
  }

  useEffect(() => {
    let total = 0;
    cart.map(item => total += (item.quantity * item.price));
    setTotal(total);
  }, [cart])


  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map((item, index) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => updateQuantity(index, 'MINUS')}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(index, 'ADD')}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart
