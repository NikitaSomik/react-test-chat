import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://i.gifer.com/PL7r.gif" alt=""/>
            </div>
            <div className={classes.descriptionBlock}>
                Avatarka + description
            </div>
        </div>
    );
};

export default ProfileInfo;
