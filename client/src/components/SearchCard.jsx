import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SearchCardComponent = () => {
    const navigate = useNavigate();
    // State for Updating the Main Ingredients
    const [mainIngredients, setMainIngredients] = useState('');

    // Defining HandleSearchMainIngreditents Fucntion
    const handleSearchMainIngredients = async () => {
        const main_ing = mainIngredients.toLocaleLowerCase().trim();
        const fixed_main_ing = main_ing.replaceAll(" ", "_");
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${fixed_main_ing}`)

            if (!res.ok) {
                console.log(res)
                console.error('error while posting')
                toast.error('Search Unsucessfull!')
            }

            const data = await res.json();
            const meals = data.meals;
            toast.success('Search Sucessfull!')
            navigate('meals_result', { state: {meals} })
            
        }

        catch(e) {
            toast.error('Error while Searching!')
            console.log('Error:', e)
        }
        
    }

  return (
    <div className='Card-Container p-2 w-full flex justify-center mt-50 '>
        <div className="Card bg-secondary-content p-4 flex flex-col gap-6 rounded-sm shadow-sm w-full sm:w-[40rem]">
            <div className="Form flex flex-col gap-4 sm:gap-2 ">
                <h1 className='text-2xl font-bold mx-auto'>Search Using Main Ingredients 🧂</h1>
                <label htmlFor="main_ingredients" className='font-semibold text-xl'>Main Ingredients! 🍗</label>
                <input type='text' placeholder='Enter Your Main Ingredient!' className='p-2 bg-base-200 rounded-md outline-none' onChange={(e) => setMainIngredients(e.target.value)}/>
            </div>
            <div className="Actions w-full flex flex-col justify-center">
                <button className='bg-accent p-2 text-white rounded-md' onClick={()=> handleSearchMainIngredients()}>Search</button>
            </div>
        </div>
    </div>
  )
}

export default SearchCardComponent;