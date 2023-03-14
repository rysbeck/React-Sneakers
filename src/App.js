/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return(
    <div className='wrapper clear'>
      <Drawer/>
       <Header/>
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
        <h1 className=''>All sneakers</h1>
        <div className='search-block d-flex'>
          <img  src='/img/search.png' alt='Search'/>
          <input placeholder='Search...'></input>
        </div>
        </div>

        
        <div className='d-flex'>
          <Card/>
        
       
        </div>
      </div>
      </div>
  )
}

export default App;
