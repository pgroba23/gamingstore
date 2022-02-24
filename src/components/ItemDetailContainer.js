import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { DualRing } from 'react-awesome-spinners';
import { array } from '../common/getArray';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [itemsDetail, setItemsDetail] = useState({});
  const [detailLoading, setDetailLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((res) => {
      res(array.find((element) => element.id === Number(id)));
    });
    setTimeout(() => {
      promesa.then((res) => {
        setItemsDetail(res);
        setDetailLoading(false);
      });
    }, 1000);
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
