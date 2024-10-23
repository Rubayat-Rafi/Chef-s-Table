import { useEffect } from "react";
import { useState } from "react";
import '../../public/recipes.json'

const Recipes = ({handleWantToCook}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
        .then(res=> res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="md:w-2/3">
            {/* <h1>Recipe: {recipes.length}</h1> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    recipes.map( recipe => (
                    <div key={recipe.recipe_id} className="card bg-base-100 border">
                        <figure>
                          <img

                            src={recipe.recipe_image}
                            alt={`Recipe of ${recipe.recipe_name}`} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title font-bold">{recipe.recipe_name}</h2>
                          <p className="text-gray-500">{recipe.short_description}</p>
                          <div className="border-b border-t my-3 py-3 space-y-2">
                            <h2 className="text-lg font-semibold">Ingredients: {recipe.ingredients.length}</h2>
                            {
                                recipe.ingredients.map((list, idx) => <li className="text-gray-400 font-medium text-sm" key={idx}>{list}</li>)
                            }
                          </div>
                          <div className="flex gap-4">
                            <div className="flex items-center">
                              <i className="fa-regular fa-clock mr-2 text-xl"></i>
                              <p>{recipe.preparing_time} minute.</p>
                              </div>
                            <div className="flex items-center">
                            <i className="fa-solid fa-fire-flame-curved mr-2 text-xl"></i>
                              <p>{recipe.calories} Calories.</p>
                              </div>
                          </div>
                          <div className="card-actions pt-4">
                            <button onClick={()=> handleWantToCook(recipe)} className="btn bg-[#0BE58A] text-[#150B2B] rounded-full px-8 text-lg font-semibold">Want to Cook</button>
                          </div>
                        </div>
                      </div>))
                }
            </div>
        </div>
    );
};

export default Recipes;