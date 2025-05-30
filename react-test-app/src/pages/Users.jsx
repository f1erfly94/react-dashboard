import React, { useState } from 'react'
import { mockUsers } from '../data/mockData'

const Users = () => {
    const [users, setUsers] = useState(mockUsers)
    const [sortDirection, setSortDirection] = useState('asc')

    const handleSort = () => {
        const sortedUsers = [...users].sort((a, b) => {
            if (sortDirection === 'asc') {
                return a.name.localeCompare(b.name)
            } else {
                return b.name.localeCompare(a.name)
            }
        })
        setUsers(sortedUsers)
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    }

    return (
        <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Users</h2>

            <div className="hidden md:block bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 overflow-hidden">
                <table className="w-full table-responsive">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th
                            className="table-header"
                            onClick={handleSort}
                        >
                            Name {sortDirection === 'asc' ? '↑' : '↓'}
                        </th>
                        <th className="table-header">Email</th>
                        <th className="table-header">Role</th>
                        <th className="table-header">Status</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                {user.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                {user.role}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'Active'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {user.status}
                  </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden space-y-4">
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={handleSort}
                        className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                        Sort by Name {sortDirection === 'asc' ? '↑' : '↓'}
                    </button>
                </div>

                {users.map((user) => (
                    <div key={user.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-4">
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                user.status === 'Active'
                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                {user.status}
              </span>
                        </div>
                        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <p>📧 {user.email}</p>
                            <p>👤 {user.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users