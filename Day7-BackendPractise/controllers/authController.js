export const registerData = async(req,res)=>{


const {name,age} = req.body

try {
    if(name==="Ravi" && age==="22"){
        res.status(200).json({
            message:"User Registered Successfully",
        })
    }
    else{
        res.status(400).json({
            message:"User Not Registered",
        })
    }
}
catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
        })
    }


}

export const loginData = async(req,res)=>{

    const {name,age}=req.headers
    

try{
    if(name==="Ravi" && age==="22"){
        res.status(200).json({
            message:"User listed Successfully",
        })
    }
    else{
        res.status(400).json({
            message:"User Not Listed",
        })
    }
}
catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
        })
    }

    console.log(req.headers);




    


}

export const getbyId = (req,res)=>{


    console.log(req);
    

}


export const getbyquery = (req,res)=>{


    console.log(req);
    

}