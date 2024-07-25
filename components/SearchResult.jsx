import React,{useState,useEffect} from 'react';
import {Tilt} from 'react-tilt';

const SearchResults = (props) => {

        const [user,setUser]=useState({})
        const query=props.searchQuery
    const getUsers = async () => {
        const response = await fetch(`https://api.github.com/users/${query}`);
        const FinalData = await response.json();
        setUser(FinalData);
    };
    useEffect(() => {
        getUsers();
    }, [query]);
    return (
        <div className="container">
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
    );
};

export default SearchResults;
