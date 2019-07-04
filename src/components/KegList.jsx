import React from 'react';
import Keg from './Keg';

const availableKegs = [
  {
    name: 'Water',
    sugarContent: 0,
    brand: 'Tap',
    pints: 124,
    price: 1
  },
  {
    name: 'Orange Juice',
    sugarContent: 5,
    brand: 'Tropicana',
    pints: 124,
    price: 2
  },
  {
    name: 'Cola',
    sugarContent: 40,
    brand: 'Coca-Cola',
    pints: 124,
    price: 3
  },
  {
    name: 'Water',
    sugarContent: 0,
    brand: 'Dasani',
    pints: 124,
    price: 2
  },
  {
    name: 'Cola',
    sugarContent: 39,
    brand: 'Pepsi',
    pints: 124,
    price: 3
  }
];

function KegList() {
  return (
    <div>
      {availableKegs.map((keg, index) =>
        <Keg name={keg.name}
          sugarContent={keg.sugarContent}
          brand = {keg.brand}
          pints = {keg.pints}
          price = {keg.price}
          key={index} />
      )}
    </div>
  );
}

export default KegList;
