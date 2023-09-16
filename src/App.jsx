import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Carts from './components/Carts/Carts'

function App() {

  const [carts, setCarts] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [remainingCredit, setRemainingCredit] = useState(0)
  const total = 20;

  const handleAddToCarts = course =>{

    const isExist = carts.find((courseName) => courseName.id == course.id);
    let temp = course?.credit_hours;

    if(isExist){
      return alert("already exsist")
    }
    else{
      carts.forEach((item) => {
        temp += item.credit_hours;
      });
      const sum = total - temp;
      if (temp > 20) {
        return alert("bhai  taka sesh");
      } else {
      const newCarts = [...carts, course];
      setCarts(newCarts)
      setTotalCredit(temp);
      setRemainingCredit(sum);
      }
    }

  }

  return (
    <>
      <div className='bg-[#F3F3F3]'>
        <h1 className='text-center text-3xl font-bold py-9'>Course Registration</h1>
        <div className='flex gap-8'>
          <div className='w-2/3 pl-6'>
              <Cards handleAddToCarts={handleAddToCarts}></Cards>
          </div>
          <div className='w-1/3 pr-6'>
            <Carts 
            carts={carts}
            totalCredit ={totalCredit}
            remainingCredit ={remainingCredit}
            ></Carts>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
