import { useGlobalState } from "../context/GlobalContext"


function IncomeExpense() {

  const { transactions } = useGlobalState();

  const amount = transactions.map(transaction => transaction.amount);

  const income = amount.filter(amount => amount > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  
  const expense = amount.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0).toFixed(2) * -1;
  //Se agrega el "-1" en expense para transformar ese valor a positivo.

  return (
    <>
        <div className="flex justify-between my-2">
            <h4>Income</h4>
            <p>{income}</p>
        </div>
        <div className="flex justify-between my-2">
            <h4>Expense</h4>
            <p>{expense}</p>
        </div>
    </>
  )
}

export default IncomeExpense