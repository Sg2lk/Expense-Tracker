# 📊 Gestor de Gastos

Aplicación full-stack para gestionar y visualizar gastos personales.  
Desarrollada con **React (frontend)**, **FastAPI (backend)** y **SQLite (base de datos)**.

## 🚀 Características principales

- ✨ **Dashboard interactivo**: listado de todos los gastos registrados.  
- ➕ **Añadir gastos**: formulario con validación para crear nuevos registros.  
- 🔍 **Buscador dinámico**: filtra gastos en tiempo real desde el dashboard.  
- 📈 **Estadísticas visuales**: gráficos interactivos (categorías y gastos diarios) con **Recharts**.  
- 🗄 **API REST con FastAPI**: endpoints para crear y consultar gastos.  
- 💾 **Persistencia en SQLite**: almacenamiento local sencillo y ligero.  
- 🎨 **Interfaz moderna**: diseñada con Tailwind CSS para un estilo limpio y responsive.  

## 🛠️ Tecnologías utilizadas

### Frontend
- [React](https://react.dev/) – librería para construir interfaces de usuario.  
- [React Router](https://reactrouter.com/) – enrutamiento de páginas.  
- [Recharts](https://recharts.org/en-US/) – librería de gráficos.  
- [Tailwind CSS](https://tailwindcss.com/) – estilos rápidos y modernos.  

### Backend
- [FastAPI](https://fastapi.tiangolo.com/) – framework rápido y moderno para APIs en Python.  
- [SQLAlchemy](https://www.sqlalchemy.org/) – ORM para manejar la base de datos.  
- [SQLite](https://www.sqlite.org/) – base de datos ligera y portable.  

## ⚙️ Instalación y configuración

### Backend (FastAPI)
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/gestor-gastos.git
   cd gestor-gastos/backend
   ```
   
2. Crear entorno virtual e instalar dependencias:
   ```bash
   python -m venv venv
   source venv/bin/activate   # en Linux/Mac
   venv\Scripts\activate      # en Windows
   pip install -r requirements.txt
   ```

3. Iniciar el servidor:
   ```bash
   uvicorn main:app --reload
   El backend estará en: http://127.0.0.1:8000
   ```

### Front (React)
1. Ir a la carpeta del frontend:
   ```bash
   cd ../frontend
   ```
   
2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar la aplicación:
   ```bash
   npm run dev
   El frontend estará en: http://localhost:5173 (Vite por defecto).
   ```
   
## 📸 Capturas de Pantalla

### Dashboard
![Dashboard Screenshot](./Screenshots/dashboard.png)

### Añadir Gasto
![Add Expense Screenshot](./Screenshots/add.png)

### Estadísticas
![Stats Screenshot](./Screenshots/stats.png)


## Próximas mejoras
- ✏️ Edición y eliminación de gastos.
- 📅 Filtros avanzados por fecha y categoría.
- 👤 Autenticación de usuarios.
- ☁️ Migración a base de datos PostgreSQL para producción.

**💡 Si te gusta este proyecto, ¡no olvides dejar una ⭐ en el repo!**
