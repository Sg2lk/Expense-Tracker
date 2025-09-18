import React from "react";
import { useExpenses } from "./CreateContext";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

export default function Stats() {
    const { expenses, loading } = useExpenses();

    if (loading) return <p className="text-white p-6">Loading...</p>;

    const categoryData = Object.values(
        expenses.reduce((acc, expense) => {
            if (!acc[expense.category]) acc[expense.category] = { name: expense.category, value: 0 };
            acc[expense.category].value += expense.amount;
            return acc;
        }, {})
    );

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0", "#FF3366"];

    const dailyData = Object.values(
        expenses.reduce((acc, expense) => {
            const day = new Date(expense.date).toLocaleDateString("en-US");
            if (!acc[day]) acc[day] = { date: day, value: 0 };
            acc[day].value += expense.amount;
            return acc;
        }, {})
    ).map(item => ({ ...item, value: parseFloat(item.value.toFixed(2)) }));

    return (
        <div className="p-6 bg-gray-900 min-h-screen text-white space-y-12">
            {/* PieChart: Categorías */}
            <div className="bg-gray-800 p-4 rounded-xl shadow">
                <h3 className="text-white font-bold mb-4 text-center">Expenses by Category</h3>
                {categoryData.length === 0 ? (
                    <p className="text-gray-300 text-center">No expenses available.</p>
                ) : (
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                fill="#8884d8"
                                label
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                )}
            </div>

            {/* BarChart: Gastos por día */}
            <div className="bg-gray-800 p-4 rounded-xl shadow">
                <h3 className="text-white font-bold mb-4 text-center">Daily Expenses</h3>
                {dailyData.length === 0 ? (
                    <p className="text-gray-300 text-center">No expenses available</p>
                ) : (
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={dailyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#666" />
                            <XAxis dataKey="date" stroke="#fff" />
                            <YAxis stroke="#fff" />
                            <Tooltip />
                            <Bar dataKey="value" fill="#00C49F" />
                        </BarChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
}