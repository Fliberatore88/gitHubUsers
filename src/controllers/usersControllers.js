const path = require('path');
const fetch = require('node-fetch');




const usersController = {
  findUser: async function (req,res) {
    const user = req.params.user
    fetch('https://api.github.com/users/'+user).then(res => res.json()).then(json =>  {
      return res.status(200).json({
        data: json
      })
    }).catch(e => {return e + 'Hubo un error'})
    
  }
}

module.exports = usersController;