import React, { useState } from "react";
import { addExpense } from "../api/expenses";

export default function Add() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const data = await addExpense({
        title,
        amount: parseFloat(amount),
        category,
      });

      setMessage({ type: "success", text: "Gasto añadido correctamente" });

      // Reset form
      setTitle("");
      setAmount("");
      setCategory("");
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error al añadir gasto. Revisa los datos o la conexión.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-6 mt-12">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Expense</h2>

        {message && (
          <div
            className={`mb-4 p-2 rounded ${
              message.type === "success"
                ? "bg-green-600 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Amount</label>
            <input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 font-semibold disabled:opacity-50"
          >
            {loading ? "Añadiendo..." : "Añadir Gasto"}
          </button>
        </form>
      </div>
    </div>
  );
}
