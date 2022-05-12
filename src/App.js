import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { Incomeexpenses } from './components/Incomeexpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './ context/GlobalState';

function App() {
  return (
    <>
      <GlobalProvider>
        <Header/>
        <div className='container'>
          <Balance/>
          <Incomeexpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>

      </GlobalProvider>
    </>
  );
}

export default App;
