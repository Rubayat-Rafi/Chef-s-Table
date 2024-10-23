import { useState } from "react";
import Recipes from "./Component/Recipes";
import Sidebar from "./Component/Sidebar";

function App() {

  const [wantToCook, setWantToCook] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleWantToCook =(recipe)=> {
    const isExist = wantToCook.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    )
    if(!isExist){
      setWantToCook([...wantToCook, recipe])
    }else{
      alert('Recipe already exist in this queue.')
    }
  }

const handleRemove = id => {
  // find which recipe to remove
  const deleteRecipe = wantToCook.find(recipe => recipe.recipe_id === id)

  // remove from want to cook table 
  const updateWantToCook = wantToCook.filter(recipe => recipe.recipe_id !== id)
  setWantToCook(updateWantToCook)
  setPreparedRecipe([...preparedRecipe, deleteRecipe])


}


const calculateTimeAndCalories =(time, calorie) => {
  setTotalTime(totalTime + time);
  setTotalCalories(totalCalories + calorie);
}



  return (
<div className="container mx-auto px-4">
    {/* recipe cars section */}
    <section className="flex flex-col md:flex-row gap-6 py-14">
      {/* card section */}
      <Recipes handleWantToCook={handleWantToCook}></Recipes>
      {/* sidebar */}
      <Sidebar totalCalories={totalCalories} totalTime={totalTime} calculateTimeAndCalories={calculateTimeAndCalories} preparedRecipe={preparedRecipe} handleRemove={handleRemove} wantToCook={wantToCook}></Sidebar>
    </section>


</div>
  )
}

export default App
