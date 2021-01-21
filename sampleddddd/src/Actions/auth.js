import axois from 'axios';



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