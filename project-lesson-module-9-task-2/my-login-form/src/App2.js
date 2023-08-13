import React, { useState } from "react"
import StudentCard from "./components/studentCard"
import StudentForm from "./components/studentForm"

// Компонент приложения
function App2() {
    const [student, setStudent] = useState(JSON.parse(localStorage.getItem("student")) || null)
    const [isEditing, setIsEditing] = useState(false)

    // Обработчик сохранения данных студента
    function handleSave(data) {
        localStorage.setItem("student", JSON.stringify(data))
        setStudent(data)
        setIsEditing(false)
    }

    // Обработчик отмены редактирования
    function handleCancel() {
        setIsEditing(false)
    }

    return (
        <div>
            {student ? (
                <StudentCard student={student} onEdit={() => setIsEditing(true)} />
            ) : (
                <button onClick={() => setIsEditing(true)}>Добавить</button>
            )}
            {isEditing && (
                <StudentForm
                    initialData={student || { name: "", birthYear: "", link: "" }}
                    onSubmit={handleSave}
                    onCancel={handleCancel}
                />
            )}
        </div>
    )
}

export default App2
