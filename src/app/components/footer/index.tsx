import Style from './styles.module.scss';
import Image from 'next/image';
import Logo from '../../favicon.ico';


const Footer = () => {
  const year = 2024

  return (
    <div className={Style.container}>
      <footer>
        <Image
          src={Logo}
          className={Style.logoTipo}
          alt={'Foto na frente da igreja'}
        />
        © {year} PIBAF
        <Image
          src={Logo}
          className={Style.logoTipo}
          alt={'Foto no projeto esperança'}
        />
      </footer>
    </div>
  );
};


export default Footer;