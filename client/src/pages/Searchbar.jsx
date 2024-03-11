import { useState } from 'react';
import axios from 'axios';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`/search?q=${searchTerm}`);
    setResults(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {results.map((user) => (
        <div key={user._id}>{user.username}</div>
      ))}
    </div>
  );
}