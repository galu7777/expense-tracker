import { GlobalProvider } from "./context/GlobalContext";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transaction/TransactionForm";
import TransactionList from "./components/transaction/TransactionList";
import IncomeExpense from "./components/IncomeExpense";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/6">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-10">
            <div>
              <h1 className="text-4xl font-bold">Expense Tracker</h1>
              <Header />
              <IncomeExpense />
              <Balance />
              <TransactionForm />
            </div>
            <div className="w-full">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
