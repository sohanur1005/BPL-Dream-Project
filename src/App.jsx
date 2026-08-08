
import './App.css'
import navImg from "../assets/logo.png"
import dollerImg from "../assets/dollar-1.png"

function App() {
 

  return (
    <>
     <div className="navbar max-w-[1200px] mx-auto ">
  <div className="flex-1">
    <img className='w-[60px] h-[60px]' src={navImg} alt="" />
  </div>
  <div class="flex items-center ">
    
      <span className='mr-2'>600000000</span>
      <span className='mr-2'>Coin</span>
      <img src={dollerImg} alt="" />
    
  </div>
</div>
    </>
  )
}

export default App
