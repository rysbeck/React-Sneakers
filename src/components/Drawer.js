import React from 'react'

function Drawer() {
  return (
        <div style={{display:'none'}} className='overlay '>

    <div className='drawer d-flex flex-column'>
        <h2 className='mb-30 d-flex justify-between'>Cart
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/></h2>
        <div className='items'>

        <div className='cart-item d-flex align-center mb-20'>
          <div style={{backgroundImage:'url(/img/sneakers/2.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20 cu-p'>
          <div style={{backgroundImage:'url(/img/sneakers/1.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20'>
          <div style={{backgroundImage:'url(/img/sneakers/3.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20 cu-p'>
          <div style={{backgroundImage:'url(/img/sneakers/4.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20'>
          <div style={{backgroundImage:'url(/img/sneakers/5.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20 cu-p'>
          <div style={{backgroundImage:'url(/img/sneakers/6.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20'>
          <div style={{backgroundImage:'url(/img/sneakers/7.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20 cu-p'>
          <div style={{backgroundImage:'url(/img/sneakers/8.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20'>
          <div style={{backgroundImage:'url(/img/sneakers/9.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20 cu-p'>
          <div style={{backgroundImage:'url(/img/sneakers/10.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        <div className='cart-item d-flex align-center mb-20'>
          <div style={{backgroundImage:'url(/img/sneakers/11.jpg)' }} className='cart-item-img'></div>
          <div className='mr-20'>
            <p className='mb-5'>Men`s Sneakers Nike Air Max 270</p>
            <b>12 999 rub.</b>
          </div>
          <img className='remove-btn' src='/img/btn-remove.svg' alt='Remove'/>
        </div>
        
          
          
        </div>
        <div className='cart-total-block'>
            <ul>
            <li className='d-flex'>
              <span>Total:</span>
              <div></div>
              <b>21 498 rub</b>
            </li>
            <li className='d-flex'>
              <span>Tax 5%:</span>
              <div></div>
              <b>1074 rub</b>
            </li>
          </ul>
          <button className='greenButton'>Place an order<img src='/img/arrow.svg' alt='Arrow'/></button>
          </div>
      </div>
      </div>
  )
}

export default Drawer