/*class Expense {
    constructor(name, amount) {
      this.name = name;
      this.amount = amount;
    }
  }
  
  class ExpenseList {
    constructor() {
      this.list = [];
    }
  
    addExpense(expense) {
      this.list.push(expense);
    }
  
    getTotal() {
      let total = 0;
      for (let i = 0; i < this.list.length; i++) {
        total += this.list[i].amount;
      }
      return total;
    }
  
    getHTML() {
      let html = '<ul>';
      for (let i = 0; i < this.list.length; i++) {
        html += `<li>${this.list[i].name}: R$${this.list[i].amount.toFixed(2)}</li>`;
      }
      html += '</ul>';
      return html;
    }
  }
  
  const expenses = new ExpenseList();
  expenses.addExpense(new Expense('Comida', 100));
  expenses.addExpense(new Expense('Transporte', 50));
  expenses.addExpense(new Expense('Lazer', 200));
  
  console.log(`Total: R$${expenses.getTotal().toFixed(2)}`);
  console.log(expenses.getHTML());

*/




