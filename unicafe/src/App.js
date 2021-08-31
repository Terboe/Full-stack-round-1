
import React, { useState } from 'react'



const StatisticLine = (props) => <p>{props.text} {props.value}</p>
const Button = props => <button onClick = {props.handleClick}>{props.text}</button>
const TableRow = props => {
  return(
  <tbody>
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
  </tbody>
  )
}
const Statistics = (props) => {
  if(props.n > 0){
  return (
    <>
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.n} />
      <StatisticLine text="average" value ={props.avg} />
      <StatisticLine text="positive" value ={props.pos} />
    </div>
    <br/>
    <br/>
    <br/>
    <h3>1.11*</h3>
    <table>
      <TableRow text="good" value ={props.good} />
      <TableRow text="neutral" value ={props.neutral} />
      <TableRow text="bad" value ={props.bad} />
      <TableRow text="all" value ={props.n} />
      <TableRow text="average" value ={props.avg} />
      <TableRow text="positive" value ={props.pos} />
      </table>
    </>
  )
  }
  return (
  <>
    <h1>statistics</h1>
    <p>No feedback given</p>
  </>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avgSum, setAvgsum] = useState(0);
  const [n , setn] = useState(0);

  const avg = () => {
    if(n>0){
      return avgSum/n ;
    }
    return 0;
  }

  const getPos = () =>{
    if(n>0){
    return good/n ;
    }
    return 0;
  }
  const handleGood = () => {
      setAvgsum(avgSum+1);
      setn(n+1);
      setGood(good+1);
  }
  const handleNeutral = () => {
      setn(n+1);
      setNeutral(neutral + 1 );
  }
  const handleBad = () => {
      setAvgsum(avgSum-1);
      setn(n+1);
      setBad(bad +1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {handleGood} text = "good" />
      <Button handleClick = {handleNeutral} text = "neutral" />
      <Button handleClick = {handleBad} text = "bad" />
      < Statistics good = {good} bad = {bad} neutral = {neutral} avg = {avg()} pos = {getPos()} n = {n} />
    </div>
  )
}

export default App