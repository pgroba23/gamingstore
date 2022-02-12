import React, { useEffect, useState } from 'react';
import { Item } from './Item';
import { DualRing } from 'react-awesome-spinners';

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const promesa = new Promise((res) => {
    const array = [
      {
        id: 1,
        title: 'Dauntless',
        thumbnail: 'https://www.freetogame.com/g/1/thumbnail.jpg',
        short_description:
          'A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.',
        price: '$0',
      },
      {
        id: 2,
        title: 'World of Tanks',
        thumbnail: 'https://www.freetogame.com/g/2/thumbnail.jpg',
        short_description:
          'If you like blowing up tanks, with a quick and intense game style you will love this game!',
        price: '$50',
      },
      {
        id: 3,
        title: 'Warframe',
        thumbnail: 'https://www.freetogame.com/g/3/thumbnail.jpg',
        short_description:
          'A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ',
        price: '$20',
      },
      {
        id: 4,
        title: 'CRSED: F.O.A.D.',
        thumbnail: 'https://www.freetogame.com/g/4/thumbnail.jpg',
        short_description:
          'Take the battle royale genre and add mystical powers and you have CRSED: F.O.A.D.',
        price: '$30',
      },
      {
        id: 5,
        title: 'Crossout',
        thumbnail: 'https://www.freetogame.com/g/5/thumbnail.jpg',
        short_description: 'A post-apocalyptic MMO vehicle combat game! ',
        price: '$60',
      },
    ];
    res(array);
  });

  useEffect(() => {
    setTimeout(() => {
      promesa.then((res) => {
        setItems(res);
        setLoading(false);
      });
    }, 2000);
  }, [promesa]);

  return (
    <>
      {items.length === 0 ? (
        loading && (
          <div className="text-center m-4 p-2">
            <DualRing />
          </div>
        )
      ) : (
        <section className="flex flex-col items-center my-3 gap-y-3 sm:flex-row sm:flex-wrap sm:gap-4 sm:justify-center sm:mt-8">
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.short_description}
                url={item.thumbnail}
                price={item.price}
              />
            );
          })}
        </section>
      )}
    </>
  );
};
