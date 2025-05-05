import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/todos").then((res) => {
      console.log("API response:", res.data);
      setTodos(res.data);
    });
  }, []);

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
      window.alert("Are you sure you want to delete?");
    }).catch((error) => {
      console.error("Error deleting todo:", error);
      window.alert("Failed to delete todo.");
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <Link
        to="/add"
        className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Todo
      </Link>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-4 border rounded shadow flex justify-between items-center"
          >
            <span className="font-medium">{todo.title}</span>
            <div className="space-x-2">
              <Link
                to={`/view/${todo.id}`}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                View
              </Link>
              <Link
                to={`/edit/${todo.id}`}
                className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
