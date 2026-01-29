import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '../../../mocks/products'
import { formatCurrency } from '../../../utils/format-currency'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { CEPForm } from '../../../components/CEPForm'

export const Route = createFileRoute('/_app/products/$productId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { addToCart } = useContext(CartContext);

  const { productId } = Route.useParams()

  const filteredProduct = products.find(product => product.id === Number(productId))

  if (!filteredProduct) {
    return (
      <section className='container text-black mb-10 pt-40 md:pt-50 pb-10 px-2 sm:px-4  md:px-10 min-h-[80vh] flex flex-col items-center justify-center'>
        <h1 className=' text-3xl font-semibold mb-4'>Porduto não encontrado</h1>
        <p className='mb-6'>O produto que você está procurando não existe ou foi removido</p>
        <Link to="/products" className='text-accent hover:text-accent-hover hover:underline'>Voltar para produtos</Link>
      </section>);
  }

  const originalPrice = filteredProduct?.price ?? 0;
  const discountPrice = originalPrice * 0.9;
  const inInstallmentsPrice = originalPrice / 6;


  return (

    <section className='container mb-10 pt-40 md:pt-50 pb-10 px-2 sm:px-4  md:px-10'>

      <nav className='text-black text-sm mb-15 ml-5'>
        <Link className='hover:underline' to="/">Home</Link> /
        <Link className='hover:underline' to="/products"> Produto</Link> /
        <Link className='hover:underline font-semibold' to="/"> {filteredProduct?.name}</Link>
      </nav>

      <div className="flex flex-col lg:flex-row justify-center gap-10 ">
        <img src={filteredProduct?.image} alt={filteredProduct?.name}
          className='max-w-125 bg-white rounded-2xl self-center lg:self-start' />

        <div className='text-black'>
          <h1 className='text-4xl font-bold mb-1'>{filteredProduct?.name}</h1>

          <p className="mb-2">Cor: {filteredProduct?.color}</p>

          <p className='line-through text-sm text-[#878787]'>{formatCurrency(originalPrice)}
          </p>

          <p className='text-3xl font-bold mb-2'>
            {formatCurrency(discountPrice)} no PIX
          </p>

          <p className="text-sm text-[#878787]"> Você economiza: <span className="font-semibold">10%</span></p>

          <p className='mb-2'>
            ou
            <span className='text-[#38373A] font-semibold'> 6x </span>
            de
            <span className='text-[#38373A] font-semibold'> {formatCurrency(inInstallmentsPrice)}</span>
          </p>

          <p className='max-w-125 mb-3'>
            {filteredProduct?.description}
          </p>

          <div className='mb-6'>
            <p className='text-sm'>Calcular o prazo de entrega</p>

            <CEPForm />
          </div>

          <button className='bg-black text-white p-5 rounded-md w-full cursor-pointer hover:bg-gray-800' onClick={() => addToCart(filteredProduct)}>Adicionar ao carrinho</button>

        </div>
      </div>




    </section>
  );
}
