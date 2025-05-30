import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ isOpen, isMobile, onClose }) => {
    const location = useLocation()

    const navItems = [
        { path: '/overview', label: 'Overview', icon: '📊' },
        { path: '/users', label: 'Users', icon: '👥' },
        { path: '/settings', label: 'Settings', icon: '⚙️' }
    ]

    const handleNavClick = () => {
        if (isMobile && onClose) {
            onClose()
        }
    }

    return (
        <>
            <div className={`
        ${isMobile ? 'fixed' : 'relative'} 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isMobile ? 'z-50' : 'z-auto'}
        w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-full
        transition-transform duration-300 ease-in-out
        flex flex-col
      `}>
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h1>
                    {isMobile && (
                        <button
                            onClick={onClose}
                            className="p-1 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>

                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className={`sidebar-link ${
                                        location.pathname === item.path ? 'active' : ''
                                    }`}
                                >
                                    <span className="mr-3 text-lg">{item.icon}</span>
                                    <span className="font-medium">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                        Dashboard v1.0
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar