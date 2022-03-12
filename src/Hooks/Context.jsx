import React, { useContext, useState } from 'react';
const products = [
  { id: 11, name: 'Phone', description: 'This is samsung phone', price: 12000 },
  { id: 12, name: 'Torch', description: 'A bright torch', price: 1100 },
  { id: 13, name: 'Laptop', description: 'Fast laptop Hp', price: 22000 },
  { id: 14, name: 'Monitor', description: 'Hd monitor with wide color range', price: 8000 },
];
const MainContext = React.createContext();
export const UseMainContext = () => useContext(MainContext);
const Context = ({ children }) => {
  const [name, setName] = useState('Bilal');
  const [city, setCity] = useState('Sahiwal');
  const [active, setActive] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const increase_quantity = (item) => {
    let target = null;
    console.log(item, 'at-increase');
    cartItems.map((cart_item, index) => {
      if (cart_item.id == item.id) {
        console.log(cart_item, 'found');
        target = index;
      }
    });
    console.log(target);
    let new_items = cartItems;
    let target_product = new_items[target];
    console.log(target_product, 'trget');
    target_product = { ...target_product, ['quantity']: target_product.quantity + 1 };
    new_items[target] = target_product;
    console.log(new_items, 'final');
    setCartItems([...new_items]);
  };
  const decrease_quantity = (item) => {
    //
  };
  const add_to_cart = (item) => {
    //check if product already exists
    let exist = false;
    cartItems.map((cartItem, index) => {
      if (cartItem.id == item.id) {
        exist = true;
      }
    });
    if (exist) {
      console.log('item already exists');
      return;
    }
    let items = cartItems;
    items.push({ ...item, ['quantity']: 1 });
    setCartItems([...items]);
  };
  const remove_from_cart = (id) => {
    setCartItems((items) =>
      items.filter((x) => {
        return x.id != id;
      })
    );
  };
  const bundle = {
    name,
    setName,
    city,
    setCity,
    active,
    setActive,
    products,
    add_to_cart,
    remove_from_cart,
    cartItems,
    increase_quantity,
  };
  return <MainContext.Provider value={bundle}>{children}</MainContext.Provider>;
};

export default Context;
