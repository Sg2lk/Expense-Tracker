import React, { createContext, useContext, useState, useEffect } from 'react';
import { getExpenses } from '../api/expenses';

const ExpensesContext = createContext();

export const useExpenses = () => useContext(ExpensesContext);

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchExpenses = async () => {
    setLoading(true);
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <ExpensesContext.Provider value={{ expenses, fetchExpenses, loading }}>
      {children}
    </ExpensesContext.Provider>
  );
};
