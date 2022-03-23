import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { itemCollection } from '../common/collections';

export const ItemListContainer = ({ search }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id: categoryId } = useParams();

  useEffect(() => {
    const ejec = async () => {
      const q = categoryId
        ? query(
            collection(db, itemCollection),
            where('platform', '==', categoryId)
          )
        : collection(db, itemCollection);
      const itemSnapshot = await getDocs(q);
      const data = itemSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(
        search ? data.filter((element) => element.title.includes(search)) : data
      );
      setLoading(false);
    };
    ejec();
    return () => {
      setItems([]);
      setLoading(true);
    };
  }, [categoryId, search]);

  return (
    <>
      <ItemList items={items} loading={loading} />
    </>
  );
};
