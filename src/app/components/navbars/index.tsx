import Link from 'next/link';
import Style from './styles.module.scss';
import Image from 'next/image';
import Logo from '../../favicon.ico';
import Icon from '../../../../public/next.svg';
import SocialMidia from '../socialMidia';


const Navbars = () => {



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
            <SocialMidia />
        </div >
    )
};


export default Navbars;