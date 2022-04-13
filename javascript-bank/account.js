/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transaction = new Transaction('deposit', amount);
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var transactions = new Transaction('withdrawal', amount);
    this.transactions.push(transactions);
    return true;
  } else {
    return false;
  }
};
Account.prototype.getBalance = function () {
  var total = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      total += this.transactions[i].amount;
    }
    if (this.transactions[i].type === 'withdrawal') {
      total -= this.transactions[i].amount;
    }
  }
  if (this.transactions.length === 0) {
    return 0;
  } else {
    return total;
  }
};
