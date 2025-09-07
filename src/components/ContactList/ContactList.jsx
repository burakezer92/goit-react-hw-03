import Contact from "../Contact/Contact";

function ContactList(props) {
  const listItems = props.personList.map((person) => (
    <Contact key={person.id} id={person.id} name={person.name} number={person.number} onDeleteItem={props.onDeleteItem} />
  ));
  return <ul>{listItems}</ul>;
}

export default ContactList;
