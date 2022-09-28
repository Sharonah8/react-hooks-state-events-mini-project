import React from "react";

function CategoryFilter({categories, onGetCategory, getCategory}) {

  const categoryBtn = categories.map((cat, index)=>{
    const className = cat === getCategory ? "selected" : null;
  // function handleClick(clicked){
  //     clicked ? {className:"selected"} : {className:null};
  // }
  return (
    <button key={index} className={className} 
    onClick={()=> onGetCategory(cat)}>{cat}</button>
  )})
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryBtn}
    </div>
  );
}

export default CategoryFilter;
