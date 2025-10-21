import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronRight, Newspaper, Lightbulb, TrendingUp, Settings, Brain, ArrowRight } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'Fraud Detection in Digital Banking: Practical Perspectives',
    excerpt:
      'Reflections on combining rule-based approaches with unsupervised learning to detect anomalous transaction behaviors in mobile and internet banking.',
    tag: 'Op-Ed',
    icon: <Newspaper className="h-8 w-8 text-teal-600" />,
    image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=1200&q=80',
    link: 'https://bandungtalentsource.com/articles/'
  },
  {
    id: 2,
    title: 'Data-Driven Social Support in Education',
    excerpt:
      'During the pandemic, schools can leverage household data to segment needs and avoid misallocation of limited support budgets.',
    tag: 'Insight',
    icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    link: 'https://bandungtalentsource.com/articles/'
  },
  {
    id: 3,
    title: 'Growing Fee-Based Income in Cellular Retail Channels',
    excerpt:
      'How behavior analytics and customer profiling can inform effective programs to raise transaction volumes for telco top-up retailers.',
    tag: 'Opinion',
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    link: 'https://bandungtalentsource.com/articles/'
  },
  {
    id: 4,
    title: 'RPA Beyond Hype: Streamlining Real Workflows',
    excerpt:
      'An honest take on where business process improvement ends and automation begins — and how to avoid "automation theater".',
    tag: 'Op-Ed',
    icon: <Settings className="h-8 w-8 text-emerald-600" />,
    image: 'https://images.unsplash.com/photo-1555252586-d5a495c4f24b?auto=format&fit=crop&w=1200&q=80',
    link: 'https://bandungtalentsource.com/articles/'
  },
  {
    id: 5,
    title: 'Pragmatic AI: From Models to Measurable Outcomes',
    excerpt:
      'Building organizational muscles in analytics and AI—what capabilities matter and how to turn experiments into business impact.',
    tag: 'Insight',
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    link: 'https://bandungtalentsource.com/articles/'
  }
]

const OpEd = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-teal-600">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span>Op-Ed</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Op-Ed & Articles</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Opinions, insights, and research notes on digital transformation, automation, and data-driven decision making.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="relative">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">{article.icon}</div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">{article.tag}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900 mb-2">{article.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-gray-600 mb-4">{article.excerpt}</CardDescription>
                  <div className="mt-auto pt-4 border-t">
                    <a href={article.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                        Read on bandungtalentsource.com
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Have a topic you want us to cover?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-3xl mx-auto">We love sharing practical perspectives grounded in real projects across Indonesia.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3">Request an Article</Button>
            <a href="https://bandungtalentsource.com/articles/" target="_blank" rel="noopener noreferrer" className="block">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3">View All on Site</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OpEd


