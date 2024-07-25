import React, { useState } from 'react';

export default function Header(props) {
    const [inputValue, setInputValue] = useState('');
    

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearchClick = () => {
        props.handleSearch(inputValue);
        return
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchClick();
        }
    };
    const reset=()=>{
        setInputValue()
        handleSearchClick();
    }

    return (
        <div>
            <nav className="navigation">
                <h1 onClick={reset}>Git Users</h1>
                <div className="search-container">
                                <input
                                    type="text"
                                    placeholder="Search GitHub Profile"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    className="search-input"
                                />
                                <button onClick={handleSearchClick} className="search-button">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                                                </button>
                    </div>
            </nav>
        </div>
    );
}
