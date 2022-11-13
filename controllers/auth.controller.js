const jwt = require("jsonwebtoken");

module.exports = {
    author: (req,res) =>{
        try {
          const auth = req.headers.authorization
          const token= auth.split(' ')[1]
         
         const isTOkenValid = jwt.verify(token, "yessir")
         
         
           res.json({
             //data: movies,
             message: "Authentication",
           });
        } catch (error) {
          res.status(500).json({
            message : "Internal Server Error"
          })
        }
        
      }
}
