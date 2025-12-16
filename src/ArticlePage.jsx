import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, ArrowLeft, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import { articles } from './sections/OpEd' // Import the articles array
import ArticleSidebar from './components/ArticleSidebar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const ArticlePage = () => {
  const { articleId } = useParams()
  const article = articles.find(a => a.id === parseInt(articleId))

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600">The article you are looking for does not exist.</p>
          <Link to="/op-ed" className="mt-4 inline-flex items-center text-teal-600 hover:text-teal-800">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Op-Ed & Articles
          </Link>
        </div>
      </div>
    )
  }

  // Get related posts (excluding the current one)
  const relatedPosts = articles.filter(a => a.id !== article.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/op-ed" className="hover:text-teal-600">Op-Ed & Articles</Link>
          <ChevronRight className="h-4 w-4" />
          <span>{article.title}</span>
        </div>
      </div>

      {/* Article Content and Sidebar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Article Header */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{article.title}</h1>
              
              <div className="flex items-center space-x-3 text-sm text-gray-500 mb-8">
                <span className="font-semibold text-teal-600">{article.tag}</span>
                <span>•</span>
                <span>By Suryatin Setiawan</span>
                <span>•</span>
                {/* Placeholder for date, since it's not in the data structure */}
                <span>December 17, 2021</span>
                <span>•</span>
                <a href="#comments" className="hover:text-teal-600">Leave a comment</a>
              </div>

              {/* Featured Image */}
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto object-cover rounded-lg mb-8 shadow-lg"
              />

              {/* Article Body */}
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              {/* Share Section */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <p className="text-lg font-semibold text-gray-700 mb-4">Share this post</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-teal-600 transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Related Posts Section */}
              <div className="mt-16 pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(post => (
                    <Link key={post.id} to={`/op-ed/${post.id}`} className="block group">
                      <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-32 object-cover"
                        />
                        <CardContent className="p-4">
                          <p className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 line-clamp-2">
                            {post.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {/* Placeholder for date */}
                            December 17, 2021
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Comment Section */}
              <div id="comments" className="mt-16 pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Leave a Reply</h2>
                <p className="text-gray-600 mb-6">Your email address will not be published. Required fields are marked *</p>
                
                <form className="space-y-4">
                  <Textarea placeholder="Comment *" rows={6} className="w-full" />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Input type="text" placeholder="Name *" />
                    <Input type="email" placeholder="Email *" />
                    <Input type="url" placeholder="Website" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="save-info" />
                    <Label htmlFor="save-info" className="text-sm font-normal text-gray-600">
                      Save my name, email, and website in this browser for the next time I comment.
                    </Label>
                  </div>
                  <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white">Post Comment</Button>
                </form>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1">
              <ArticleSidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArticlePage
