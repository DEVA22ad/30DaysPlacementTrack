export const addData = async(req,res)=>{

console.log(req);

const {name} = req.body

if (name==="react"){
     
   res.status(200).json({msg:"Succfully done"})

}else{

     res.status(200).json({msg:"Not done"})

}


}