import "./App.css";
import "./components/ContactForm/ContactForm";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import data from "./data";

function App() {
  const [personList, setpersonList] = useState(
    JSON.parse(localStorage.getItem("persons")) || data
  );
  const [personListFilter, setpersonListFilter] = useState(personList);

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    setpersonList((personList) => [
      ...personList,
      {
        id: `id-${Date.now()}`,
        name: values.name,
        number: values.number,
      },
    ]);
    actions.resetForm();
  };

  useEffect(() => {
    setpersonListFilter((personListFilter) => personList);
    localStorage.setItem("persons", JSON.stringify(personList));
  }, [personList]);

  function handleOnChange(e) {
    setpersonListFilter((personListFilter) =>
      personList.filter((person) =>
        person.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  function handleDeleteItem(id) {
    setpersonList((personList) =>
      personList.filter((person) =>
        person.id != id
      )
    );
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} initialValues={initialValues} />
      <SearchBox search={handleOnChange} />
      <ContactList personList={personListFilter} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
