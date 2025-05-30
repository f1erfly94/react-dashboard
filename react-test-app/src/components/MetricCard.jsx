import React from 'react'

const MetricCard = ({ title, value, change, trend }) => {
    return (
        <div className="metric-card hover-lift">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <p className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</p>
                    <p className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                </div>
                <div className={`text-sm font-medium ml-4 flex items-center ${
                    trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
          <span className="mr-1">
            {trend === 'up' ? '📈' : '📉'}
          </span>
                    {change}
                </div>
            </div>
        </div>
    )
}

export default MetricCard