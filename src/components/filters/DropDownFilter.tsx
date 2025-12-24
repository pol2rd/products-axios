import React from 'react';
import UnOrderedList from '../ui-elements/UnOrderedList';
import { Category } from '../../types';

interface DropDownFilterProps {
  onClick: () => void;
  isOpen: boolean;
  filterByGenre: (id: string) => void;
  genre: string;
}

export const categories: Category[] = [
    { id: 'All', name: 'All Categories' },
    { id: "men's clothing", name: "Men's Clothing" },
    { id: "women's clothing", name: "Women's Clothing" },
    { id: 'electronics', name: 'Electronics' },
    { id: 'jewelery', name: 'Jewelery' },
  ];

const DropDownFilter: React.FC<DropDownFilterProps> = ({ onClick, isOpen, filterByGenre, genre }) => {
  
  return (
    <div className={`dropdown-wrapper ${isOpen ? 'open' : ''}`}>
      <div
        className='dropdown-header flex flex-jc-sb flex-ai-c'
        onClick={onClick}
      >
        <span id='genre-filter'>
          {genre === 'All'
            ? 'Filter by Category'
            : categories.find((c) => c.id === genre)?.name || genre}
        </span>
        <i className='fa-regular fa-chevron-down icon'></i>
      </div>
      <div className='dropdown-body'>
        <UnOrderedList
          id='list-by-genre'
          items={categories.map((categoryItem) => ({
            label: categoryItem.name,
            extraProps: {
              onClick: () => {
                filterByGenre(categoryItem.id);
                onClick();
              },
            },
          }))}
        />
      </div>
    </div>
  );
};

export default DropDownFilter;
