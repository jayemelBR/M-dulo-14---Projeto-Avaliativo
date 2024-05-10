import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Aqui você pode implementar a lógica para buscar academias com base na consulta
    console.log('Pesquisando por:', query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o local..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
}

export default SearchBar;