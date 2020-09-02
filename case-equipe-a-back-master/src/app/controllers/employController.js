const employModel = require('../models/employ')
const crypto = require('crypto');
const mailer = require('../../modules/mailer')

class EmployController {
    //Deletar
    async destroy(req, res) {
        const { id } = req.params;
        await employModel.findByIdAndDelete(id);
        return res.status(200).json({ msg: 'Usuário deletado com sucesso' });
      }
      // GET com TODOS USUARIOS
 async index(req, res) {
    const employ = await employModel.find();
    return res.status(200).json({ employ });
  }


  async show(req, res) {
    console.log(req.params);
    const { id} = req.params;
    const employ = await employModel.findOne({UserID:id});
    console.log(employ);
    return res.status(200).json({ employ });
  }
  
  
  // POST - CRIAR USUARIO
    async store(req, res) {
      const employ = await employModel.create(req.body);
  
      employ.pass = undefined;
  
      return res.status(201).json({ employ });
    }
      //ESQUECI MINHA SENHA
  async forgot(req, res){
    const { email } = req.body;

    try {
      const employ = await employModel.findOne({ email })

      if (!employ)
        return res.status(400).json({error: "Employ not found"});
    
    const pass = crypto.randomBytes(8).toString('hex');
    employ.pass = pass;
    await employ.save();

    mailer.sendMail({
      to: email,
      from: "contasimples@pj.br",
      template: '../../resources/mail/auth/forgot_password',
      context: { pass }
    }, (err) => {
      if (err)
      return res.status(400).json({error: "Cannot send forgot password email"});
      console.log(err);
      return res.json();
    })
    } catch (error) {
      res.status(400).json({error: 'Error on forgot password'})
      console.log(error);
    }
  }

  //RESET PASSWORD
  async reset(req, res){
    const { email, newPass, reNewPass } = req.body;

    try {
      const employ = await Employ.findOne({ email })

        if (!employ)
          return res.status(400).json({error: "Employ not found"})

        if (newPass !== reNewPass)
          return res.status(400).json({error: "As senhas nao coincidem"})
      
      employ.pass = newPass;
      await employ.save();
      res.status(200).json({ msg:"Dados atualizados" });
    

    } catch (error) {
      res.status(400).json({error: 'Canot reset password'});
    }
  }
}
module.exports = new EmployController;