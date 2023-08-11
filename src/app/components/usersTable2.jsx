import React, { useState } from "react"

const users = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Джон Дориан",
        profession: "doctor",
        qualities: ["tedious", "uncertain", "strange"],
        completedMeetings: 36,
        rate: 2.5,
        bookmark: false,
        email: "johndorian@example.com",
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Кокс",
        profession: "doctor",
        qualities: ["buller", "handsome", "alcoholic"],
        completedMeetings: 15,
        rate: 2.5,
        bookmark: false,
        email: "drcox@example.com",
    },
    // ...
]

const UsersTable2 = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <input
                type='text'
                value={searchTerm}
                onChange={handleSearch}
                placeholder='Введите имя'
            />
            <table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable2
