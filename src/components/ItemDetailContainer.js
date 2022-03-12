import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { DualRing } from 'react-awesome-spinners';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { itemCollection } from '../common/collections';
import { db } from '../utils/firebase';

export const ItemDetailContainer = () => {
  const [itemsDetail, setItemsDetail] = useState({});
  const [detailLoading, setDetailLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // const promesa = new Promise((res) => {
    //   res(array.find((element) => element.id === Number(id)));
    // });
    // setTimeout(() => {
    //   promesa.then((res) => {
    //     setItemsDetail(res);
    //     setDetailLoading(false);
    //   });
    // }, 1000);
    const ejec = async () => {
      //const itemCol = collection(db, itemCollection);
      const q = query(
        collection(db, itemCollection),
        where('id', '==', Number(id))
      );

      const itemSnapshot = await getDocs(q);
      const [item] = itemSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItemsDetail(item);
      setDetailLoading(false);
    };
    ejec();
  }, [id]);

  return (
    <>
      {detailLoading ? (
        <div className="text-center m-4 p-2">
          <DualRing />
        </div>
      ) : (
        <section className="flex flex-col items-center my-3 gap-y-3">
          <ItemDetail item={itemsDetail} />
        </section>
      )}
    </>
  );
};
