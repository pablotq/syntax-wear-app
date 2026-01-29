import Banner from '@/assets/images/banner.jpg';
import { Button } from '../Button';
import { Overlay } from '../Overlay';
import { useRouter } from '@tanstack/react-router';

export const Hero = () => {

    const router = useRouter();

    return (
        <div className="container">
            <section className='relative h-125 rounded-[20px] mb-10'>
                <img src={Banner} alt="homem sentado com os tênis da Syntaxwear"
                    className='w-full h-full object-cover rounded-[20px]' />
                
                <Overlay title="Krypton One" subtitle="Transforme qualquer passo em presença" className='bottom-0  justify-end  text-center px-6 md:px-12 lg:px-30 pb-32'>
                    <Button variant='secondary' size='sm'onClick={() => router.navigate({to: '/products'})}
                        >Ver modelos</Button>
                    <Button>Comprar</Button>
                </Overlay>

            </section>
        </div>
    );
}