
 
import { useEffect, useState } from "react";

import axios from 'axios'

const CustomHook = (url) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
      axios.get(url, {
        // params: {
        //     articleID: articleID
        // }
    })
        .then(function (response) {
            
            // console.log('response',response.data);
            
            setData(response.data)
        
          })
        .catch(function (error) {
            // console.log(error);
        })
        .then(function () {
            // always executed
            // console.log('Always',data[0]);
        });  
    },[])
  return {data}
}

export default CustomHook