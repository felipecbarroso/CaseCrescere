const transactionModel = require('../models/transaction');
const {value} = require('../models/transaction');
const cardModel = require('../models/card');

class transactionController {
  // post - Criar Transação
  async store(req, res) {
    const {CardID} = req.body
    console.log(CardID);
      const card = await cardModel.findById(CardID);
    
      if (!card)
      return res.status(400).json({erro: "Cartao nao encontrado"})
      const balance = card.balance;
      console.log(balance);
     
      const newBalance = parseInt(balance) + parseInt(req.body.value);
      
      await cardModel.findOneAndUpdate(CardID, {balance: newBalance}, { new: true } );
      if (card.totalLimit < card.balance)
      return res.status(400).json({error: "Cartão sem limite"})
      const transaction = await transactionModel.create(req.body);
      return res.status(200).json({transaction});
  }
  // GET - Listar todas as transações
  async index(req, res) {
    const transactions = await transactionModel.find();
    return res.json(transactions);
  }
  // Listar transações de um cartao especifico
  async getTransactionsByCardId(req, res) {
    const { _id: id } = req.params;
    const CardTransaction = await transactionModel.find({ card_id: id });
    res.status(200).json({ CardTransaction });
}
 // GET - Cálculo para o gráfico - endpoint: /transactions
 async TransactionsCredit(req, res) {
  const janTransaction = await transactionModel.find({
    month: '1',
    operationId: 1,
  });
  const totalJan = janTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const fevTransaction = await transactionModel.find({
    month: '2',
    operationId: 1,
  });
  const totalFev = fevTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const marTransaction = await transactionModel.find({
    month: '3',
    operationId: 1,
  });
  const totalMar = marTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const abrTransaction = await transactionModel.find({
    month: '4',
    operationId: 1,
  });
  const totalAbr = abrTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const maiTransaction = await transactionModel.find({
    month: '5',
    operationId: 1,
  });
  const totalMai = maiTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const junTransaction = await transactionModel.find({
    month: '6',
    operationId: 1,
  });
  const totalJun = junTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const julTransaction = await transactionModel.find({
    month: '7',
    operationId: 1,
  });
  const totalJul = julTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const agoTransaction = await transactionModel.find({
    month: '8',
    operationId: 1,
  });
  const totalAgo = agoTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const setTransaction = await transactionModel.find({
    month: '9',
    operationId: 1,
  });
  const totalSet = setTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const outTransaction = await transactionModel.find({
    month: '10',
    operationId: 1,
  });
  const totalOut = outTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const novTransaction = await transactionModel.find({
    month: '11',
    operationId: 1,
  });
  const totalNov = novTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const dezTransaction = await transactionModel.find({
    month: '12',
    operationId: 1,
  });
  const totalDez = dezTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  Promise.all([
    totalJan,
    totalFev,
    totalMar,
    totalAbr,
    totalMai,
    totalJun,
    totalJul,
    totalAgo,
    totalSet,
    totalOut,
    totalNov,
    totalDez,
  ]).then((data) => {
    res.status(200).json({ data });
  });
}

// GET - Cálculo para o gráfico - endpoint: /transactions
async TransactionsDebit(req, res) {
  const janTransaction = await transactionModel.find({
    month: '1',
    operationId: 0,
  });
  const totalJan = janTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const fevTransaction = await transactionModel.find({
    month: '2',
    operationId: 0,
  });
  const totalFev = fevTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const marTransaction = await transactionModel.find({
    month: '3',
    operationId: 0,
  });
  const totalMar = marTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const abrTransaction = await transactionModel.find({
    month: '4',
    operationId: 0,
  });
  const totalAbr = abrTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const maiTransaction = await transactionModel.find({
    month: '5',
    operationId: 0,
  });
  const totalMai = maiTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const junTransaction = await transactionModel.find({
    month: '6',
    operationId: 0,
  });
  const totalJun = junTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const julTransaction = await transactionModel.find({
    month: '7',
    operationId: 0,
  });
  const totalJul = julTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const agoTransaction = await transactionModel.find({
    month: '8',
    operationId: 0,
  });
  const totalAgo = agoTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const setTransaction = await transactionModel.find({
    month: '9',
    operationId: 0,
  });
  const totalSet = setTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const outTransaction = await transactionModel.find({
    month: '10',
    operationId: 0,
  });
  const totalOut = outTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const novTransaction = await transactionModel.find({
    month: '11',
    operationId: 0,
  });
  const totalNov = novTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );
  const dezTransaction = await transactionModel.find({
    month: '12',
    operationId: 0,
  });
  const totalDez = dezTransaction.reduce(
    (previousValue, element) => previousValue + element.value,
    0
  );

  Promise.all([
    totalJan,
    totalFev,
    totalMar,
    totalAbr,
    totalMai,
    totalJun,
    totalJul,
    totalAgo,
    totalSet,
    totalOut,
    totalNov,
    totalDez,
  ]).then((data) => {
    res.status(200).json({ data });
  });
}
}
module.exports = new transactionController();
