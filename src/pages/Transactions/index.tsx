import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./style";
import { TransactionsContext } from "../../Contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/Formatter";


export function Transactions(){

  const { transactions } = useContext(TransactionsContext)

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
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
              })}                     
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}