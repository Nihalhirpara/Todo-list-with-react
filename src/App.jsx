import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from "./component/AddTodo";
import EditTodo from "./component/EditTodo";
import ViewTodo from "./component/ViewTodo";
import ListTodo from "./component/ListTodo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListTodo />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/view/:id" element={<ViewTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
    </Router>
  );
};

export default App;
