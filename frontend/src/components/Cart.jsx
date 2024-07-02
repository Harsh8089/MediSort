import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import './cart.css'

function Cart() {
  const { cartItems } = useContext(CartContext)
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems]) 

  return (
    <div className='flex flex-wrap px-[10px] min-h-[700px] justify-center mt-[50px] relative'>
        <div id="summary_container" className="summary_container active">
            <header>
                 <p>MY CART | Grand Total: <span></span></p>
                 <i className="fa-solid fa-x closeicon"></i>
            </header>
            <div className="summaryBox_parent">
            <div className="cart_view">
                {
                  cartItems.map(item => (
                    
                        <div className="cartCard">
                              <a href={item.link} className="imgLink">
                                <img src={item.img} alt="" className='w-[30px] h-[50px]' />
                              </a>
                              <div className="medDescription">
                                  <a href="" className="medLink">
                                  <p className="med_name"> { item.name } </p></a>
                                  <p className="priceViewParent">
                                      
                                      <span className="priceView"> { item.price } </span>
                                  </p>
                              </div>
                              <div className="counter">
                                  <div> + </div>
                                  <p>1</p>
                                  <div> - </div>
                              </div>
                              <p> {item.src} </p>
                              <p className="removeTag">
                                  <i className="fa-sharp fa-solid fa-trash"></i>
                              </p>
                        </div> 
                    
                  ))
                }
                </div> 

              
                <div className="summary_div">
                    <p className="summary_txt">Summary</p>
                    <div className="summary_desc">
                        <div className="tata1mg_summary">
                            <header className="summary_header">TATA 1MG | Total: <span>Rs.500</span></header>
                            <div className="summary_content">
                                Empty
                            </div>
                        </div>
                        <div className="apollo_summary">
                            <header className="summary_header">APOLLO | Total: <span>Rs.700</span></header>
                            <div className="summary_content">
                                Empty
                            </div>
                        </div>
                        <div className="pharmeasy_summary">
                            <header className="summary_header">PHARMEASY | Total: <span>Rs.300</span></header>
                            <div className="summary_content">
                                Empty
                                <div className="summary_content_box">
                                    <p>Medicine Name</p>
                                    <p>Qty</p>
                                    <p>Price</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart

