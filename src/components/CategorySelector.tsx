
import React from 'react';

interface CategorySelectorProps {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = [
  { id: 'helmet', label: 'Helmetless riding' },
  { id: 'triple', label: 'Triple riding' },
  { id: 'seatbelt', label: 'Seatbelt violation' },
  { id: 'wrong-side', label: 'Wrong-side driving' },
  { id: 'red-light', label: 'Jumping red lights' },
  { id: 'mobile', label: 'Mobile use while driving' },
  { id: 'speeding', label: 'Overspeeding' },
  { id: 'parking', label: 'Illegal parking' },
  { id: 'crossing', label: 'Pedestrian/zebra crossing blocked' },
  { id: 'stray', label: 'Presence of stray animals' },
  { id: 'children', label: 'Unsafe transport of children' },
  { id: 'accident', label: 'Road accidents & hit-and-run' },
];

const CategorySelector: React.FC<CategorySelectorProps> = ({ selected, onSelect }) => {
  return (
    <div className="w-full">
      <h3 className="text-sm font-medium text-gray-700 mb-2">Select Offense Category</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`p-3 text-sm font-medium rounded-lg border transition-all duration-200 text-left ${
              selected === category.id
                ? 'border-hero bg-heroLight text-hero'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => onSelect(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
