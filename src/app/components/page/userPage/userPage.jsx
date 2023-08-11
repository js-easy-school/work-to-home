// 1. Импорт необходимых модулей из пакетов
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import api from "../../../api"
import { useHistory } from "react-router-dom"
import QualitiesList from "../../ui/qualities/qualitiesList"

// 2. Определение функционального компонента UserPage с параметром userId, который будет использоваться при извлечении данных о пользователе
const UserPage = ({ userId }) => {
    // 3. Инициализация константы history с помощью хука useHistory, который предоставляет методы для манипулирования историей браузера
    const history = useHistory()
    // 4. Инициализация состояния пользователя user и функции setUser с помощью хука useState. При инициализации значение состояния считается неопределенным
    const [user, setUser] = useState()
    // 5. Вывод в консоль свойства users объекта api
    console.log(api.users)
    // 6. Описание сайд-эффекта с помощью хука useEffect. Он запустится при создании или обновлении компонента.
    // Если значение userId изменилось, компонент обновится и api.users.getById(userId) выполнится повторно.
    // data - это данные о пользователе. И функция setUser устанавливает состояние user.
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data))
    })
    // 7. Описание функции handleClick, которая вызывается при клике и использует метод history.push для изменения URL и перехода на страницу пользователей
    const handleClick = () => {
        history.push("/users")
    }

    // 8. Если user не определен, то вернуть загрузочное сообщение
    if (!user) return <span className='m-3'>Loading...</span>

    // 9. Вернуть разметку JSX, используя user, который мы получили из API фукнции и составляем HTML верстку на основе его свойств и методов
    return (
        <>
            {user && (
                <div className='m-3'>
                    <h1>{user.name}</h1>
                    <h2>Профессия: {user.profession.name}</h2>
                    <p>
                        <QualitiesList qualities={user.qualities} />
                    </p>
                    <p>completedMeetings: {user.completedMeetings}</p>
                    <h2>Rate: {user.rate}</h2>
                    <button
                        className='btn btn-dark'
                        onClick={() => {
                            handleClick()
                        }}
                    >
                        Все пользователи
                    </button>
                </div>
            )}
        </>
    )
}

// 10. Задание propTypes для компонента UserPage, требуется, чтобы userId был строкой
UserPage.propTypes = {
    userId: PropTypes.string.isRequired,
}

// 11. Экспортируем компонент по умолчанию
export default UserPage
