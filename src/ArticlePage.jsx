import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {
    ChevronRight,
    ArrowLeft,
    Facebook,
    Twitter,
    Linkedin,
    Mail,
    Download,
} from 'lucide-react'
import { articles } from './sections/OpEd'
import ArticleSidebar from './components/ArticleSidebar'
import { Card, CardContent } from '@/components/ui/card'

const ArticlePage = () => {
    const { articleId } = useParams()

    // Cari artikel berdasarkan ID
    const article = articles.find((a) => a.id === parseInt(articleId))

    // --- LOGIC VERCEL / SERVERLESS ---
    const getFullPdfUrl = (url) => {
        if (!url) return null
        if (url.startsWith('http') || url.startsWith('https')) {
            return url
        }
        return `${window.location.origin}${url}`
    }

    // Dapatkan URL final untuk PDF
    const finalPdfUrl = getFullPdfUrl(article?.pdfUrl)

    // --- FIX: DEFINISIKAN VARIABLE SHARE DI SINI ---
    // Pastikan window tersedia (aman untuk SSR/Next.js meski ini React Router biasa)
    const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
    const shareTitle = article ? article.title : 'Check this out!'

    // Jika artikel tidak ditemukan
    if (!article) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Article Not Found
                    </h1>
                    <p className="text-gray-600">
                        The article you are looking for does not exist.
                    </p>
                    <Link
                        to="/op-ed"
                        className="mt-4 inline-flex items-center text-teal-600 hover:text-teal-800"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Op-Ed & Articles
                    </Link>
                </div>
            </div>
        )
    }

    // Get related posts (excluding the current one)
    const relatedPosts = articles.filter((a) => a.id !== article.id).slice(0, 3)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-gray-100 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-teal-600">
                        Home
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link to="/op-ed" className="hover:text-teal-600">
                        Op-Ed & Articles
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="truncate max-w-[200px] md:max-w-md">
                        {article.title}
                    </span>
                </div>
            </div>

            {/* Article Content and Sidebar */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content Column */}
                        <div className="lg:col-span-2">
                            {/* Article Header */}
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                {article.title}
                            </h1>

                            <div className="flex items-center space-x-3 text-sm text-gray-500 mb-8">
                                <span className="font-semibold text-teal-600">
                                    {article.tag}
                                </span>
                                <span>•</span>
                                <span>By Suryatin Setiawan</span>
                                <span>•</span>
                                <span>{article.date}</span>
                            </div>

                            {/* --- PDF VIEWER LOGIC --- */}
                            {finalPdfUrl ? (
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-2 p-2 bg-gray-50 rounded border border-gray-100">
                                        <span className="text-sm text-gray-500 font-medium ml-2">
                                            Document Viewer
                                        </span>
                                        <a
                                            href={finalPdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-3 py-1.5 bg-teal-600 text-white text-sm font-medium rounded hover:bg-teal-700 transition-colors"
                                        >
                                            <Download className="h-4 w-4 mr-2" />
                                            Download PDF
                                        </a>
                                    </div>

                                    <div className="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-gray-100 relative">
                                        <iframe
                                            src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                                                finalPdfUrl
                                            )}&embedded=true`}
                                            title="PDF Viewer"
                                            className="w-full h-full border-0"
                                            allowFullScreen
                                        >
                                            <p className="p-4 text-center">
                                                Browser Anda tidak mendukung
                                                iframe.
                                                <a
                                                    href={finalPdfUrl}
                                                    className="text-teal-600 underline ml-1"
                                                >
                                                    Download PDF di sini
                                                </a>
                                            </p>
                                        </iframe>
                                    </div>
                                </div>
                            ) : (
                                /* Fallback: Jika TIDAK ada PDF, tampilkan Gambar */
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-auto object-cover rounded-lg mb-8 shadow-lg"
                                />
                            )}

                            {/* Article Body */}
                            <div className="prose max-w-none text-gray-700 leading-relaxed">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: article.content,
                                    }}
                                />
                            </div>

                            {/* Share Section */}
                            <div className="mt-12 pt-6 border-t border-gray-200">
                                <p className="text-lg font-semibold text-gray-700 mb-4">
                                    Share this post
                                </p>
                                <div className="flex space-x-3">
                                    {/* FACEBOOK */}
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                            shareUrl
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-teal-600 transition-colors"
                                        title="Share on Facebook"
                                    >
                                        <Facebook className="h-6 w-6" />
                                    </a>

                                    {/* TWITTER / X */}
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                            shareUrl
                                        )}&text=${encodeURIComponent(
                                            shareTitle
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-teal-600 transition-colors"
                                        title="Share on Twitter"
                                    >
                                        <Twitter className="h-6 w-6" />
                                    </a>

                                    {/* LINKEDIN */}
                                    <a
                                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                            shareUrl
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-teal-600 transition-colors"
                                        title="Share on LinkedIn"
                                    >
                                        <Linkedin className="h-6 w-6" />
                                    </a>

                                    {/* EMAIL */}
                                    <a
                                        href={`mailto:?subject=${encodeURIComponent(
                                            shareTitle
                                        )}&body=${encodeURIComponent(
                                            `Check out this article: ${shareUrl}`
                                        )}`}
                                        className="text-gray-500 hover:text-teal-600 transition-colors"
                                        title="Share via Email"
                                    >
                                        <Mail className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>

                            {/* Related Posts Section */}
                            <div className="mt-16 pt-6 border-t border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Related posts
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {relatedPosts.map((post) => (
                                        <Link
                                            key={post.id}
                                            to={`/op-ed/${post.id}`}
                                            className="block group"
                                            onClick={() =>
                                                window.scrollTo(0, 0)
                                            }
                                        >
                                            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
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
                                                        {post.date}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
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
