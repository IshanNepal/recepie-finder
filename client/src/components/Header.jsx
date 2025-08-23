import {useNavigate} from  'react-router-dom'
import {LayoutGrid, Bell, Panda} from 'lucide-react'

const HeaderComponent = () => {
    const navigate = useNavigate();
  return (
       <header className='flex justify-between p-4 shadow-md items-center bg-base-200 sticky top-0 z-10'>
        <div className="Main flex gap-4 items-center">
            <LayoutGrid size={30} />
            <div className="Head flex gap-2 items-center">
                <div className="Logo  ">
                    <Panda size={25}/>
                </div>
                <div className="Text text-xl">
                    <span className='font-bold text-2xl text-primary'>RecepieGen</span>
                    <p>Find Your Taste!</p>
                </div>
            </div>
        </div>
        <div className="Other flex gap-4 text-white">
             <button className='hidden sm:block text-black' onClick={() => navigate('/login')}>
                Login
            </button>
            <button className='  p-2 rounded-full bg-accent '>
                <Bell size={20}/>
            </button>
        </div>
   </header>
  )
}

export default HeaderComponent