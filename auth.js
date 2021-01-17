import axois from 'axios';



export const Buyers = async ( FirstName,LastName,Address, Email,MobileNumber, Gender,Passwerd,RePasswerd) => {

    const header = { headers: { "Content-Type": "application/json" } };
        
    const body = JSON.stringify({  FirstName,LastName,Address, Email,MobileNumber, Gender,Passwerd,RePasswerd });

    try {
        await axois.post("https://localhost:5001/api/Buyers", body, header);
        console.log("Success  Buyer")
        

    } catch (error) {
        console.log(error);
        console.log(" Buyer un reigisters")
    }

};

export const Sellers = async ( FirstName,LastName,Address, Email,MobileNumber, Gender,Passwerd,RePasswerd) => {
    // port access
    const config = {
        headers: { "Content-Type": "application/json" }
    };
    
    // convert ==
    const body = JSON.stringify({  FirstName,LastName,Address, Email,MobileNumber, Gender,Passwerd,RePasswerd });

    // datebase access complex
    try {
        // nodemulde 
        await axois.post("https://localhost:5001/api/Sellers", body, config); 
        console.log("Success seller")
        
    
        
        

    } catch (error) {
        console.log(error);
        console.log("Sellers un reigisters")
    }

};