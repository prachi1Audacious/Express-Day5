/*
const register= function(req,res,next){
    let m = true;

    if(m){
        next()
    }
    else{
        res.status(401).send({message:"not authorized"})
        return;
    }
}
*/

exports.queryValidation = (req, res, next) => {

    let name = req.query.name
    let number = req.query.number

    if (!name) {
        res.send({ messge: " please enter name" })
        return;
    }
    if (!number) {
        res.send({ message: "please provide contact" })
        return;
    }
    next();
}



// module.exports ={ 
// register
// };




/*
case 1
export = token

require =>   const token = requre('path)

case 2
module.exports ={ token } ; 
require =>   const {token} = requre('path)

*/ 
 
