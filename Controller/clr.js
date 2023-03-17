

const register = (req,res)=> {
    try {
       let name = req.body.username;
       let email = req.body.email;
       let contact= req.body.contact;
       let city = req.body.city;
       let Bloodgrup = req.body.Bloodgrup;
 
       res.status(200).send({ message: "user is cerated" })
       // res.status(200).send({message:{"name":username,"email":email}})
 
    } catch (error) {
       res.status(500), send("error in register")
    }
 
 }

 
 const product = (req,res)=>{
    let product_id = req.params.product_id;
    res.satus(200).send({message:'login succesfully'})
 };

const verify = (req,res)=>{
    try{
        res.status(200).send({message:`come with me for coffee ${req.query.name} and please call me ${req.query.number}`});
    }catch(error){
     res.status(401).send("error is invalid");
    }
};


 
    module.exports ={
        register,
        product,
        verify
    };
    
    
    
    