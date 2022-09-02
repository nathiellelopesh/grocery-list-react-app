import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import List from "./List";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditID(null);
      setIsEditing(false);
    } else {
      list.push({ id: new Date().getTime().toString(), title: name });
    }
    setName("");
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <Card
      border="primary"
      style={{ width: "18rem" }}
      className="card-container"
    >
      <Card.Header>
        <h2>Grocery List</h2>
      </Card.Header>
      <div className="grocery-app">
        <form className="form-control" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="milk"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <Button
            type="submit"
            variant="outline-primary"
            className="btn submit-btn"
          >
            {isEditing ? "edit" : "submit"}
          </Button>{" "}
        </form>
        <List list={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearList}>
          clear items
        </button>
      </div>
    </Card>
  );
}

export default App;
