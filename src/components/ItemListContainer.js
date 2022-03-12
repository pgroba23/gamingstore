import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { itemCollection } from '../common/collections';

export const ItemListContainer = ({ urldata }) => {
  const [items, setItems] = useState([]);
  const { id: categoryId } = useParams();

  useEffect(() => {
    const ejec = async () => {
      //const itemCol = collection(db, itemCollection);
      const q = categoryId
        ? query(
            collection(db, itemCollection),
            where('platform', '==', categoryId)
          )
        : collection(db, itemCollection);

      const itemSnapshot = await getDocs(q);
      setItems(itemSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    ejec();
    return () => {
      setItems([]);
    };
  }, [categoryId]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};
