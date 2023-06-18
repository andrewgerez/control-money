import { ReactNode, createContext, useEffect, useState } from "react";

interface ITransaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  price: number,
  category: string,
  createdAt: string,
}

interface TransactionsContextType {
  transactions: ITransaction[];
}

interface ITransactionsProvider {
  children: ReactNode,
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({ children }: ITransactionsProvider) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const loadTransactions = async () => {
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}