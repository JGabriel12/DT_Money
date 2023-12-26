import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: string
}

export function Transactions(){
  const [transactions, setTransactions] = useState<Transaction[]>([])


  useEffect(() => {
    
    async function loadTransactions(){
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()

      setTransactions(data)
    }

    loadTransactions()
  }, [])

  return(
    <div>
      <Header />
      <Summary />
      <TransactionsContainer> 
        <SearchForm />
        
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              )
              })}                     
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}