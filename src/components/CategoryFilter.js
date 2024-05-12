import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryClick, selectedCategory }) {
  const categoryButton = categories.map((category) => {
    return <button key={category} className={selectedCategory === category ? "selected" : null } onClick={() => onCategoryClick(category)}>
      {category}
    </button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
