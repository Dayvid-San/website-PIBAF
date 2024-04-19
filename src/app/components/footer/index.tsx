import Styles from './styles.module.scss';


const Footer = () => {
    const year = 2024
  
    return (
      <div className={Styles.container}>
        <footer>
          © {year} PIBAF
        </footer>
      </div>
    );
  };
  
  
  export default Footer;