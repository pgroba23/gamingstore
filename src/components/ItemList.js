import { DualRing } from 'react-awesome-spinners';
import { Item } from './Item';

export const ItemList = ({ items }) => {
  return (
    <>
      {items.length === 0 ? (
        <div className="text-center m-4 p-2">
          <DualRing />
        </div>
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
