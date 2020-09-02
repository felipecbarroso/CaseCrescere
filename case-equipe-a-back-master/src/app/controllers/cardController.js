const cardModel = require('../models/card');
const card = require('../models/card');

class cardController {
  // post - Criar Cartao
  async store(req, res) {
    const card = await cardModel.create(req.body);
    return res.status(201).json({ card });
  }
  // put - atualizar cartão
  async update(req, res) {
    const { id } = req.params;
    const {totalLimit} = req.body
    const card = await cardModel.findOne({id})
    const newLimit = totalLimit
    await cardModel.findOneAndUpdate(id, {totalLimit: newLimit}, {
      new: true,
    });
    return res.json({ totalLimit });
  }
  // GET - Listar todos os cartões
  async index(req, res) {
    const card = await cardModel.find();
    return res.json(card);
  }

  //Deletar um cartão
  async destroy(req, res) {
    const { id } = req.params;
    await cardModel.findByIdAndDelete(id);
    return res.status(200).json({ msg: 'Cartao deletado com sucesso' });
  }

  // Encontrar cartoes da empresa
  async getCardByAccountID(req, res) {
    const { _id: id } = req.params; // Puxa da URL o id da conta
    const findCard = await cardModel.find({ account_id: id });
    // if (findCard)
    //   return res.status(400).json({erro: "Usuario de cartao nao encontrado"})
    return res.status(200).json({ findCard }); // Quando for consultar pelo front é essa variavel que irá consumir
  }
  }


module.exports = new cardController();
