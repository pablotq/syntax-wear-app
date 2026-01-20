export const SubscriptionForm = () => {
    return (
        <form className="flex flex-col min-w-86">
            <label htmlFor="newsletter"> Inscreva-se em nosso e-mail</label>
            <input type="email" id="newsletter" placeholder="email@email.com" className="rounded-[30px] bg-white text-black py-3 px-5" />
        </form>
    );
}