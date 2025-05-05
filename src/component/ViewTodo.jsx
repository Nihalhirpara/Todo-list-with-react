import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewTodo = () => {
  const [todos, setTodos] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/todos/${id}`)
      .then((res) => setTodos(res.data));
  }, [id]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">View Todo</h2>
      <p className="mb-2"><strong>ID:</strong> {todos.id}</p>
      <p><strong>Title:</strong> {todos.title}</p>
    </div>
  );
};

export default ViewTodo;
