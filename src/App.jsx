import './App.css'
import Cards from './components/Cards/Cards'

function App() {

  return (
    <>
      <div className='bg-[#F3F3F3]'>
        <h1 className='text-center text-3xl font-bold py-9'>Course Registration</h1>
        <div className='flex'>
          <div className='w-2/3 pl-6'>
              <Cards></Cards>
          </div>
          <div className='w-1/3'>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
