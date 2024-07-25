// import logo from './logo.svg';
/* import './Components/App.css';
import './Components/Header.css'; */
import React, { useEffect, useState } from 'react';

import UseEffectAPI from '../components/Index';
import Header from '../components/Header';


function App() {
  const [users, setUsers] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

    const [selectedUser, setSelectedUser] = useState(null);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setUsers(FinalData);
};

const handleSearch = (query) => {
  console.log(searchQuery);
  setSearchQuery(query);
};

useEffect(() => {
    getUsers();
}, []);

const handleSeeMore = (user) => {
    setSelectedUser(user);
};

const handleBack = () => {
    setSelectedUser(null);
};

  return (
    <div>
      <Header handleSearch={handleSearch} searchQuery={searchQuery}/>
     <UseEffectAPI  searchQuery={searchQuery} selectedUser={selectedUser} users={users} handleSeeMore={handleSeeMore} handleBack={handleBack}/>

    </div>
  );
}

export default App;