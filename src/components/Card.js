/* eslint-disable no-unused-vars */
import App from "../App";


function Card(){
    return(
        <><div className='card'>
            <div className='favorite'>
                <img src='/img/heart-unliked.png' alt='Unliked' />
            </div>
            <img width={133} height={112} src='/img/sneakers/1.jpg' alt='Sneakers' />
            <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Price:</span>
                    <b>12 999 rub</b>
                </div>
                <button className='button'>
                    <img width={11} height={11} src='/img/plus.svg' alt='Plus'></img>
                </button>
            </div>
        </div><div className='card'>
                <div className='favorite'>
                    <img src='/img/heart-unliked.png' alt='Unliked' />
                </div>
                <img width={133} height={112} src='/img/sneakers/2.jpg' alt='Sneakers' />
                <h5>Men`s sneakers Nike Air Max 270</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column '>
                        <span>Price:</span>
                        <b>12 999 rub</b>
                    </div>
                    <button className='button'>
                        <img width={11} height={11} src='/img/plus.svg' alt='Plus'></img>
                    </button>
                </div>
            </div><div className='card'>
                <div className='favorite'>
                    <img src='/img/heart-unliked.png' alt='Unliked' />
                </div>
                <img width={133} height={112} src='/img/sneakers/3.jpg' alt='Sneakers' />
                <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column '>
                        <span>Price:</span>
                        <b>8499 rub</b>
                    </div>
                    <button className='button'>
                        <img width={11} height={11} src='/img/plus.svg' alt='Plus'></img>
                    </button>
                </div>
            </div><div className='card'>
                <div className='favorite'>
                    <img src='/img/heart-unliked.png' alt='Unliked' />
                </div>
                <img width={133} height={112} src='/img/sneakers/4.jpg' alt='Sneakers' />
                <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column '>
                        <span>Price:</span>
                        <b>8499 rub</b>
                    </div>
                    <button className='button'>
                        <img width={11} height={11} src='/img/plus.svg' alt='Plus'></img>
                    </button>
                </div>
            </div></>
    )
}


export default Card;