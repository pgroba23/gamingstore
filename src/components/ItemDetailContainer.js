import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { DualRing } from 'react-awesome-spinners';

export const ItemDetailContainer = () => {
  const [itemsDetail, setItemsDetail] = useState([]);
  const [detailLoading, setDetailLoading] = useState(true);

  useEffect(() => {
    const promesa = new Promise((res) => {
      const array = [
        {
          id: 1,
          title: 'Dauntless',
          thumbnail: 'https://www.freetogame.com/g/1/thumbnail.jpg',
          short_description:
            'A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.',
          price: '$0',
          genre: 'MMORPG',
          platform: 'PC (Windows)',
          publisher: 'Phoenix Labs',
          developer: 'Phoenix Labs, Iron Galaxy',
          release_date: '2019-05-21',
        },
      ];
      res(array);
    });
    setTimeout(() => {
      promesa.then((res) => {
        setItemsDetail(res);
        setDetailLoading(false);
      });
    }, 2000);
  }, []);
  const [detail] = itemsDetail;

  return (
    <>
      {itemsDetail.length === 0 ? (
        detailLoading && (
          <div className="text-center m-4 p-2">
            <DualRing />
          </div>
        )
      ) : (
        <section className="flex flex-col items-center my-3 gap-y-3">
          <ItemDetail item={detail} />
        </section>
      )}
    </>
  );
};
