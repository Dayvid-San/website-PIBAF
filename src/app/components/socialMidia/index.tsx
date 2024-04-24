import Link from 'next/link';
import Style from './styles.module.scss';
import Image from 'next/image';
import Icon from '../../../../public/next.svg';


const SocialMidia = () => {
    
    const socialMidiaLinks = {
        github: 'https://github.com/Dayvid-San',
        instagram: 'https://www.instagram.com/dayvid_jr_/',
        facebook: 'https://www.facebook.com/dayvid.sant/',
        linkedin: 'https://www.linkedin.com/in/dayvid-santana-jr/',
        email: 'maito:santana.dayvid@outlook.com',
    };   

    return (
        <div className={Style.containerSocialMidia}>
            <Link className={Style.socialMidia} href={socialMidiaLinks.instagram}>
                <Image
                    src={Icon}
                    className={Style.socialMidiaImage}
                    alt={''}
                />
            </Link>
        </div>
    );
};

export default SocialMidia;