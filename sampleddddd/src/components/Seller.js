import './CSS/todo.css'
import { Sellers } from '../Actions/auth';
import React, { useState } from "react";


const Seller = () => {
        const [formData, setFromData] = useState(
            {
                FirstName:null,
                LastName: null,
                Address: null,
                Gender: null,
                Email:null,
                Passwerd: null,
                MobileNumber: null,
                RePasswerd:null,
                

            }
        );

        

      
        const { FirstName,LastName,Address, Email,MobileNumber, Gender,Passwerd,RePasswerd} = formData;
      
        const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value })
      

            
        const onSubmit = async e => {
          e.preventDefault();
          Sellers( FirstName,LastName,Address, Email,MobileNumber, Gender,Passwerd,RePasswerd);
          
          
        };
        // Buyers( FirstName,LastName,Address, Email,MobileNumber, Gender,Passwerd,RePasswerd);
        // Sellers( FirstName,LastName,Address, Email,MobileNumber, Gender,Passwerd,RePasswerd);


    
        return (
            <div className="container">

                <form onSubmit={e => onSubmit(e)}>
                    <h1>User Registration</h1>
                    <label>First Name:</label> <input type="text" value={FirstName} onChange={e => onChange(e)} placeholder="FirstName..." /><br />
                    <label>Last Name :</label> <input type="text" value={LastName} onChange={e => onChange(e)} placeholder="LastName..." /><br />
                    <label>Address :</label> <input type="text" value={Address} onChange={e => onChange(e)} placeholder="Addresss..." /><br />
                    <label>Email Adress`:</label> <input type="text" value={Email} onChange={e => onChange(e)} placeholder="Email..." /><br />
                    <label>Phone Number`:</label> <input type="text" value={MobileNumber} onChange={e => onChange(e)} placeholder="PhoneNumber..." /><br />
                    <label>Gender :</label> <input type="text" value={Gender} onChange={e => onChange(e)} placeholder="Password..." /><br />
                    <label>Password :</label> <input type="password" value={Passwerd} onChange={e => onChange(e)} placeholder="Password..." /><br />
                    <label>RePassword :</label> <input type="password" value={RePasswerd} onChange={e => onChange(e)} placeholder="Password..." /><br />


                   


                    <input type="submit" id="btn1" value= "REGISTER"  />
                    { /*
                            //Seller
                  */ }
                  

                </form>
                

            </div>
            
        )
    }



export default Seller
