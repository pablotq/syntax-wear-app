import { createFileRoute, Link } from '@tanstack/react-router';
import { LoginForm } from '../../components/LoginForm';
import { Logo } from '../../components/Logo';
import GoogleIcon from '@/assets/images/google-icon.png';
import { Separator } from '../../components/Separator';

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='min-h-screen w-full flex justify-center items-center bg-[#F5F5F5] p-5 text-black'>
      <div className='w-112.5 bg-white rounded-2xl p-10 shadow-md'>
        <div className="flex flex-col">
          <Logo />

          <h2 className='font-bold text-[21px] mb-2'>Entrar</h2>

          <p>Escolha como você gostaria de fazer login</p>

          <button className='w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-3 hover:bg-gray-50 transition cursor-pointer'>
          <img src={GoogleIcon} alt="Google Icon" 
          className="w-5 h-5"/>
          <span className='text-sm font-medium'>Continuar com Google</span>
        </button>

        <Separator />

          <LoginForm />

          <p className='mt-3.5'>Ainda não possui conta? 
            <Link to="/sign-up" className='ml-1 text-[#5433EB] hover:underline '>Cadastre-se</Link>
          </p>
        </div>
      </div>
    </section>
  )
}
