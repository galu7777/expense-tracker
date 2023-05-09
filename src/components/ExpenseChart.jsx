import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../context/GlobalContext';

function ExpenseChart() {

  const { transactions } = useGlobalState();

  // const total = transactions.reduce((acc, transaction) => (acc += transaction.amount), 0);
  const totalIncome = transactions.filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense = transactions.filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensePorcentage = Math.round((totalExpense / totalIncome) * 100)

  const totalIncomePorcentage = 100 - totalExpensePorcentage;

  return (
    <div>
      <VictoryPie
        colorScale={['#e74c3c', '#2ecc71']}
        data={[
          { x: "Expense", y: `${totalExpensePorcentage} %` },
          { x: "Income", y: `${totalIncomePorcentage} %` }
        ]}
        animate={{
          duration: 200,
        }}
        labels={({datum}) => datum.y}
        labelComponent={<VictoryLabel 
          angle={45}
          style={{ fill: 'white' }}
        />}
      />
    </div>
  )
}

export default ExpenseChart