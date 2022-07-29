import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { addPayment } from '../actions/payments';

export default function AddPaymentForm(props){
   
const dispatch=useDispatch();
   /* const [id,setId]=useState(0);
   const [name,setName]=useState('')
   const [brand,setBrand]=useState('')
   const [price,setPrice]=useState(0); */

const initialFormState = {
   paymentId:0,
    bookingId:0,
    paymentMode:'',
   paymentDate:'',
   paymentStatus:''

}

const initialBookingFormState = {
   bookingId:0
}

const[booking, setBooking] = useState(initialBookingFormState);
const handlebookingIdChange=(event)=>{
 const{name,value}=event.target;
 setBooking({...booking,[name]:value});
 setBooking({...payment,...booking});
}
 
const [payment,setPayment]=useState(initialFormState);

//a function which is universal for all changes 
//id ,name ,brand , price
//when is handleInputChange 
//when you are changing the name of the product
//      event.target.name =name
//event.target.value ='mouse'



const handleInputChange = (event)=>{
   const {name,value} =event.target;
  
   setPayment({...payment,[name]:value});
}


useEffect(()=>{
   setPayment({...payment, booking})
},[booking])
 
/*
const handleIdChange =(event)=>{
   setId(event.target.value)
}

const handleNameChange = (event)=>{
   setName(event.target.value)
}

const handleBrandChange=(event)=>{
   setBrand(event.target.value)
}

const handlePriceChange=(event)=>{
   setPrice(event.target.value)
}*/

const submitHandler=(event)=>{event.preventDefault();
console.log(JSON.stringify(payment)+'from addpaymentform')

dispatch(addPayment(payment));
setPayment(initialFormState);

}
return (<>

   <form onSubmit={submitHandler}>

<h1>Payment Module</h1><br>
</br>

<label>PaymentId</label>
<input 
type='number'
name='paymentId'
value={payment.paymentId}
onChange={handleInputChange}/><br></br>
<br></br>

<label>BookingId</label>
<input 
type='number'
name='bookingId'
value={payment.bookingId}
onChange={handleInputChange}/><br></br>
<br></br>

<label>PaymentMode</label>
<select name="PaymentMode" id="PaymentMode">
    <option value="Card">Card</option>
    <option value="Cash">Cash</option>
   
  </select>
 <br></br>
  <br></br>


<label>PaymentDate</label>
<input 
type='date'
name='paymentDate'
value={payment.paymentDate}
onChange={handleInputChange}/><br></br>
<br></br>

<label>paymentStatus</label>
<input 
type='text'
name='paymentStatus'
value={payment.paymentStatus}
onChange={handleInputChange}/><br></br>
<br></br>

<button>Add Payment</button>

</form>


</>
)


}