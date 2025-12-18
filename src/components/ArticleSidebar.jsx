import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { articles } from '../sections/OpEd' // Import the articles array

const ArticleSidebar = () => {
    // Get the first 5 articles for the "Recent Articles" section
    const recentArticles = articles.slice(0, 5)

    return (
        <div className="space-y-8">
            {/* Recent Articles Widget */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                        Recent Articles
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {recentArticles.map((article) => (
                        <Link
                            key={article.id}
                            to={`/op-ed/${article.id}`}
                            className="flex space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                        >
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-16 h-16 object-cover rounded-full flex-shrink-0"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-sm font-medium text-gray-800 hover:text-teal-600 line-clamp-2">
                                    {article.title}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    {article.date}
                                </p>
                            </div>
                        </Link>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}

export default ArticleSidebar
