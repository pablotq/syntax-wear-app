import { useRegisterForm } from "./register-form.schema";

export const RegisterForm = () => {

    const { register, errors, isSubmitting } = useRegisterForm();

    return (
        <form className="text-black">

            <div>
                <label className="text-xs text-gray-text">E-mail*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                ${errors.email ? "border-error focus:ring-red-400" : "border-border focus:ring-accent"}`}
                type="email" {...register("email")} />

                {errors.email && <p className="text-xs text-error mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Senha*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                ${errors.password ? "border-error focus:ring-red-400" : "border-border focus:ring-accent"}`}
                type="password" {...register("password")} />

                {errors.password && <p className="text-xs text-error mt-1">{errors.password.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Confirmar Senha*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                ${errors.confirmPassword ? "border-error focus:ring-red-400" : "border-border focus:ring-accent"}`}
                type="password" {...register("confirmPassword")} />

                {errors.confirmPassword && <p className="text-xs text-error mt-1">{errors.confirmPassword.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Nome*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                ${errors.firstName ? "border-error focus:ring-red-400" : "border-border focus:ring-accent"}`}
                type="text" {...register("firstName")} />

                {errors.firstName && <p className="text-xs text-error mt-1">{errors.firstName.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Sobrenome*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                ${errors.lastName ? "border-error focus:ring-red-400" : "border-border focus:ring-accent"}`}
                type="text" {...register("lastName")} />

                {errors.lastName && <p className="text-xs text-error mt-1">{errors.lastName.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">CPF*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                ${errors.cpf ? "border-error focus:ring-red-400" : "border-border focus:ring-accent"}`}
                type="text" {...register("cpf")} />

                {errors.cpf && <p className="text-xs text-error mt-1">{errors.cpf.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Data de Nascimento</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                ${errors.dateBirth ? "border-error focus:ring-red-400" : "border-border focus:ring-accent"}`}
                type="date" {...register("dateBirth", { valueAsDate: true })} />

                {errors.dateBirth && <p className="text-xs text-error mt-1">{errors.dateBirth.message}</p>}
            </div>

            <div>
                <label className="text-xs text-gray-text">Celular*</label>
                <input className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2
                ${errors.cellphone ? "border-error focus:ring-red-400" : "border-border focus:ring-accent"}`}
                type="tel" {...register("cellphone")} />

                {errors.cellphone && <p className="text-xs text-error mt-1">{errors.cellphone.message}</p>}
            </div>

            <button disabled={isSubmitting}
            className="bg-accent text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-accent-hover disabled:opacity-50 w-full cursor-pointer mt-4">
                {isSubmitting ? "Enviando..." : "Registrar"}
            </button>
        </form>
    );
}