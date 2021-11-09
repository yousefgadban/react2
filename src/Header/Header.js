import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css'
  
export const Header = () => { 

    const navigate = useNavigate();

    useEffect(()=>{
       

    }, []);


  
    return (
        <div style={{backgroundColor: '#2196f3', width:'100vw', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'white', height: '8vh'}}>
            <div style={{margin: '0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          
                <Link
                    className="headerLink" 
                    to="/market">Market</Link>
                <Link
                    className="headerLink" 
                    to="/addItem">Add Item</Link>
        
             
            </div>
           
        </div>
    );
    
}