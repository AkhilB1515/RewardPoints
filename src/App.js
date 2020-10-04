import React from 'react';
import './App.css';
import {data} from './dataset'

class App extends React.Component{
  // Initializing the data
  constructor(data){
    super();
    this.data=data;
  }
  
  render(){
    // three hashmaps to store reward points for each of the three months
    let hashmapone = new Map();
    let hashmaptwo = new Map();
    let hashmapthree = new Map();
    // finalhasmap to store reward points for allthe three months together
    let finalhashmap = new Map();
    // custnames to store the names of customers
    let custnames1 = new Set([]);
    let rewardpoints = 0;
    // Looping through the entire dataset
    for(let i=0;i<data.length;i++){
      let n = data[i].name;
      if(!custnames1.has(n)){
        custnames1.add(n);
        for(let j=0;j<data.length;j++){
          let month = data[j].month;
          if(n===data[j].name){
            // If particular month is January
            if(month==='Jan'){
              rewardpoints = 0;
              let moneyspent = data[j].amount;
              
              if(moneyspent>100){
                let doublepoints = moneyspent - 100;
                rewardpoints+= (doublepoints*2);
                rewardpoints+=50;
              }
              else if(moneyspent > 50 && moneyspent<100){
                let singlepoints = moneyspent - 50;
                rewardpoints+= singlepoints;
              }
              if(!hashmapone.has(n)) hashmapone.set(n,rewardpoints);
              else hashmapone.set(n,hashmapone.get(n)+rewardpoints);
            }
            // If particular month is Febraury
            else if(month==='Feb'){
              rewardpoints = 0;
              let moneyspent = data[j].amount;
              
              if(moneyspent>100){
                let doublepoints = moneyspent - 100;
                rewardpoints+= (doublepoints*2);
                rewardpoints+=50;
              }
              else if(moneyspent > 50 && moneyspent<100){
                let singlepoints = moneyspent - 50;
                rewardpoints+= singlepoints;
              }
              if(!hashmaptwo.has(n)) hashmaptwo.set(n,rewardpoints);
              else hashmaptwo.set(n,hashmaptwo.get(n)+rewardpoints);
            }
            // If particular month is March
            else{
              rewardpoints = 0;
              let moneyspent = data[j].amount;
              
              if(moneyspent>100){
                let doublepoints = moneyspent - 100;
                rewardpoints+= (doublepoints*2);
                rewardpoints+=50;
              }
              else if(moneyspent > 50 && moneyspent<100){
                let singlepoints = moneyspent - 50;
                rewardpoints+= singlepoints;
              }
              if(!hashmapthree.has(n)) hashmapthree.set(n,rewardpoints);
              else hashmapthree.set(n,hashmapthree.get(n)+rewardpoints);
            }
          }
        }
      }
    }

    for(let [k,v] of hashmapone){
      !finalhashmap.has(k) ? finalhashmap.set(k,v) : finalhashmap.set(k,finalhashmap.get(k)+v);
    }
    for(let [k,v] of hashmaptwo){
      !finalhashmap.has(k) ? finalhashmap.set(k,v) : finalhashmap.set(k,finalhashmap.get(k)+v);
    }
    for(let [k,v] of hashmapthree){
      !finalhashmap.has(k) ? finalhashmap.set(k,v) : finalhashmap.set(k,finalhashmap.get(k)+v);
    }

    return (
      <div> 
        <div>
          <h2> Data is given for three months Jan, Feb, Mar</h2>
          <table border="1px solid black">
            <thead>Id Name Month Amount </thead>
      {data.map(d => (
        <div>
          <td border="1px solid black">{d.id} {d.name} {d.month} {d.amount}</td>
        </div>
        
      ))}
    </table>
    </div>
        <div>
          <h2> Reward Points are as follows </h2>
        </div>
        <div>
          <h3> In the month of January </h3>
          <p> {hashmapone} </p>
        </div>
        <div>
          <h3> In the month of February </h3>
          <p> {hashmaptwo} </p>
        </div>
        <div>
          <h3> In the month of March </h3>
          <p> {hashmapthree} </p>
        </div>
        <div>
          <h3> For a total of three months </h3>
          <p> {finalhashmap} </p>
        </div>
      </div>
    )
  }
}


export default App;