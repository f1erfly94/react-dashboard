import React from 'react'
import MetricCard from '../components/MetricCard'
import { mockMetrics, mockActivity } from '../data/mockData'

const Overview = () => {
    return (
        <div className="p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Overview</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {mockMetrics.map((metric, index) => (
                    <MetricCard key={index} {...metric} />
                ))}
            </div>

            <div className="mt-6 md:mt-8 metric-card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Recent Activity
                </h3>
                <div className="space-y-3">
                    {mockActivity.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                            <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{activity.text}</span>
                            <span className="text-xs md:text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap ml-2">{activity.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Overview