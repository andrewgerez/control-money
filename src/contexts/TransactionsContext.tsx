import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

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
  fetchTransactions: (query?: string) => Promise<void>;
}

interface ITransactionsProvider {
  children: ReactNode,
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export const TransactionsProvider = ({ children }: ITransactionsProvider) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      }
    })

    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TransactionsContext.Provider value={{ 
      transactions,
      fetchTransactions
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}