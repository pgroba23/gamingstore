import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { NoMatch } from './NoMatch';
import { FormComponent } from './FormComponent';
import { CartItem } from './CartItem';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../utils/firebase';
import { Toast } from '../common/swal';
import { itemCollection, orderCollection } from '../common/collections';

export const Cart = () => {
  const { cart, addItem, removeItem, clear } = useContext(CartContext);
  let total =
    cart.length !== 0 &&
    cart.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.quantity * currentValue.item.price;
    }, 0);

  const updateItems = () => {
    cart.forEach(async (element) => {
      let q = query(
        collection(db, itemCollection),
        where('id', '==', Number(element.item.id))
      );
      try {
        let [itemDB] = await (await getDocs(q)).docs;
        let queryDoc = doc(db, itemCollection, itemDB.id);
        await updateDoc(queryDoc, {
          ...element.item,
          stock: element.item.stock - element.quantity,
        });
        clear();
      } catch (error) {
        console.error('Error: ', error);
      }
    });
  };

  const sendOrder = async (e) => {
    const buyer = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      mail: e.target.email.value,
    };
    const orders = collection(db, orderCollection);
    const newOrder = {
      buyer,
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total,
    };
    try {
      const docRef = await addDoc(orders, newOrder);
      // console.log('New id: ', docRef.id);
      Toast.fire({
        icon: 'success',
        title: `Order complete. ID: ${docRef.id}`,
      });
    } catch (error) {
      Toast.fire({
        icon: 'error',
        title: `Error: ${error}`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOrder(e);
    updateItems();
  };

  return (
    <div className="flex flex-col items-center">
      {cart.length === 0 ? (
        <NoMatch title={'Empty Cart'} />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 justify-items-center items-center">
            {cart.map((element) => (
              <CartItem
                key={element.item.id}
                element={element}
                addItem={addItem}
                removeItem={removeItem}
              />
            ))}
          </div>
          <FormComponent
            clear={clear}
            total={total}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
};
