var jwt = require('jsonwebtoken');


module.exports.gentoken=()=>{
    token = jwt.sign({
        data: 'orderapi'
      }, 'secret', { expiresIn: 60 * 60 });

      access={
          "access_token":token,
          "expires_in":3600,
          "token_type":"Bearer"

      }
 return  access
}
