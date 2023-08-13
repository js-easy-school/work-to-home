import { useState, useEffect } from "react"

// Компонент страницы создания/редактирования карточки студента
function StudentForm({ onSubmit, onCancel, initialData }) {
    const [name, setName] = useState(initialData.name || "")
    const [birthYear, setBirthYear] = useState(initialData.birthYear || "")
    const [link, setLink] = useState(initialData.link || "")
    const [errors, setErrors] = useState({})

    // Валидация полей ввода при каждом изменении
    useEffect(() => {
        const newErrors = {}
        if (!name) {
            newErrors.name = "Поле обязательно для заполнения"
        }
        if (!birthYear) {
            newErrors.birthYear = "Поле обязательно для заполнения"
        } else if (birthYear > new Date().getFullYear()) {
            newErrors.birthYear = "Год рождения не может быть больше текущего года"
        }
        if (!link) {
            newErrors.link = "Поле обязательно для заполнения"
        } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(link)) {
            newErrors.link = "Некорректный URL"
        }
        setErrors(newErrors)
    }, [name, birthYear, link])

    // Обработчик отправки формы
    function handleSubmit(event) {
        event.preventDefault()
        if (!Object.keys(errors).length) {
            onSubmit({ name, birthYear, link })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Имя</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="birthYear">Год рождения</label>
                <input
                    type="number"
                    id="birthYear"
                    value={birthYear}
                    onChange={(e) => setBirthYear(parseInt(e.target.value))}
                />
                {errors.birthYear && <p>{errors.birthYear}</p>}
            </div>
            <div>
                <label htmlFor="link">Ссылка</label>
                <input
                    type="text"
                    id="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
                {errors.link && <p>{errors.link}</p>}
            </div>
            <button type="submit">Сохранить</button>
            <button type="button" onClick={onCancel}>
                Отмена
            </button>
        </form>
    )
}

export default StudentForm
