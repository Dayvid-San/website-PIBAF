import Link from 'next/link';
import Style from './styles.module.scss';
import Image from 'next/image';
import Logo from '../../favicon.ico';
import Icon from '../../../../public/next.svg';


const Navbars = () => {

    const socialMidiaLinks = {
        github: 'https://github.com/Dayvid-San',
        instagram: 'https://www.instagram.com/dayvid_jr_/',
        facebook: 'https://www.facebook.com/dayvid.sant/',
        linkedin: 'https://www.linkedin.com/in/dayvid-santana-jr/',
        email: 'maito:santana.dayvid@outlook.com',
    };   


    return (
        <div className={Style.container}>
            <div className={Style.ContainerLogoTipo}>
                <Link href={'#'}>
                    <Image
                        src={Logo}
                        className={Style.logoTipo}
                        alt={''}
                    />
                </Link>
            </div>
            <div className={Style.navbars}>
                <Link className={Style.btn} href={'#home'}>
                    Ínicio
                </Link>
                <Link className={Style.btn} href={'#aboutus'}>
                    Sobre Nós
                </Link>
                <Link className={Style.btn} href={'#meet'}>
                    Nossas Reuniões
                </Link>
                <Link className={Style.btn} href={'#pibaf-online'}>
                    Culto Online
                </Link>
                <Link className={Style.btn} href={'#heppined'}>
                    Acontece na Pibaf
                </Link>
                <Link className={Style.btn} href={'#contribuir'}>
                    Contribuir
                </Link>
            </div>
            <div className={Style.containerSocialMidia}>
                <Link className={Style.socialMidia} href={socialMidiaLinks.instagram}>
                    <Image
                        src={Icon}
                        className={Style.socialMidiaImage}
                        alt={''}
                    />
                </Link>
            </div>
        </div >
    )
};


export default Navbars;