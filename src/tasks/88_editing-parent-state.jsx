import { useState } from "react";

export const EditParentState = () => {
  const initProds = [
    { id: id(), name: "product1", cost: 100, isEdit: false },
    { id: id(), name: "product2", cost: 200, isEdit: false },
    { id: id(), name: "product3", cost: 300, isEdit: false },
  ];

  function toggleMode(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.isEdit = !prod.isEdit;
        }

        return prod;
      }),
    );
  }

  function editProd(id, field, event) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod[field] = event.target.value;
        }

        return prod;
      }),
    );
  }

  const items = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        isEdit={prod.isEdit}
        toggleMode={toggleMode}
        editProd={editProd}
      />
    );
  });

  function Product({ id, name, cost, isEdit, toggleMode, editProd }) {
    return (
      <div>
        name:{" "}
        {isEdit ? (
          <input
            value={name}
            onChange={(event) => editProd(id, "name", event)}
          />
        ) : (
          <span>{name}</span>
        )}
        cost:{" "}
        {isEdit ? (
          <input
            value={cost}
            onChange={(event) => editProd(id, "cost", event)}
          />
        ) : (
          <span>{cost}</span>
        )}
        <button onClick={() => toggleMode(id)}>
          {isEdit ? "save" : "edit"}
        </button>
      </div>
    );
  }

  function Products() {
    const [prods, setProds] = useState(initProds);

    function toggleMode(id) {
      setProds(
        prods.map((prod) => {
          if (prod.id === id) {
            prod.isEdit = !prod.isEdit;
          }

          return prod;
        }),
      );
    }

    function editProd(id, field, event) {
      setProds(
        prods.map((prod) => {
          if (prod.id === id) {
            prod[field] = event.target.value;
          }

          return prod;
        }),
      );
    }

    const result = prods.map((prod) => {
      return (
        <Product
          key={prod.id}
          id={prod.id}
          name={prod.name}
          cost={prod.cost}
          isEdit={prod.isEdit}
          toggleMode={toggleMode}
          editProd={editProd}
        />
      );
    });

    return <div>{result}</div>;
  }
};
