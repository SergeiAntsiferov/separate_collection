import React from 'react';
import { socialMedia } from '../../databases/socialMedia';
import SocialMediaBage from '../SocialMediaBage/SocialMediaBage';
import './footer.scss';



const Footer = () => {
    return (
        <footer className="footer">
            {socialMedia.map((item) => {
                return (
                    <SocialMediaBage
                    key = {item.name}
                    name={item.name}
                    link={item.link}
                    image={item.image}
                    />
                )
            })}
        </footer>
    );
};

export default Footer;
