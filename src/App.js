/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [ {title:'Men`s sneakers Nike Blazer Mid Suede', price: 12999,imageUrl:'./img/sneakers/1.jpg'},
              {title:'Men`s sneakers Nike Air Max 270', price: 8999,imageUrl:'./img/sneakers/2.jpg'},
              {title:'Men`s sneakers Nike Blazer Mid Suede', price: 9699,imageUrl:'./img/sneakers/3.jpg'},
              {title:'Sneakers Puma X Aka Boku Future Rider', price: 8999,imageUrl:'./img/sneakers/4.jpg'},
            ];
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
          {arr.map((obj)=>(
            <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            onClick={()=>console.log(obj)}
          />
          ))}
        </div>
      </div>
      </div>
  )
}

export default App;
