import React, { useEffect, useState } from "react";
import axios from "axios";

export const AddItem = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    useEffect(()=>{

    }, []);

    const onAddClicked = async () => {
        console.log('onAddClicked', name, price);

        let response = await axios.post('http://localhost:4000/addItem', {
            name: name,
            price: +price
        });

        console.log(response);

        if (response.status === 201) {
            console.log('added...');
        }
    }

    return(
        <div>
            AddItem
            <br />
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> 
            <br />
            <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} /> 
            <br />
            <input type="button" value="add" onClick={(e) => {onAddClicked()}} />
        </div>
    );
}