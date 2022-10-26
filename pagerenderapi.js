

import React from 'react';
import { useState, useEffect } from 'react';



export default function webtwo(two){


  var store1 = {
    "name": "Alex C",
    "age": 2,
    "city": "Houston"
}

var store2 = [5,10,15,20,25]
var arrayToString = JSON.stringify(Object.assign({}, store2));
var store3 = JSON.parse(arrayToString);



const [statea, stateb] = useState([]);
const [state1, state2] = useState(false);

useEffect(() => {
state2(true)
  async function postapi(){
    const response = await fetch("./api/mongapi", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(store3)
      })
      const findata = await response.json();
      console.log(findata)
      stateb(findata)
      state2(false)
    }
    postapi();
  }, [])





  const [stateaa, statebb] = useState([]);
  const [state11, state22] = useState(false);
  
  useEffect(() => {
  state22(true)
    async function getapi(){
      const response = await fetch("./api/mongget")
        const findataget = await response.json();
        console.log(findataget)
        statebb(findataget)
        state22(false)
      }
      getapi();
    }, [])
  
  
 

return (

<div>
  

 

</div>




)

}





export async function getServerSideProps(){


  
  return {
    props : {
      
      
    }
  
  }
  
  }
  
  




  
  


