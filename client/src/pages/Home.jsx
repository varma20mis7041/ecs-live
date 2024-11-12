import React, { useEffect, useState } from 'react';
import { IoChevronBack } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
const processFlow = {
    initial : "INITIAL",
    details : "DETAILS",
    cart : "CART",
    payment : 'PAYMENT'
}



const Home = () => {
        const [currentTab,updateCurrentTab] = useState(processFlow.initial)
        const [price,setPrice] = useState(NaN);
        const [isEditUserDetails,updateIsEditStatus] = useState(true);
        const [userDetails,updateUserDetails] = useState({
            name : "",
            phoneNo : "",
        })
        const [userName,updateUserName] = useState(userDetails.name);
        const [userNumber , updateUserNumber] = useState(userDetails.phoneNo);
        const [errName,setErrName] = useState(false);
        const [errNumber,setErrorNumber] = useState(false);

        const onClickUpdate = ()=> {
            if(userName === "" && userNumber === ""){
                setErrName(true);
                setErrorNumber(true);
            }else if(userName === ""){
                setErrName(true);
            }else if(userNumber == ""){
                setErrorNumber(true)
            }else{
                updateUserDetails({
                    name:userName,
                    phoneNo:userNumber,
                })
                updateIsEditStatus(false);
            }
           
        }
useEffect(()=>{
    let temp = 0;
    cardItems.forEach(element => {
        console.log("temp price",temp);
        temp = temp + (element.quantity * element.price);
    });
    setPrice(temp);
},[])


const [cardItems,updateCardItems] = useState([]);
useEffect(()=>{
    fetchProducts();
},[])

const fetchProducts = async() => {
    const response = await fetch("http://localhost:9000/products/all");
    const data = await response.json(); 
    console.log("products", data);
    updateCardItems(data)
    let temp = 0;
    data.forEach(element => {
        console.log("temp price",temp);
        temp = temp + (element.quantity * element.price);
    });
    setPrice(temp);
}

    return (
        <div className="home">
           <div className="navbar_container">
                <div className="logo_container">
                    <img src="https://i.ibb.co/FXN6CKB/final-logo.png" className="logo" />
                </div>

                <div className="nav_right_container">
                    <h1 className="nav_item" onClick={()=>updateCurrentTab(processFlow.initial)}>Home</h1>
                    <h1 className="nav_item" onClick={()=>updateCurrentTab(processFlow.cart)}>Cart</h1>
                </div>

           </div>
         <div className='home_bg_container'>

         
           {currentTab === processFlow.initial && (
            <div className="homepage_container">
            <h1 className="main_heading">Welcome 
                <br/>
                to 
                <br/>
                Wist Weal
            </h1>
            <button className="button" onClick={()=>updateCurrentTab(processFlow.details)} >Get Started</button>
       </div>
           )}
           {currentTab === processFlow.details && (
                <div className='customer_details_bg'>
                    <div className='back_container'>
                    <IoChevronBack  className='back_icon' onClick={()=>updateCurrentTab(processFlow.initial)}  />
                    </div>
                    <div className='back_icon_customer_details '>
                                
                            <h1 className='details_main_heading'>Customer Details </h1>
                        <div className='user_edit_icon'><FaUserEdit size={20} onClick={()=>updateIsEditStatus(true)} /> </div>
                        </div>
                    {!isEditUserDetails && (
                        <div className='details_container'>
                    
                        <h1 className='detail_item'><span className='user_detail_key'>Name</span> : {userDetails.name}</h1>
                        <h1 className='detail_item'><span  className='user_detail_key'>phone no</span> : {userDetails.phoneNo}</h1>
                      
                        </div>
                    )}
                    {isEditUserDetails && (
                        <div className=' update_user_bg_container'>
                            <div className='label_container'>
                                <label className='edit_user_label'>Name</label>
                                <input type='text' className='edit_user_input' value={userName} onChange={(e)=>{updateUserName(e.target.value);setErrName(false)}} />
                                {errName && (<p className='err_msg'>*Required</p>)}
                            </div>
                            <div className='label_container'>
                                <label className='edit_user_label'>Phone No.</label>
                                <input type='text' className='edit_user_input' value={userNumber} onChange={(e)=>{updateUserNumber(e.target.value);setErrorNumber(false)}} />
                                {errNumber && (<p className='err_msg'>*Required</p>)}
                            </div>
                            
                            <div className='update_user_details_button_container'>
                                {/* <button className='button' onClick={()=>updateIsEditStatus(false)}>Cancel</button> */}
                                <button className='button' onClick={onClickUpdate}>Update</button>
                            </div>
                        </div>
                    )}
                    
                    {!isEditUserDetails && (
                        <div className='cart_button_container'>
                        <button className='button' onClick={()=>updateCurrentTab(processFlow.cart)}>Cart</button>
                    </div>
                    )}
                </div>
           )}
           {currentTab === processFlow.cart && (
            <div className='cart_bg_container'>
                   <div className=' back_icon_cart'>
                    <IoChevronBack  className='back_icon' onClick={()=>updateCurrentTab(processFlow.details)} />
                   <h1 className='cart_heading'>Cart</h1>
                   </div>
                   
                    <div className='card_items_container'>
                    <div className='item_container'>
                                <h1 className='item_attribute_key cart_item_name'>Item Name</h1>
                                <h1 className='item_attribute_key'>Weight</h1>
                                <h1 className='item_attribute_key'>Quantity</h1>
                                <h1 className='item_attribute_key'>Price</h1>
                            </div>
                        {cardItems.map((eachItem)=> (
                            <div className='item_container'>
                                <h1 className='item_attribute cart_item_name'>{eachItem.name}</h1>
                                <h1 className='item_attribute'>{eachItem.weight}</h1>
                                <h1 className='item_attribute'>{eachItem.quantity}</h1>
                                <h1 className='item_attribute'>{eachItem.price}</h1>
                            </div>
                        ))}
                    </div>
                    {!isNaN(price) && <h1 className='total_amount'>Total : {price} </h1>}
                    <div className='button_container'><button className='button' onClick={()=>updateCurrentTab(processFlow.payment)} >Checkout</button></div>
                
            </div>
           )}
           {currentTab === processFlow.payment && (
            <div className='payment_bg_container'>
                <div className='back_icon_payment'>
                    <IoChevronBack className='back_icon' onClick={()=>updateCurrentTab(processFlow.cart)} />
                   <h1 className='cart_heading'>Payment</h1>
                   </div>
                <h1 className='total_payment_amount'>Total : {price}</h1>
                <div className='payment_methods_bg_container'>
                    <h1 className='payment_method_heading'>Payment Methods</h1>
                    <div className='qr_code_container'>
                        <img src='https://i.ibb.co/Gpjv6bY/final-qr-code.png' className='qr_code' />
                    </div>
                </div>
            </div>
           )}
           </div>
        </div>
    );
};

export default Home;
