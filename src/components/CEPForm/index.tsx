import { useState } from 'react';
import { useCEPForm } from './cep-form.schema';
import type { Address } from '../../interfaces/address';
import { formatCurrency } from '../../utils/format-currency';

const SHIPPING_BY_REGION: Record<string, number> = {
    "Norte": 39.90,
    "Nordeste": 29.90,
    "Centro-Oeste": 24.90,
    "Sudeste": 14.90,
    "Sul": 19.90,
}

export const CEPForm = () => {
    const { handleSubmit, register, errors, isSubmitting } = useCEPForm();
    const [addrdess, setAddress] = useState<Address | null>(null);
    const [addrdessError, setAddressError] = useState<string | null>(null);

    const onSubmit = async ({ cep }: { cep: string }) => {

        setAddress(null);
        setAddressError(null);

        try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if(data.erro){
            setAddressError("CEP não encontrado");
            return;
        }

        const shippingCost = SHIPPING_BY_REGION[data.regiao];

        if(!shippingCost){
            setAddressError("Região não suportada para entrega");
            return;
        }

        setAddress({...data, shippingCost: shippingCost});
    }catch{
        setAddressError("Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde");
    }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex gap-3 flex-col'>
            <div className='flex gap-3'>
                <input
                    type="text"
                    placeholder='Insira seu CEP'
                    className='border border-[#C0C0C0] rounded-md p-3 flex-1'
                    {...register('cep')}
                />
                <button type='submit' 
                className='bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 transition disabled:opacity-50'
                disabled={isSubmitting}>
                    {isSubmitting ? "Calculando..." : "Calcular"}
                </button>
            </div>

            {errors.cep && (
                <span className='text-red-500 text-sm'>{errors.cep.message}</span>
            )}

            {addrdessError && (
                <span className='text-red-500 text-sm'>{addrdessError}</span>
            )}

            {addrdess && (
                <div>
                    <p><strong>Região: </strong> {addrdess.regiao}</p>
                    <p><strong>Frete: </strong>{formatCurrency(addrdess.shippingCost)}</p>
                </div>
            )}

            
        </form>
    );
}