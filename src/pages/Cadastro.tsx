import '../App.css'
import { Card } from '../components/card'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { PasswordInput } from '../components/passwordInput'
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';

interface IInitialValues {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

function Cadastro() {

    const schema = yup.object({
        name: yup.string()
            .required('Nome é obrigatório'),
        email: yup.string()
            .email("Email inválido")
            .required("Email é um campo obrigatório"),
        password: yup.string()
            .min(8, "A Senha deve conter mais de 8 caracteres")
            .required("Senha é um campo obrigatório"),
        passwordConfirm: yup.string()
            .required('Confirme sua senha')
            .oneOf([yup.ref('password')], 'As senhas precisam ser iguais'),
    });
    
    const initialValues: IInitialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    }

    function onSubmit(data: IInitialValues) {
        console.log(data)
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validationSchema: schema
    })
    
    return (
        <div className='flex flex-col items-center justify-between px-10 w-full h-screen p-6 '>
            <img src="./src/images/logo.png" alt="Logo" className='w-22 h-10 mb-2' />

            <Card className='p-10 px-6 w-full mb-18 md:w-[420px] '>
                <h1 className='text-3xl font-semibold mb-10 text-center text-primary'>Faça seu cadastro!</h1>

                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-6 relative text-left'>
                        <Input
                            name='name'
                            label='Nome'
                            type='text'
                            className='w-full pl-10 px-4 py-2 border rounded-lg'
                            placeholder='Digite seu nome'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        <div className='text-red'>{formik.errors.name}</div>
                    </div>
                    <div className='mb-6 relative text-left'>
                        <Input
                            name='email'
                            label='Email'
                            type='text'
                            className='w-full pl-10 px-4 py-2 border rounded-lg'
                            placeholder='Digite seu email'
                            onChange={formik.handleChange}
                            value={formik.values.email}    
                        />
                        <div className='text-red'>{formik.errors.email}</div>
                    </div>

                    <div className='justify-between text-start mb-8'>
                        <PasswordInput
                            name='password'
                            label='Crie sua senha'
                            placeholder="Digite sua senha"
                            inputProps={{
                                onChange: formik.handleChange
                            }}
                            value={formik.values.password}
                        />
                        <div className='text-red'>{formik.errors.password}</div>
                    </div>

                    <div className='justify-between text-start mb-8'>
                        <PasswordInput
                            name='passwordConfirm'
                            label='Confirme sua senha'
                            placeholder="Digite sua senha"
                            inputProps={{
                                onChange: formik.handleChange
                            }}
                            value={formik.values.passwordConfirm}
                        />
                        <div className='text-red'>{formik.errors.passwordConfirm}</div>
                    </div>

                    <Button as={"button"} type="submit" className='w-full'>
                        Cadastrar
                    </Button>
                </form>

                <div className="mt-8 text-center">
                    <p className='text-black'>Já possui conta?
                        <Link to="/" className="text-primary hover:underline ml-2">Acesse</Link></p>
                </div>
            </Card>

            <div className="relative bottom-0 right-0 p-0 text-black">
                © 2023 Multiconversa
            </div>
        </div>
    )
}
export default Cadastro