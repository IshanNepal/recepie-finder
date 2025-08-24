import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


const InfoCardComponent = ({id}) => {
    // creating a meal state
    const [meal, setMeal] = useState({});
    // Creating a Ingredients state
    const [Ingredients, setIngredients] = useState([]);
    // Creating a State for Instructions

    // Creating a fetch function
    const handleFetch = async () => {
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            if (!res.ok) {
                console.log('Error While Searching Recepie', res);
                toast.error('Error While Searching Recepie');
            
            }
            const data = await res.json();
            const mealdata = data.meals[0];
            setMeal(mealdata)

            // Parse ingredients after fetch
            parseIngredients(mealdata);
        }
        catch (e) {
            console.log('Error in Id', e)
            toast.error('Invalid id or Some Unexpected Error Occured!')
        }
    }
    const parseIngredients = (mealdata) => {
        let Ingredients = [];
        
        // for loop for fetching static contents
        for ( let i =1; i <= 20; i++){
            const Ingredient = mealdata[`strIngredient${i}`];
            const measure = mealdata[`strMeasure${i}`];

            if(Ingredient && Ingredient.trim() !== ""){
                Ingredients.push({
                     ingredient: Ingredient,
                     measure: measure?.trim() || "",
                })
            }
        }
       setIngredients(Ingredients)
       
    }
    

    useEffect(() => {
        handleFetch()
    },[])

    console.log(Ingredients)
  return (
    <div className='Card-Container p-2 w-full flex justify-center mt-20 sm:mt-30  '>
        <div className="Card bg-secondary-content p-4 flex flex-col gap-6 rounded-sm shadow-sm w-full sm:w-[40rem] items-center">
            <div className="Main flex gap-4 p-2 flex-col sm:flex-row justify-center items-center sm:items-center sm:justify-start sm:w-[40rem]">
                <img src={meal.strMealThumb} className='h-35 w-35 object-contain rounded-sm ' />
                <div className="HeadText flex items-end gap-8">
                    <div className="MealInfo">
                        <h1 className='text-xl font-semibold '>{meal.idMeal}</h1>
                        <h1 className='text-2xl font-bold'>{meal.strMeal}</h1>
                    </div>
                    <div className="MealDetail flex gap-0.5 flex-col pt-4 ">
                        <span className='text-xl font-semibold'>{meal.strCategory}</span>
                        <span className='text-xl font-semibold'>{meal.strArea}</span>
                        <span className='text-xl font-semibold'>{meal.strTags}</span>
                    </div>
                </div>

            </div>
            <div className="Steps/Ingredients grid grid-cols-1 justify-items-center sm:grid-cols-2 gap-2" >
                <div className="Ingredients flex flex-col">
                    <h2 className="text-xl font-bold mb-2">Ingredients 🧂</h2>
                        <ul className="list-disc pl-5 space-y-1">
                        {Ingredients.map((item, idx) => (
                            <li key={idx} className='mb-1.5'>
                            {item.measure} {item.ingredient}
                            </li>
                        ))}
                        </ul>
                </div>
                <div className="steps flex flex-col">
                    <h2 className="text-xl font-bold mb-2">Steps for Cooking! 🍳</h2>
                        <ul>
                        {meal.strInstructions?.split(/\r?\n/).filter((step) => step.trim() !== "").map((step, idx) => (
                            <li key={idx} className='mb-1.5'>{idx + 1}.{step}</li>
                        ))}
                        </ul>
                </div>
            </div>
            <div className='YoutubeTutorial w-full h-full'>
                <h2 className="text-xl font-bold mb-2">Tutorial 🎥</h2>
                {meal.strYoutube && (
                    <div className="aspect-w-16 aspect-h-9 ">
                        <iframe
                            className="w-full h-[16rem] rounded-xl"
                            src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>)}
            </div>
        </div>
    </div>
  )
}

export default InfoCardComponent