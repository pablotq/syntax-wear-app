import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const validaCEP = (value: string): boolean => {
    const onlyDigits = value.replace(/\D/g, "");
    
    return /^(\d{5}-?\d{3}|\d{8})$/.test(value) && onlyDigits.length === 8;
}

export const CEPFormSchema = z.object({
    cep: z
        .string()
        .nonempty('CEP é obrigatório')
        .max(9, 'CEP não pode ter mais que 9 caracteres')
        .refine((v) => validaCEP(v), "CEP inválido"),
});

export type CEPFormData = z.infer<typeof CEPFormSchema>;

export const useCEPForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm<CEPFormData>({
        defaultValues: {
            cep: '',
        },
        mode: 'onBlur',
        resolver: zodResolver(CEPFormSchema),
    });

    return { handleSubmit, register, errors, isSubmitting, setError, reset, };
};
