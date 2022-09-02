import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const List = ({ list, editItem, removeItem }) => {
  return (
    <section>
      {list.map((item) => {
        const { id, title } = item;
        return (
          <article className="list-container" key={id}>
            <p className="list-item">{title}</p>
            <div className="list-icons">
              <button
                className="btn"
                type="button"
                onClick={() => editItem(id)}
              >
                <FiEdit />
              </button>
              <button
                className="btn"
                type="button"
                onClick={() => removeItem(id)}
              >
                <FiTrash2 />
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default List;
