import React,{ useState } from 'react'
import BillData from './BillData';
import './MenuStyle.css';
export default function Menu() {
    
    const [neworderId,setorderId] = useState('');
    const [newprice,setnewprice] = useState('');
    const [newdish,setnewdish] = useState('');
    const [newtable,setnewtable] = useState('');
    const [newbilldata,setbilldata] = useState({});
    const [billdataList,setbilldataList] = useState([]);

    const orderChangeHandler = (event) => setorderId(event.target.value);
    const priceChangeHandler = (event) => setnewprice(event.target.value);
    const dishChangeHandler = (event) => setnewdish(event.target.value);
    const tableChangeHandler = (event) => setnewtable(event.target.value);
    
    const addBill = () => {
        const billData = {
            orderId: neworderId,
            price: newprice,
            dish: newdish,
            table: newtable
        }
        billdataList.push(billData);
       setbilldataList(billdataList);
       
       
    }
    
  return (
    <div>
    <div className='orderContainer'>
        <div>
            <label htmlFor='orderId'>Unique Order ID:</label>
            <input type='number' id='orderId' onChange={orderChangeHandler}></input>
        </div>
        <div>
            <label htmlFor='price'>Choose Price:</label>
            <input type='number' id='price' onChange={priceChangeHandler}></input>
        </div>
        <div>
            <label htmlFor='dish'>Choose Dish:</label>
            <input type='text' id='dish' onChange={dishChangeHandler}></input>
        </div>
        <div>
            <label htmlFor='table'>Choose a Table:</label>
            <select onChange={tableChangeHandler}>
                <option value="table1">Table 1</option> 
                <option value="table2">Table 2</option> 
                <option value="table3">Table 3</option> 
            </select>
        </div>
        <div>
            <button onClick={addBill}>Add to bill</button>
        </div>
        
    </div>
    <div>
    <BillData billdataList={billdataList}/>
</div>
</div>
  )
}
