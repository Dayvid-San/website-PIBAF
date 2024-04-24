import Image from 'next/image';
import Logo from '../../favicon.ico';
import Style from './styles.module.scss';


const MainSection = () => {
    const text = 'Guiados pela Fé, Inspirados pelo Amor a primeira igreja batista em Augusto Franco Cultivamos a Esperança e Construímos um Caminho de Transformação. Junte-se a Nós, onde a Fé Ganha Vida e o Amor Floresce';

    return (
        <div className={Style.container}>
            <Image
                src={Logo}
                className={Style.logoTipo}
                alt={'Foto na frente da igreja'}
            />
            <Image
                src={Logo}
                className={Style.logoTipo}
                alt={'Foto no projeto esperança'}
            />
            <p>
                {text}
            </p>
        </div>
    );
};

export default MainSection;