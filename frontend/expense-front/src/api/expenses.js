import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // Cambia si tu FastAPI corre en otro puerto

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${API_URL}/expenses/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return [];
  }
};

export const addExpense = async (expense) => {
  try {
    const response = await axios.post(`${API_URL}/expenses/`, expense, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding expense:", error);
    throw error;
  }
};