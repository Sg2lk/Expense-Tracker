export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind Funciona! 🚀
        </h1>
        <p className="text-gray-700">
          Este es un ejemplo rápido para probar tu configuración.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Botón de prueba
        </button>
      </div>
    </div>
  )
}