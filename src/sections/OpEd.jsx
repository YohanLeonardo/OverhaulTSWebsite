import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { ChevronRight, Newspaper, Lightbulb, TrendingUp, Settings, Brain, ArrowRight, BarChart } from 'lucide-react'

// --- IMAGE IMPORTS ---
// Existing images
import eidrImage from '../assets/articleImages/eidr.jpeg'
import produkAsingImage from '../assets/articleImages/produk_asing.jpeg'
import pendidikanFormalImage from '../assets/articleImages/pendidikanformal.jpeg'
import bencanaPeradabanImage from '../assets/articleImages/bencana_peradaban.jpeg'
import transformasiPeradabanImage from '../assets/articleImages/transformasi_peradaban.jpg'
import digitalisasiLayananImage from '../assets/articleImages/digitalisasi_layanan.jpg'
import guruMuridImage from '../assets/articleImages/guru-murid_dan_pendidikan.jpg'
import cellular20Image from '../assets/articleImages/cellular-2.0.jpg'

// New images (added based on your request)
import whyIndonesiaImage from '../assets/articleImages/why_indonesia_companyjpg.jpg'
import enterpriseDigitalizationImage from '../assets/articleImages/Why-enterprise-digitalization.jpg'
import uncoveredPotentialImage from '../assets/articleImages/the-uncovered-potential.jpg'
import dataScienceImage from '../assets/articleImages/data-science.jpeg'
import digitalizeCompanyImage from '../assets/articleImages/digitalize-your-company.jpg'

export const articles = [
  {
    id: 1,
    title: 'e-IDR , Uang Digital Bank Indonesia?',
    excerpt:
      'Suryatin Setiawan, Konsultan Digitalisasi dan Komisaris TelkomTelstra. Judul diatas bukan dari Bank Indonesia (BI) tetapi dari angan-angan saya yang muncul setelah menyadari bahwa di tahun 2020 sudah ada 60 negara, atau 80% lebih bank sentral di dunia yang sudah mulai setuju, menyiapkan atau melakukan uang digital yang di terbitkan oleh bank sentral (CBDC).',
    tag: 'Op-Ed',
    icon: <Newspaper className="h-8 w-8 text-teal-600" />,
    image: eidrImage,
    link: 'https://bandungtalentsource.com/2021/12/17/e-idr-uang-digital-bank-indonesia/',
    content: `
<p>Suryatin Setiawan, Konsultan Digitalisasi dan Komisaris TelkomTelstra. Judul diatas bukan dari Bank Indonesia (BI) tetapi dari angan-angan saya yang muncul setelah menyadari bahwa di tahun 2020 sudah ada 60 negara, atau 80% lebih bank sentral di dunia yang sudah mulai setuju, menyiapkan atau melakukan uang digital yang di terbitkan oleh bank sentral (CBDC).</p>
<p>Langkah China sudah jauh masuk ke CBDC (Central Bank Digital Currency) menamakan DCEP (Digital Currency Electronic Payment) yang sudah mulai menyiapkan diri sejak 2014 yang super Bitcoin mulai mendapat perhatian di China. Pilot DCEP sudah diuji coba di beberapa kota dan anjungan pemerintah China bentuknya adalah pada saat Olimpiade Beijing 2022 e-yuan sudah dapat dipakai oleh para tamu dari seluruh dunia. China juga menyiapkan standar globalnya (disebut juga ISO 20022) supaya DCEP bisa diterima oleh negara lain. China punya ambisi e-yuan ini mengganti sebagian dominasi US Dollar AS yang mendunia saat ini. Ini adalah isu politik yang sangat serius dan rumit.</p>
`
  },
  {
    id: 2,
    title: 'Benci Produk Asing , Cinta Produk Lokal? (Sebuah renungan Hari Kebangkitan Nasional)',
    excerpt:
      'Suryatin Setiawan, Konsultan dan coach Digitalisasi, pelaku usaha. Slogan ini sudah digaungkan setiap rejim, dari Sukarno sampai Jokowi, sudah seumur Republik ini. Pada hari Kebangkitan Nasional 2021, tajuk rumit ini kembali di-curhat-kan oleh Menko Luhut Panjaitan...',
    tag: 'Opinion',
    icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
    image: produkAsingImage,
    link: 'https://bandungtalentsource.com/2021/12/17/benci-produk-asing-cinta-produk-lokal-sebuah-renungan-hari-kebangkitan-nasional/',
    content: `
<p>Suryatin Setiawan, Konsultan dan coach Digitalisasi, pelaku usaha. Slogan ini sudah digaungkan setiap rejim, dari Sukarno sampai Jokowi, sudah seumur Republik ini. Pada hari Kebangkitan Nasional 2021, tajuk rumit ini kembali di-curhat-kan oleh Menko Luhut Panjaitan...</p>
<p>Intinya, setelah puluhan tahun merdeka, produk dalam negeri masih belum jadi tuan rumah di negeri sendiri. Kenapa? Karena kualitasnya masih kalah bersaing dengan produk impor. Solusinya? Tentu saja, tingkatkan kualitas produk dalam negeri agar bisa bersaing.</p>
`
  },
  {
    id: 3,
    title: 'Pendidikan formal RI memasuki era ekonomi digital',
    excerpt:
      'Suryatin Setiawan, Penasehat Yayasan Unpar dan Anggota Yayasan SMA Loyola. Nadiem Makarim menjadi mendikbud baru. Apa yang akan dilakukan Nadiem? Dia menghadapi dua sisi yang mandek yaitu birokrasi di kementriannya dan Institusi Pendidikan yang juga sudah sangat baku pakemnya.',
    tag: 'Insight',
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    image: pendidikanFormalImage,
    link: 'https://bandungtalentsource.com/2021/12/17/pendidikan-formal-ri-memasuki-era-ekonomi-digital/',
    content: `
<p>Suryatin Setiawan, Penasehat Yayasan Unpar dan Anggota Yayasan SMA Loyola. Nadiem Makarim menjadi mendikbud baru. Apa yang akan dilakukan Nadiem? Dia menghadapi dua sisi yang mandek yaitu birokrasi di kementriannya dan Institusi Pendidikan yang juga sudah sangat baku pakemnya.</p>
<p>Tantangan besar bagi Nadiem adalah bagaimana mengubah sistem pendidikan yang kaku menjadi lebih fleksibel dan adaptif terhadap perkembangan zaman. Diperlukan terobosan-terobosan baru agar lulusan pendidikan formal di Indonesia siap menghadapi tantangan era ekonomi digital.</p>
`
  },
  {
    id: 4,
    title: 'Bencana Peradaban : Sosial Media Gratis',
    excerpt:
      'Suryatin Setiawan; Senior coach , digitalisasi organisasi dan bisnis. Tristan Haris : “Gratis adalah model bisnis yang paling mahal yang dibayar oleh kemanusiaan” Tristan Haris pernah bekerja sebagai ‘design ethicist’ di Google dan kemudian menjadi penyebar paham bahwa revolusi digital melalui social media yang semula terasa mengembangkan pikiran kini sudah ...',
    tag: 'Op-Ed',
    icon: <Settings className="h-8 w-8 text-emerald-600" />,
    image: bencanaPeradabanImage,
    link: 'https://bandungtalentsource.com/2021/12/17/bencana-peradaban-sosial-media-gratis/',
    content: `
<p>Suryatin Setiawan; Senior coach , digitalisasi organisasi dan bisnis. Tristan Haris : “Gratis adalah model bisnis yang paling mahal yang dibayar oleh kemanusiaan” Tristan Haris pernah bekerja sebagai ‘design ethicist’ di Google dan kemudian menjadi penyebar paham bahwa revolusi digital melalui social media yang semula terasa mengembangkan pikiran kini sudah ...</p>
<p>Sosial media gratis memang menawarkan banyak kemudahan, tetapi di baliknya ada harga yang harus dibayar, yaitu data pribadi kita. Data ini kemudian digunakan untuk berbagai kepentingan, mulai dari iklan hingga propaganda politik. Perlu kesadaran dari kita semua untuk lebih bijak dalam menggunakan sosial media.</p>
`
  },
  {
    id: 5,
    title: 'Transformasi Peradaban Digital Mulai 2020',
    excerpt:
      'Transformasi Peradaban Digital Mulai 2020. (KOMPAS, 18 Desember 2018) Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra. Tahun 2020 adalah batu-kilometer yang penting yang menjadi awal masuknya manusia dan peradabannya ke era peradaban dan ekonomi digital tahap lanjut.',
    tag: 'Opinion',
    icon: <Brain className="h-8 w-8 text-indigo-600" />,
    image: transformasiPeradabanImage,
    link: 'https://bandungtalentsource.com/2019/08/03/transformasi-peradaban-digital-mulai-2020/',
    content: `
<p>Transformasi Peradaban Digital Mulai 2020. (KOMPAS, 18 Desember 2018) Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra. Tahun 2020 adalah batu-kilometer yang penting yang menjadi awal masuknya manusia dan peradabannya ke era peradaban dan ekonomi digital tahap lanjut.</p>
<p>Pandemi COVID-19 yang melanda dunia di awal tahun 2020 menjadi katalisator percepatan transformasi digital. Semua sektor dipaksa untuk beradaptasi dengan teknologi digital, mulai dari pendidikan, pekerjaan, hingga perdagangan. Transformasi ini akan terus berlanjut dan membentuk peradaban baru di masa depan.</p>
`
  },
  {
    id: 6,
    title: 'Digitalisasi Layanan Pemerintah',
    excerpt:
      'Digitalisasi Layanan Pemerintahan (KOMPAS 25 April 2019) Suryatin Setiawan Senior Digital Consultant and Coach – Advisory board PCU PT Pegadaian. Ada kesepahaman yang membesarkan hati dari Debat Capres keempat Sabtu 30 Maret 2019 yang lalu. Kedua capres menyatakan akan menggunakan Teknologi Digital untuk menjalankan layanan pemerintahan RI.',
    tag: 'Op-Ed',
    icon: <Newspaper className="h-8 w-8 text-teal-600" />,
    image: digitalisasiLayananImage,
    link: 'https://bandungtalentsource.com/2019/08/01/digitalisasi-layanan-pemerintah/',
    content: `
<p>Digitalisasi Layanan Pemerintahan (KOMPAS 25 April 2019) Suryatin Setiawan Senior Digital Consultant and Coach – Advisory board PCU PT Pegadaian. Ada kesepahaman yang membesarkan hati dari Debat Capres keempat Sabtu 30 Maret 2019 yang lalu. Kedua capres menyatakan akan menggunakan Teknologi Digital untuk menjalankan layanan pemerintahan RI.</p>
<p>Digitalisasi layanan pemerintah adalah sebuah keniscayaan di era digital ini. Dengan digitalisasi, layanan pemerintah diharapkan menjadi lebih efisien, transparan, dan akuntabel. Namun, tantangan yang dihadapi juga tidak sedikit, mulai dari infrastruktur, sumber daya manusia, hingga keamanan siber.</p>
`
  },
  {
    id: 7,
    title: 'Guru, Murid, dan Pendidikan Era Digital RI',
    excerpt:
      'Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra. Salah satu hal paling positif dari majunya peradaban digital yang sudah jadi gaya hidup adalah soal penyebaran ilmu dan pengetahuan. Ketika era pra-internet ilmu dan pengetahuan sangat dibatasi di ruang2 kuliah, lab, perpustakaan dan buku pribadi.',
    tag: 'Insight',
    icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
    image: guruMuridImage,
    link: 'https://bandungtalentsource.com/2019/07/30/guru-murid-dan-pendidikan-era-digital-ri/',
    content: `
<p>Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra. Salah satu hal paling positif dari majunya peradaban digital yang sudah jadi gaya hidup adalah soal penyebaran ilmu dan pengetahuan. Ketika era pra-internet ilmu dan pengetahuan sangat dibatasi di ruang2 kuliah, lab, perpustakaan dan buku pribadi.</p>
<p>Di era digital, ilmu dan pengetahuan dapat diakses dengan mudah melalui internet. Ini menjadi tantangan sekaligus peluang bagi dunia pendidikan. Guru tidak lagi menjadi satu-satunya sumber ilmu, tetapi perannya bergeser menjadi fasilitator yang membantu siswa belajar secara mandiri.</p>
`
  },
  {
    id: 8,
    title: 'Cellular 2.O',
    excerpt:
      'Suryatin Setiawan - Bandung TalentSource (Saya tulis di 27 Feb 2015 dan menjadi realita pada 2018). Setelah 20 tahun industri selular beroperasi di Indonesia, sampailah industri ke tahap jenuh, mencari pertumbuhan top line 2 digit adalah tugas yg tak mudah, pertumbuhan jumlah pelanggan sudah praktis selesai.',
    tag: 'Opinion',
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    image: cellular20Image,
    link: 'https://bandungtalentsource.com/2019/02/22/cellular-2-o/',
    content: `
<p>Suryatin Setiawan - Bandung TalentSource (Saya tulis di 27 Feb 2015 dan menjadi realita pada 2018). Setelah 20 tahun industri selular beroperasi di Indonesia, sampailah industri ke tahap jenuh, mencari pertumbuhan top line 2 digit adalah tugas yg tak mudah, pertumbuhan jumlah pelanggan sudah praktis selesai.</p>
<p>Industri seluler harus berinovasi untuk tetap bisa bertahan. Tidak lagi cukup hanya mengandalkan layanan suara dan SMS. Layanan data menjadi kunci pertumbuhan di masa depan. Operator seluler harus mampu menyediakan layanan data yang berkualitas dengan harga yang terjangkau.</p>
`
  },
  // --- NEW ARTICLES START HERE ---
  {
    id: 9,
    title: 'Why Indonesia company can and should leapfrog in digitalization?',
    excerpt:
      'Let me start by sharing my observation on the attributes of Indonesia enterprises in general and this is mostly about the medium-large companies, state-owned, or private in Indonesia. In terms of the chance to adopt digital technologies, those Indonesia companies have the following advantages : they operate in...',
    tag: 'Strategy',
    icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
    image: whyIndonesiaImage,
    link: 'https://bandungtalentsource.com/2017/11/18/why-indonesia-company-can-and-should-leapfrog-in-digitalization/',
    content: `
<p>Let me start by sharing my observation on the attributes of Indonesia enterprises in general and this is mostly about the medium-large companies, state-owned, or private in Indonesia.</p>
<p>In terms of the chance to adopt digital technologies, those Indonesia companies have the following advantages : they operate in a growing market with high digital adoption rate among consumers. However, legacy systems and mindset often become the hurdles.</p>
<p>Leapfrogging is possible because they can bypass intermediate technologies and go straight to the latest digital solutions, provided there is strong leadership and a clear vision.</p>
`
  },
  {
    id: 10,
    title: 'Why enterprise digitalization matters ?',
    excerpt:
      'Established running companies these days at least facing two potential real challenges one is, competition including from product substitution, maybe completely un-expectable and coming out in totally different format, and two, is its opex basis If a company think that its products or services will never be replaceable, think deeper ...',
    tag: 'Business',
    icon: <Settings className="h-8 w-8 text-gray-600" />,
    image: enterpriseDigitalizationImage,
    link: 'https://bandungtalentsource.com/2017/11/12/why-enterprise-digitalization-matters/',
    content: `
<p>Established running companies these days at least facing two potential real challenges one is, competition including from product substitution, maybe completely un-expectable and coming out in totally different format, and two, is its opex basis.</p>
<p>If a company think that its products or services will never be replaceable, think deeper. Digitalization is not just about technology, but about survival and relevance in a rapidly changing business landscape. It matters because it affects efficiency, customer experience, and the ability to innovate.</p>
`
  },
  {
    id: 11,
    title: 'The uncovered potential of Indonesia companies',
    excerpt:
      'I find many companies in Indonesia, whether they are at the first tier or lower, have an incredible potential to grow and become a big regional player in this gigantic growing ASEAN market as we all can see. But it is very common to see that these potentially great companies ...',
    tag: 'Analysis',
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    image: uncoveredPotentialImage,
    link: 'https://bandungtalentsource.com/2017/11/11/the-uncovered-potential-of-indonesia-companies/',
    content: `
<p>I find many companies in Indonesia, whether they are at the first tier or lower, have an incredible potential to grow and become a big regional player in this gigantic growing ASEAN market as we all can see.</p>
<p>But it is very common to see that these potentially great companies are held back by traditional management styles and a lack of digital vision. Unlocking this potential requires a shift in mindset and a willingness to embrace new technologies and business models.</p>
`
  },
  {
    id: 12,
    title: 'Pengantar Data Science dan Aplikasinya bagi Pemula',
    excerpt:
      'Pengantar Data Science dan Aplikasinya bagi Pemula. Bagi mayoritas orang, terlebih lagi yang belum berkecimpung di dunia kerja, barangkali data dianggap tidak penting. Data bisa jadi dianggap berkonotasi dengan “tumpukan” angka-angka yang membosankan dan “meaningless”. Data dianggap menjadi urusan perusahaan atau pemerintah, sehingga merupakan hal yang “jauh” dari kehidupan sehari-hari ...',
    tag: 'Tech',
    icon: <BarChart className="h-8 w-8 text-blue-500" />,
    image: dataScienceImage,
    link: 'https://bandungtalentsource.com/2017/11/10/pengantar-data-science-dan-aplikasinya-bagi-pemula/',
    content: `
<p>Pengantar Data Science dan Aplikasinya bagi Pemula. Bagi mayoritas orang, terlebih lagi yang belum berkecimpung di dunia kerja, barangkali data dianggap tidak penting. Data bisa jadi dianggap berkonotasi dengan “tumpukan” angka-angka yang membosankan dan “meaningless”.</p>
<p>Data dianggap menjadi urusan perusahaan atau pemerintah, sehingga merupakan hal yang “jauh” dari kehidupan sehari-hari. Padahal, data science adalah kunci untuk memahami pola, memprediksi tren, dan membuat keputusan yang lebih baik, tidak hanya dalam bisnis tetapi juga dalam kehidupan sehari-hari.</p>
`
  },
  {
    id: 13,
    title: 'Digitalize your company, find your digital products',
    excerpt:
      "If you're a company in Indonesia facing digitalization challenges, not really sure how to deal with potential disruptions by the digitalization wave , my team and I are potentially the right partner to help you. Regardless of your business size , a private, public or State owned enterprise we will ...",
    tag: 'Service',
    icon: <Brain className="h-8 w-8 text-teal-500" />,
    image: digitalizeCompanyImage,
    link: 'https://bandungtalentsource.com/2017/11/10/digitalize-your-company-find-your-digital-products/',
    content: `
<p>If you're a company in Indonesia facing digitalization challenges, not really sure how to deal with potential disruptions by the digitalization wave, my team and I are potentially the right partner to help you.</p>
<p>Regardless of your business size, a private, public or State owned enterprise we will help you identify digital opportunities. Finding your digital products means looking at your existing assets and capabilities through a digital lens to create new value for your customers.</p>
`
  }
]

export const OpEd = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 6
  const totalPages = Math.ceil(articles.length / articlesPerPage)

  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
      window.scrollTo(0, 0)
    }
  }

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

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
            {currentArticles.map((article) => (
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
                    <Link to={`/op-ed/${article.id}`} className="block">
                      <Button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                        Read Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => paginate(currentPage - 1)}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>

                  {pageNumbers.map(number => (
                    <PaginationItem key={number}>
                      <PaginationLink
                        onClick={() => paginate(number)}
                        isActive={number === currentPage}
                        className="cursor-pointer"
                      >
                        {number}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() => paginate(currentPage + 1)}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default OpEd