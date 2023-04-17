import React,{useState} from 'react'

export default function BillData(props) {
     
     const [tb1,updatetb1] = useState(props.billdataList.filter(x => x.table === 'table1'));
     const [tb2,updatetb2] = useState(props.billdataList.filter(x => x.table === 'table2'));
     const [tb3,updatetb3] = useState(props.billdataList.filter(x => x.table === 'table3'));
     
     const deleteHandler = (event) => {
        updatetb1(tb1.filter(x => x.id !== event.target.parentElement.id));
        updatetb2(tb2.filter(x => x.id !== event.target.parentElement.id));
        updatetb3(tb3.filter(x => x.id !== event.target.parentElement.id));
     }
  return (
    <div>
    <div>Orders</div>
    <div>Table 1</div>
    <div>
        {
        tb1.map((data)=><li id={data.orderId} key={data.table}>{data.price} {data.dish} {data.table} <button onClick={deleteHandler}>Delete</button></li>)
        }
    </div>
    <div>Table 2</div>
    <div>
        {
        tb2.map((data)=><li id={data.orderId}>{data.price} {data.dish} {data.table} <button onClick={deleteHandler}>Delete</button></li>)
        }
    </div>
    <div>Table 3</div>
    <div>
        {
        tb3.map((data)=><li id={data.orderId}>{data.price} {data.dish} {data.table} <button onClick={deleteHandler}>Delete</button></li>)
        }
    </div>
    </div>
  )
}
