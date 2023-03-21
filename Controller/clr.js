
let db = [];
const demo = (req,res)=>{
   try{
        const arr  =  {
              name :req.body.name,
              email :req.body.email,
              contact :req.body.number,
              Bloodgrup :req.body.Bloodgrup
 
            }
            
            
            const user = db.find((user) => user.email ===arr.email);
            if(user){  
              
              return res.status(200).send({ message: "email is already exist"  })

            }
            db.push(arr);
            console.log(db);

            return res.status(200).send({ message: "user created!"  })

        }catch (error)
         {
           res.status(500).send("arr is not created")
         }
        
    
        }
console.log(db);


 module.exports = {
    demo
 }
 
    
   
    