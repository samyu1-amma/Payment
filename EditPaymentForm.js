import { faDriversLicense } from '@fortawesome/free-solid-svg-icons';
import React , {useContext, useEffect, useState} from 'react'

export default function EditPaymentForm(props){
     const [payment,setPayment] =useState(props.currentPayment)

    const handleInputChange = (event)=>{
        const {name,value} =event.target;
       
        setPayment({...payment,[name]:value});
     }


     const submitHandler=(event)=>{event.preventDefault();
       props.updatePayment(payment.paymentId,payment);
    }


   

     return (
        <form onSubmit={submitHandler}>
         
<label>Id</label>
<h1>{props.currentPayment.paymentid}</h1>

<label>BookingId</label>
<input 
type='number'
name='bookingId'
value={payment.bookingId}
onChange={handleInputChange}/><br></br>
<br></br>

<label>PaymentMode</label>
<input 
type='text'
name='paymentMode'
value={payment.paymentMode}
onChange={handleInputChange}/>


<label>PaymentDate</label>
<input 
type='date'
name='paymentDate'
value={payment.paymentDate}
onChange={handleInputChange}/>


<label>paymentStatus</label>
<input 
type='text'
name='paymentStatus'
value={payment.paymentStatus}
onChange={handleInputChange}/>


<button>Update Payment</button>
<button onClick={()=>props.setEditing(false)} 
className="button muted-button">Cancel</button></form>


   )




}