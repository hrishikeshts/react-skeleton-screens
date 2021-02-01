import React, { useState, useEffect } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            const data = await res.json();
            setProfile(data);
        }, 0);
    });

    return (
        <div className='my-3 user'>
            <h4>User Details</h4>
            {profile && (
                <div className='profile'>
                    <h5>{profile.username}</h5>
                    <p>{profile.email}</p>
                    <a href={profile.website}> {profile.website}</a>
                </div>
            )}

            {!profile && <SkeletonProfile />}
        </div>
    );
};

export default User;
