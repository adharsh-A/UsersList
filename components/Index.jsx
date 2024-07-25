import React, { useEffect, useState } from 'react';
import {Tilt} from 'react-tilt';
import UserDetails from '../components/UserDetails';
import SearchResults from './SearchResult';


const Index = (props) => {
/*     const [users, setUsers] = useState([]);
 *//*     const [selectedUser, setSelectedUser] = useState(null);
 */
   /*  const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const FinalData = await response.json();
        setUsers(FinalData);
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
 */
    return (
        <div className="container">
            {props.selectedUser ? (
                <UserDetails user={props.selectedUser} onBack={props.handleBack} />
            ) : props.searchQuery?(
                <SearchResults searchQuery={props.searchQuery} handleSeeMore={props.handleSeeMore} />
        ):
                (props.users.map((curElem) => {
                    return (
                        <div className="card_item" key={curElem.id} data-tilt>
                            <div className="card_inner" >
                                <img src={curElem.avatar_url} alt="" />
                                <div className="userName">{curElem.login}</div>
                                <div className="detail-box">
                                    <a href={curElem.html_url} target='_blank'>
                                        <div className="gitDetail">
                                            <i className="fa-brands fa-github"> </i>View Profile
                                        </div>
                                    </a>
                                </div>
                                <button className="seeMore" onClick={() => props.handleSeeMore(curElem)}>See More</button>
                            </div>
                        </div>
                       
                    );
                })
            

            )}
            
        </div>
    );
};

export default Index;
