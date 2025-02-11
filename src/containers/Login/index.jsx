import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Logo from '../../assets/logo.png'

import { Button } from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import { api } from '../../services/api'

import {
	Container,
	LeftContainer,
	RightContainer,
	Title,
	Form,
	InputContainer,
	Input,
	Link
} from './styles'

export function Login() {
	const navigate = useNavigate()

	const { putUserData } = useUser()

	const schema = yup
		.object({
			email: yup
				.string()
				.email('Digite um email válido')
				.required('O email é obrigatório'),
			password: yup
				.string()
				.required('A senha é obrigatória')
				.min(8, 'A senha deve ter no mínimo 8 caracteres')
		})
		.required()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})
	const onSubmit = async (data) => {
		const { data: userData } = await toast.promise(
			api.post('/session', {
				email: data.email,
				password: data.password
			}),
			{
				pending: 'Verificando seus dados...',
				success: {
					render() {
						setTimeout(() => {
							if (userData?.admin) {
								navigate('/admin/pedidos')
							} else {
								navigate('/')
							}
						}, 2000)
						return 'Seja Bem-Vindo(a)!'
					}
				},
				error: 'Verifique seu email e/ou senha!'
			}
		)

		putUserData(userData)
	}

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devburger" />
			</LeftContainer>
			<RightContainer>
				<Title>
					Olá, seja Bem-Vindo(a) ao <span>Dev Burger!</span>
					<br />
					Acesse com seu <span>Login e Senha.</span>
				</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Email</label>
						<Input
							type="email"
							{...register('email')}
							error={errors.email?.message}
						/>
						<p>{errors.email?.message}</p>
					</InputContainer>

					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Senha</label>
						<Input
							type="password"
							{...register('password')}
							error={errors.password?.message}
						/>
						<p>{errors.password?.message}</p>
					</InputContainer>
					<Button style={{ marginTop: 30 }} type="submit">
						Entrar
					</Button>
					<p>
						Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
					</p>
				</Form>
			</RightContainer>
		</Container>
	)
}
