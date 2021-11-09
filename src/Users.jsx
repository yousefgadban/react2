import React, { useEffect, useState } from "react";
import axios from "axios";

export const Users = () => {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=>{

        getUsers();

    },[])

    const getUsers = async () => {
        console.log('getUsers');
        let response = await axios.get('http://localhost:4000/getAllUsers', {});
        console.log(response);
        // let users = response.data.map((user)=>{
        //     return <div>{user.name} - {user.email}</div>
        // })
        setUsers(response.data);
    }

    const onAddClicked = async () => {
        console.log('onAddClicked', name, email);

        let response = await axios.post('http://localhost:4000/createUser', {
            name: name,
            email: email
        });

        console.log(response);

        if (response.status === 201) {
            setUsers([...users, response.data])
            // updatedUsers.push(response.data);
            // console.log(updatedUsers);
            // setUsers([]);
            // setUsers(updatedUsers);
        }
    }

    const onDeleteClicked = async (id, e) => {
        console.log('onDeleteClicked', id);

        // let response = await axios.delete(`http://localhost:4000/deleteUser?id=${id}`, {});
        let response = await axios.delete(`http://localhost:4000/deleteUser1/${id}`, {});

        console.log(response);

        if (response.status === 200) {
            let updatedUsers = users.filter((user)=>{
                return user.id !== id
            })
    
            setUsers(updatedUsers)
        }

        

        
    }

    return(
        <div>
            {
                console.log('render', users.length)
            }
            {
                users.map((user)=>{
                    
                    return <div key={user.id}>
                                {user.name} - {user.email}
                                <input type='button' value='del' onClick={(e)=>{onDeleteClicked(user.id, e)}} />
                            </div>
                })
            }
            <br /><br /><br />
            <hr />
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> 
            <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> 
            <input type="button" value="add" onClick={(e) => {onAddClicked()}} />
        </div>
    );
}