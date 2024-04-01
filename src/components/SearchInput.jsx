function SearchInput({ searchTerm, setSearchTerm }) {
    return (
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search recipes"
      />
    );
  }
  
  export default SearchInput;
  