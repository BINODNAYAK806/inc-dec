import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  textAlign : 'center'
};
const div1 ={

color: "white",
size : "100px",
backgroundColor : "red",
textAlign: "center",
border: "30px solid blue" ,
width : "40%",
marginLeft :"30%" 



}

const mystyle1 = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  textAlign : 'center',
  marginRight: "5px",
  width : "40px",
  margin : "2%"
  // height : "20px"
};
function App() {

    const [count,setcount] = useState(1)

    const inc = ()=>{

      setcount(count+1)

    }

    
    const dec = ()=>{

      setcount(count+(-1))

    }
  return (

    
    <>
    
    <h1 style={ mystyle}>count app</h1>
    <div style={div1}><h2 >{count}</h2></div>
     <div style={div1}>   
    <button style={mystyle1} onClick={()=>{inc()}}>inc</button>
    <button style={mystyle1}onClick={()=>{dec()}}>dec</button>
    </div>
    </>
  );
}

export default App;
