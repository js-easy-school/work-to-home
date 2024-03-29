import { useState, useEffect } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import api from '../../api'
import SelectField from './../common/form/selectField'

const RegisterForm = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
        profession: ''
    })
    const [professions, setProfession] = useState([])
    const [errors, setErrors] = useState({})

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data))
    }, [])

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: 'Электронная почта обязательна для заполнения'
            },
            isEmail: {
                message: 'Email введен некорректно'
            }
        },
        password: {
            isRequired: {
                message: 'Пароль обязателен для заполнения'
            },
            isCapitalSymbol: {
                message: 'Пароль должен содержать хотя бы одну заглавную букву'
            },
            isContainDigit: {
                message: 'Пароль должен содержать хотя бы одну цифру'
            },
            min: {
                message: 'Пароль должен состоять минимум из 8 символов',
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: 'Обязательно выберите вашу профессию'
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Электронная почта'
                name='email'
                onChange={handleChange}
                value={data.email}
                error={errors.email}
            />
            <TextField
                label='Пароль'
                type='password'
                name='password'
                onChange={handleChange}
                value={data.password}
                error={errors.password}
            />
            <SelectField
                label='Выбери свою профессию'
                defaultOption='Выберите...'
                options={professions}
                onChange={handleChange}
                value={data.profession}
                error={errors.profession}
            />
            <button
                className='btn btn-outline-secondary m-3 border-2'
                type='submit'
                disabled={!isValid}
            >
                Submit
            </button>
        </form>
    )
}

export default RegisterForm
