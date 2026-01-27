import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '../../../mocks/products'
import { formatCurrency } from '../../../utils/format-currency'

export const Route = createFileRoute('/_app/products/$productId')({
  component: RouteComponent,
})

function RouteComponent() {

  const { productId } = Route.useParams()

  const filteredProduct = products.find(product => product.id === Number(productId))

  const originalPrice = filteredProduct?.price ?? 0;
  const discountPrice = originalPrice * 0.9;

  const inInstallmentsPrice = originalPrice / 6;

  return (
    <section className='container mb-10 pt-40 md:pt-50 pb-10 px-10 md:px-10'>
      <nav className='text-black text-sm mb-15 ml-5'>
        <Link className='hover:underline' to="/">Home</Link> /
        <Link className='hover:underline' to="/products"> Produto</Link> /
        <Link className='hover:underline font-semibold' to="/"> {filteredProduct?.name}</Link>
      </nav>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        <img src={filteredProduct?.image} alt={filteredProduct?.name}
          className='max-w-125 bg-white rounded-2xl' />

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

            <form className='flex gap-3 '>
              <input type="text" placeholder='Insira seu CEP' 
              className='border border-[#C0C0C0] rounded-md p-3'/>
              <button className='bg-black text-white py-3 px-6 rounded-md cursor-pointer'>Calcular</button>
            </form>
          </div>

          <button className='bg-black text-white p-5 rounded-md w-full cursor-pointer hover:bg-gray-800'>Adicionar ao carrinho</button>

        </div>
      </div>



    </section>
  );
}
