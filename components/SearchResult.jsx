import React,{useState,useEffect} from 'react';
import {Tilt} from 'react-tilt';

const SearchResults = (props) => {

        const [user,setUser]=useState({})
        const [isUser,setIsUser]=useState(false)
        const query=props.searchQuery

        
        const getUsers = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${query}`);
                if (response.ok) {
                    const finalData = await response.json();
                    setUser(finalData);
                    setIsUser(true);  // Set to true if user data is successfully fetched
                } else {
                    setUser(null);
                    setIsUser(false);  // Set to false if user data is not found
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setUser(null);
                setIsUser(false);  // Set to false on network errors or other issues
            }
        };
    useEffect(() => {
        getUsers();
    }, [query]);
    
    
    return (
        {  isUser }?
           (<div className="container">
            <div className="card_item" key={user.id}>
                <div className="card_inner">
                    <img src={user.avatar_url} alt="" />
                    <div className="userName">{user.login}</div>
                    <div className="detail-box">
                        <a href={user.html_url} target='_blank'>
                            <div className="gitDetail">
                                <i className="fa-brands fa-github"> </i>View Profile
                            </div>
                        </a>
                    </div>
                    <button className="seeMore" onClick={() => props.handleSeeMore(user)}>See More</button>
                </div>
            </div>
        
    </div>
           )
           :
        (
            <h2>no data found</h2>

        )
        
    );
};

export default SearchResults;
