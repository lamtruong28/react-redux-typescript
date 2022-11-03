import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { balanceSelector } from './redux/selectors';
import balanceSlice from './redux/reducers/balanceSlice';
import { AppDispatch } from './redux/store';
import './App.css'

function App() {
  const {balance} = useSelector(balanceSelector);
  const dispatch:AppDispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleDeposit = ()=> {
    if(!value) return;
    dispatch(balanceSlice.actions.depositMoney(Number(value)))
    setValue('');
  }
  const handleWithdraw = ()=> {
    if(!value) return;
    if(balance >= Number(value)){
      dispatch(balanceSlice.actions.withdrawMoney(Number(value)));
      setValue('');
    }
    else 
      alert("You don't have enough money!");
  }
  return (
    <div className="App">
        <h1>{balance}$</h1>
        <p>
          <input
            value={value}
            onChange={e=>setValue(e.target.value)}
            style={{padding: 8}}
            type="number"
            placeholder='Input money ...'/>
        </p>
        <button onClick={handleDeposit}>Deposit</button>
        <button onClick={handleWithdraw}>Withdraw</button>
        <button onClick={()=>dispatch(balanceSlice.actions.bankruptMoney())}>Bankrupt</button>
    </div>
  )
}

export default App
