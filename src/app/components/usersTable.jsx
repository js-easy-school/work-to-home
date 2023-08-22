import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import User from './user'
// import TableHeader from './tableHeader'
// import TableBody from './tableBody'
import BookMark from './common/bookmark'
import Qualities from './ui/qualities'

import Table from './common/table/table'

const UserTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete }) => {
    const columns = {
        name: {
            path: 'name',
            name: 'Имя',
            component: (user) => (
                <Link key={user._id} to={`/users/${user._id}`}>
                    {user.name}
                </Link>
            )
        },
        qualities: {
            name: 'Качества',
            component: (user) => <Qualities qualities={user.qualities} />
        },
        professions: { path: 'profession.name', name: 'Профессия' },
        completedMeetings: {
            path: 'completedMeetings',
            name: 'Встретился, раз'
        },
        rate: { path: 'rate', name: 'Оценка' },
        bookmark: {
            path: 'bookmark',
            name: 'Избранное',
            component: (user) => <BookMark status={user.bookmark} onClick={() => onToggleBookMark(user._id)} />
        },
        delete: {
            component: (user) => (
                <button onClick={() => onDelete(user._id)} className='btn btn-danger'>
                    delete
                </button>
            )
        }
    }
    return (
        // <table className="table">
        // <Table {...{ onSort, selectedSort, columns, data: users }}>
        //     <TableHeader {...{ onSort, selectedSort, columns }} />
        //     <TableBody {...{ columns, data: users }} />
        // </Table>
        <Table {...{ onSort, selectedSort, columns, data: users }} />
        //              <tbody>
        //     {users.map((user) => (
        //         <User key={user._id} {...rest} {...user} />
        //     ))}
        // </tbody>
        // </table>
    )
}

UserTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default UserTable
