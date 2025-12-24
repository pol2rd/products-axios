import React from 'react';
import { Product } from '../../types';
import { categories } from '../filters/DropDownFilter';

interface CardProps {
  product: Product
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const maxRatings = 5

  return (
    <div className='product scale-effect'>
      <div className='product-image'>
        <img src={props.product.image}/>
      </div>
      <div className='product-info'>
        <h2 className='product-title'>{props.product.title}</h2>
        <div className='product-brief'>
          <p><strong>{`Price: ${props.product.price}`}</strong></p>
          <p><strong>{`Rating: ${props.product.rating.rate}/${maxRatings} (${props.product.rating.count} Reviews)`}</strong></p>
          <p><strong>{`Category:  ${categories.find((category) => category.id == props.product.category)?.name}`}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
