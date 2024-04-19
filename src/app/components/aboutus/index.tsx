import Styles from 'styles.module.scss';
import Link from 'next/link';


const AboutUs = () => {
    const text = '';

    return (
        <div className={Styles.container}>
            <p>
                {text}
            </p>
            <Link className={Styles.socialMidia} href={'https://www.instagram.com/pibafaracaju/'}>
                <button>Venha nos conhecer</button>
            </Link>
        </div>
    );
};

export default AboutUs;