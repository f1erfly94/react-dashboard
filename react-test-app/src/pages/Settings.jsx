import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const Settings = () => {
    const [isDark, setIsDark] = useState(() => {
        try {
            const savedTheme = localStorage.getItem('theme')
            return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        } catch (error) {
            return false
        }
    })

    const [notifications, setNotifications] = useState(() => {
        try {
            const saved = localStorage.getItem('notifications')
            return saved !== null ? JSON.parse(saved) : true
        } catch (error) {
            return true
        }
    })

    const [username, setUsername] = useState(() => {
        try {
            const saved = localStorage.getItem('username')
            return saved || ''
        } catch (error) {
            return ''
        }
    })

    useEffect(() => {
        try {
            if (isDark) {
                document.documentElement.classList.add('dark')
                localStorage.setItem('theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', 'light')
            }
        } catch (error) {
            console.error('Error saving theme:', error)
        }
    }, [isDark])

    const handleThemeToggle = () => {
        setIsDark(!isDark)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            localStorage.setItem('notifications', JSON.stringify(notifications))
            localStorage.setItem('username', username)

            toast.success('Налаштування успішно збережені!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            })
        } catch (error) {
            console.error('Error saving settings:', error)
            toast.error('Помилка при збереженні налаштувань!')
        }
    }

    const handleUsernameChange = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Settings</h2>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 max-w-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {isDark ? 'Light Theme' : 'Dark Theme'}
              </span>
                            <button
                                type="button"
                                onClick={handleThemeToggle}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                                    isDark ? 'bg-blue-600' : 'bg-gray-200'
                                }`}
                            >
                <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isDark ? 'translate-x-6' : 'translate-x-1'
                    }`}
                />
                            </button>
                        </label>
                    </div>

                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={(e) => setNotifications(e.target.checked)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Enable Notifications
              </span>
                        </label>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                            placeholder="Enter your username"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                        Save Settings
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Settings