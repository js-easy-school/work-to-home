// Компонент карточки студента
function StudentCard({ student, onEdit }) {
    const age = new Date().getFullYear() - student.birthYear
    const yearsWord =
        age % 10 === 1 && age % 100 !== 11
            ? "год"
            : age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)
            ? "года"
            : "лет"

    return (
        <div>
            <p>Имя: {student.name}</p>
            <p>
                Год рождения: {student.birthYear} ({age} {yearsWord})
            </p>
            <p>Ссылка: {student.link}</p>
            <button onClick={onEdit}>Редактировать</button>
        </div>
    )
}

export default StudentCard
