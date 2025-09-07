function SearchBox({ search }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={search} />
    </div>
  );
}

export default SearchBox;
