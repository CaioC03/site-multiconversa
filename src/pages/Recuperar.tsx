import '../App.css'
import { Card } from '../components/card'
import { Input } from '../components/input'
import { Button } from '../components/button'

function Recuperar() {
    return (
        <div className='flex flex-col items-center justify-between px-10 w-full h-screen p-6'>
            <img src="./src/images/logo.png" alt="Logo" className='w-22 h-10 mb-2' />

            <Card className='p-10 px-14 w-full mb-18 md:w-[420px]'>
                <h1 className='text-3xl font-semibold mb-10 text-center text-black'>Atualizar senha!</h1>
                <p className='text-sm font-semibold mb-2 text-center text-black'>Não se preocupe, nos informe o seu e-mail e enviaremos um link para você redefiní-la.</p>

                    <div className='mb-6 relative text-left'>
                        <Input
                            name='email'
                            label='Email'
                            type='text'
                            className='w-full pl-10 px-4 py-2 border rounded-lg'
                            placeholder='Digite seu email'
                        />

                    </div>

                    <Button as={"button"} type="submit" className='w-full'>
                        Enviar Link
                    </Button>

                <div className="mt-8 text-center">
                    <p className='text-black ml-2'>Precisa de ajuda?<a href="#" className="text-black hover:underline ml-2">Ajuda</a></p>
                </div>
            </Card>

            <div className="relative bottom-0 right-0 p-0 text-black">
                © 2023 Multiconversa
            </div>
        </div>
    )
}
export default Recuperar