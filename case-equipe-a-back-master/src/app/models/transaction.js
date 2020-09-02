const mongoose = require('../../config/db');

const transactionSchema = mongoose.Schema(
  {
    CardID: { // id do usuario cartão
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date: {
      type: String,
      required: false,
    }, // Recebe a data da transação
    month: {
      type: String,
      required: false,
    },
    value: {
      type: Number,
      required: true,
    }, // Sempre receberá um valor positivo, em caso de débito verificar como convertê-lo para negativo
    operationId: {
      type: Number,
      required: true,
    }, // Recebe 0 para débito e 1 para crédito
  },
  {
    timestamps: true,
  }
);

transactionSchema.pre('save', async function (next) {
  if (this.operationId === 0) {
    this.value *= -1;
    next();
  } // Quando for operação de débito já é salvo automaticamente no banco de dados o valor negativo
  const myDate = new Date();
  this.month = `${myDate.getMonth() + 1}`;
  this.date = `${myDate.getDate()}/${this.month}/${myDate.getFullYear()}`; 
});

const transaction = mongoose.model('transaction', transactionSchema);
module.exports = transaction;
