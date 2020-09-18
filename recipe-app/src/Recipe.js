import React from 'react';
import "./Recipe.css";


function Recipe({title, calories, image, ingredients}) {
    return (
        <div className="recipe">
            <img className="image" src={image} alt=""/>
            <h1 className="title">
                {title}
            </h1>

            <ol className = "ingredient">
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h3>Calories: </h3>
            <p>{calories}</p>
            

        </div>
    )
}

export default Recipe;
