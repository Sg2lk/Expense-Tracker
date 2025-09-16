import React, { useEffect, useState } from "react";
import { getExpenses } from "../api/expenses"; // ajusta la ruta si hace falta

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  // Traer los datos al montar el componente
  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getExpenses();
      console.log(data)
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      {expenses.length === 0 ? (
        <p className="text-gray-300">No expenses found.</p>
      ) : (
        <table className="w-full bg-gray-800 text-gray-200 rounded-lg overflow-hidden shadow-md mt-12">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-2 px-4 text-center">ID</th>
              <th className="py-2 px-4 text-center">Title</th>
              <th className="py-2 px-4 text-center">Amount</th>
              <th className="py-2 px-4 text-center">Category</th>
              <th className="py-2 px-4 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b border-gray-600">
                <td className="py-2 px-4 text-center">{expense.id}</td>
                <td className="py-2 px-4 text-center">{expense.title}</td>
                <td className="py-2 px-4 text-center">{expense.amount}</td>
                <td className="py-2 px-4 text-center">{expense.category}</td>
                <td className="py-2 px-4 text-center">
                  {new Date(expense.date).toLocaleString('es-ES', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}