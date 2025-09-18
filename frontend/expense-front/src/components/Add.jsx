import React, { useState } from "react";
import { addExpense } from "../api/expenses";
import { useExpenses } from "./CreateContext";
import Alert from "./Alert";

export default function Add() {
  const { fetchExpenses } = useExpenses();
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
      await addExpense({ title, amount: parseFloat(amount), category });

      setMessage({ type: "success", text: "Expense added successfully" });

      // Reset form
      setTitle("");
      setAmount("");
      setCategory("");

      fetchExpenses(); // Refresh context
    } catch (error) {
      setMessage({
        type: "error",
        text: "Error adding expense. Check your data or the connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start p-6 mt-12">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Add Expense</h2>

        {message && <Alert type={message.type} text={message.text} />}

        <form onSubmit={handleSubmit} className="space-y-4">
          {["Title", "Amount", "Category"].map((label) => (
            <div key={label}>
              <label className="block mb-1 text-sm font-medium">{label}</label>
              <input
                type={label === "Amount" ? "number" : "text"}
                step={label === "Amount" ? "0.01" : undefined}
                value={label === "Title" ? title : label === "Amount" ? amount : category}
                onChange={(e) =>
                  label === "Title"
                    ? setTitle(e.target.value)
                    : label === "Amount"
                    ? setAmount(e.target.value)
                    : setCategory(e.target.value)
                }
                required
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 font-semibold disabled:opacity-50"
          >
            {loading ? "Adding..." : "Add Expense"}
          </button>
        </form>
      </div>
    </div>
  );
}
