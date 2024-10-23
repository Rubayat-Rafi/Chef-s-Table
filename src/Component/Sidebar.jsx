/* eslint-disable react/prop-types */


const Sidebar = ({wantToCook, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {


    return (
        <div className="md:w-1/3">
            <div className="border rounded-2xl">

        {/* want to cook table */}
            <div className="overflow-x-auto">
            <h1 className="text-center font-bold py-5 text-lg border-b">Want to cook: {wantToCook.length}</h1>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            wantToCook.map((recipe, index) =>  
            <tr className="hover" key={index}>
            <th>{index + 1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time}</td>
            <td>{recipe.calories}</td>
            <td>
            <button onClick={()=> {handleRemove(recipe.recipe_id)
                calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
            }} className=" hover:bg-gray-300 bg-[#0BE58A] text-[#150B2B] py-2 px-4 rounded-full text-xs font-semibold ">Preparing</button>
            </td>
          </tr>)
        }
    </tbody>
    </table>
            </div>

        {/* currently cooking table */}
            <div className="overflow-x-auto">
            <h1 className="text-center font-bold py-5 text-lg border-b">Currently cooking: {preparedRecipe.length}</h1>
            <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            preparedRecipe.map((recipe, index) =>   
            <tr className="hover" key={index}>
            <th>{index + 1}</th>
            <td>{recipe.recipe_name}</td>
            <td>{recipe.preparing_time}</td>
            <td>{recipe.calories}</td>
          </tr>)
        }
        <tr>
        <th></th>
            <td></td>
            <td>Total Time = {totalTime}</td>
            <td>Total Calories = {totalCalories}</td>
        </tr>
    </tbody>
    </table>
            </div>

            </div>

            
        </div>
    );
};

export default Sidebar;