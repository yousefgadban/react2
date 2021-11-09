import React, { useEffect, useState } from "react";
import axios from "axios";

export const Market = () => {

    const [items, setItems] = useState([])


    useEffect(()=>{

        getItems();

    },[])

    const getItems = async () => {
        let response = await axios.get('http://localhost:4000/getAllItems', {});
        console.log(response);
        setItems([...items, response.data]);
        setItems(response.data);
    }

    return(
        <div>
            {
                items.map((item)=>{
                    return <div>name: {item.name} - price: {item.price}</div>
                })
            }
        </div>
    );
}