import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '../../../components/ProductList';
import { products } from '../../../mocks/products';

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
  head: () => ({
    meta: [
      { title: 'Produtos - SyntaxWear'}
    ]
  }),
})

function RouteComponent() {
  return (
    <section className='container pt-40 pb-10 md:px-10 mb-10 text-black min-h-[80vh]'>
      <h1 className="text-3xl text-center mb-3">Lista de Produtos</h1>

      <h2 className='text-center mb-10 p-2'>Conforto excepcional para suas aventuras do dia-a-dia</h2>

      {
        products.length === 0 ? (
          <p className="text-center">Nenhum produto encontrado</p>
        ) : (

          <ProductList products={products} />
        )
      }
    </section>
  );
}
