import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import Logo from '../../assets/logo.png'

import { Button } from '../../components/Button'
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

export function Register() {
	const navigate = useNavigate()

	const schema = yup
		.object({
			name: yup.string().required('O nome é obrigatório'),
			email: yup
				.string()
				.email('Digite um email válido')
				.required('O email é obrigatório'),
			password: yup
				.string()
				.required('A senha é obrigatória')
				.min(8, 'A senha deve ter no mínimo 8 caracteres'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password')], 'As senhas devem ser iguais')
				.required('Confirme sua senha')
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
		try {
			const { status } = await api.post(
				'/users',
				{
					name: data.name,
					email: data.email,
					password: data.password
				},
				{
					validateStatus: () => true
				}
			)

			if (status === 200 || status === 201) {
				setTimeout(() => {
					navigate('/login')
				}, 2000)
				toast.success('Conta criada com sucesso!')
			} else if (status === 400) {
				toast.error('Email já cadastrado! Faça o login para continuar.')
			} else {
				throw new Error()
			}
			// eslint-disable-next-line no-unused-vars
		} catch (error) {
			toast.error('😢 Falha no sistema! Tente novamente.')
		}
	}

	return (
		<Container>
			<LeftContainer>
				<img src={Logo} alt="logo-devburger" />
			</LeftContainer>
			<RightContainer>
				<Title>Criar Conta</Title>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Nome</label>
						<Input
							type="text"
							{...register('name')}
							error={errors.name?.message}
						/>
						<p>{errors.name?.message}</p>
					</InputContainer>

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

					<InputContainer>
						{/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
						<label>Confirmar Senha</label>
						<Input
							type="password"
							{...register('confirmPassword')}
							error={errors.confirmPassword?.message}
						/>
						<p>{errors.confirmPassword?.message}</p>
					</InputContainer>
					<Button style={{ marginTop: 30 }} type="submit">
						Criar Conta
					</Button>
					<p>
						Já possui conta? <Link to="/login">Clique aqui.</Link>
					</p>
				</Form>
			</RightContainer>
		</Container>
	)
}
