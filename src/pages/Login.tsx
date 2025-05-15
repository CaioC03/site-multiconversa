import '../App.css'
import { Card } from '../components/card'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { PasswordInput } from '../components/passwordInput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { CarbonEmail } from '../assets/CarbonEmail'
import { CarbonPassword } from '../assets/CarbonPassword'
import { Link } from "react-router-dom";

interface IInitialValues {
  email: string;
  password: string;
}

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email é um campo obrigatório"),
    password: yup.string().min(8, "A Senha deve conter mais de 8 caracteres").required("Senha é um campo obrigatório")
  });

  const initialValues: IInitialValues = {
    email: '',
    password: '',
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
        <h1 className='text-3xl font-semibold mb-10 text-center text-primary'>Bem vindo de volta!</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className='mb-6 relative text-left'>
            <Input
              name='email'
              label='Email'
              type='text'
              className='w-full pl-10 px-4 py-2 border rounded-lg'
              placeholder='Digite seu email'
              onChange={formik.handleChange}
              value={formik.values.email}              
              leftIcon= {<CarbonEmail/>}
            />
            <div className='text-red'>{formik.errors.email}</div>
          </div>

          <div className='justify-between text-start mb-8'>
            <PasswordInput
              name='password'
              label='Senha'
              leftIcon={<CarbonPassword />}
              placeholder="Digite sua senha"
              inputProps={{
                onChange: formik.handleChange
              }}
              value={formik.values.password}
              forgotPassword
            />
            <div className='text-red'>{formik.errors.password}</div>
          </div>

          <Button as={"button"} type="submit" className='w-full'>
            Entrar
          </Button>
        </form>

        <div className="mt-8 text-center">
          <p className='text-black'>É novo aqui?
            <Link to="/cadastro" className="text-primary hover:underline ml-2">Entre em contato</Link></p>
        </div>
      </Card>

      <div className="relative bottom-0 right-0 p-0 text-black">
        © 2023 Multiconversa
      </div>
    </div>
  )
}
export default Login