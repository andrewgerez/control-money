import * as S from './styles'
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from './SearchForm'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />

        <S.TransactionsTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}