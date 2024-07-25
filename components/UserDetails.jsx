import React,{useState,useEffect} from 'react';
import {Tilt} from 'react-tilt';

import  "/src/usercard.css";
const UserDetails = ({ user, onBack }) => {
    const [current, setCurrent] = useState([]);
    const getUsers = async () => {
        const response = await fetch(user.url);
        const FinalData = await response.json();
        setCurrent(FinalData);
        console.log(FinalData);
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
       /*  <div className="user-details">
            <button onClick={onBack}>Back</button>
            <div className="detail-card">
                <img src={user.avatar_url} alt={user.login} />
                <h2>{user.login}</h2>
                <p>ID: {user.id}</p>
                <p>Type: {user.type}</p>
                <a href={user.html_url}>View GitHub Profile</a>
            </div>
        </div> */
        <>
                               
                                <article class="profile ">

                                <div className='flex'>

                                    <div className='partone'>
                                    <button className='back-btn' onClick={onBack}><i class="fa-solid fa-arrow-left"></i></button>

                    <div class="profile-image">

                        <img  src={current.avatar_url}/>
                    </div>
                    <h2 className="profile-username"><span className=''>Name:</span>{current.name}</h2>
                    <h3 className="profile-user-handle"><span className='bold'>username:</span> {current.login}</h3>
                    <p className='bio'><span className='bold'>Bio:</span>{current.bio}.</p>

                    </div>
                    <div className='parttwo'>
                <div className='flex'>
                        <div className="follow">
                            <h1 className='big'>Followers</h1>
                            <h2 className='small'>{current.followers}</h2>
                        </div>
                        <div className="follow">
                            <h1 className='big'>Following</h1>
                            <h2 className='small'>{current.following}</h2>
                        </div>
                        </div>
                    <div className="profile-actions">
                        <a href={current.html_url} target="_blank" rel="noopener noreferrer">
                            <button className="btn btn--primary">Follow</button>
                            </a>
                            <a href={current.email} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn--icon">
                        <i class="fa-regular fa-envelope"></i>
                                                </button>
                                                </a>
                                                <a href={current.blog} target="_blank" rel="noopener noreferrer">
                        <button class="btn btn--icon">
                        <i class="fa-solid fa-rss"></i>
                                                </button></a>
                    </div>
                    <div class="profile-links">
                        <a href={current.twitter_username} class="link link--icon">
                        <i class="fa-brands fa-twitter"></i>                        </a>
                        <a href="#" class="link link--icon">
                        <i class="fa-brands fa-facebook"></i>                        </a>
                        <a href="#" class="link link--icon">
                        <i class="fa-brands fa-instagram"></i>                        </a>
                    </div>
                    </div>
                    </div>
                    </article>
                    
                                    </>
    )
}

export default UserDetails;
