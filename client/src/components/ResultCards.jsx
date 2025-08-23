import { useLocation } from "react-router-dom"

const ResultCards = () => {

    const location = useLocation();
    const {meals} = location.state || [];

  return (
    <div className='Card-Container p-2 w-full flex justify-center mt-50 '>
        <div className="Card bg-secondary-content p-4 flex flex-col gap-6 rounded-sm shadow-sm w-full sm:w-[40rem]">
            <div className="Form flex flex-col gap-4  ">
                <h1 className='text-2xl font-bold mx-auto'>Meals List 🍴</h1>
                <table>
                    <tbody>
                    {meals.map((meal, idx) => (
                        <tr key={idx} className="flex items-center gap-4 py-1.5 px-2 bg-base-200 m-1 rounded-xl sm:p-2.5 ">
                            <img src={meal.strMealThumb} alt="Img" className="contain  w-15 h-15 rounded-xl"/>
                            <td className="text-md font-semibold">{meal.idMeal}</td>
                            <td className="font-semibold">{meal.strMeal}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="Actions w-full flex flex-col justify-center">
            </div>
        </div>
    </div>
  )
}

export default ResultCards