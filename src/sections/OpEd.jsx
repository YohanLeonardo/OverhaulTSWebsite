import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
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

import {
    ChevronRight,
    Newspaper,
    Lightbulb,
    TrendingUp,
    Settings,
    Brain,
    ArrowRight,
    BarChart,
} from 'lucide-react'

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
            'Suryatin Setiawan, Konsultan Digitalisasi dan Komisaris TelkomTelstra. Judul diatas bukan dari Bank Indonesia (BI) tetapi dari angan-angan saya yang muncul setelah menyadari bahwa di tahun 2020 sudah ada 60 negara, atau 80% lebih bank sentral di dunia yang sudah mulai setuju, menyiapkan atau melakukan uang digital yang di terbitkan oleh bank sentral (CBDC , ‘Central Bank Digital Currency’).',
        tag: 'Op-Ed',
        date: 'December 17, 2021',
        icon: <Newspaper className="h-8 w-8 text-teal-600" />,
        image: eidrImage,
        link: 'https://bandungtalentsource.com/2021/12/17/e-idr-uang-digital-bank-indonesia/',
        content: `
<p>Judul diatas bukan dari Bank Indonesia (BI) tetapi dari angan-angan saya yang muncul setelah menyadari bahwa di tahun 2020 sudah ada 60 negara, atau 80% lebih bank sentral di dunia yang sudah mulai setuju, menyiapkan atau melakukan uang digital yang di terbitkan oleh bank sentral (CBDC , ‘Central Bank Digital Currency’).</p>

<p>Momentum CBDC saat ini dipacu oleh China yang sudah mulai menyiapkan diri sejak 2014 ketika uang kripto Bitcoin mulai mendapat perhatian di China. Pada 2020 e-Yuan sudah diuji-coba di beberapa kota dan ambisi pemerintah China berikutnya adalah pada saat Olimpiade Beijing 2022 e-Yuan sudah dapat dipakai bahkan oleh para turis. China diduga ingin mematahkan dominansi global USD (US Dollar) sampai saat ini dan sebagai kekuatan ekonomi nomor dua, China punya potensi untuk itu. Ditengah ketegangan antara China dan AS yang memuncak saat ini ambisi e- Yuan itu sangat mungkin makin membesar.</p>

<p>Langkah China sudah juga resmi diikuti oleh bank sentral Jepang , dua kekuatan besar ekonomi sudah melangkah dan menjadi dorongan lebih besar seluruh ekonomi untuk menyiapkan diri, termasuk Bank Indonesia , karena CBDC kini hanya soal waktu saja.</p>

<p>Penyulut awal semua ini adalah Bitcoin yang ikhtiar nya muncul dari tokoh misterius ‘Satoshi Nakamoto’ sebagai sikap berontak atas kegagalan sistem keuangan dunia tahun 2008 maka lahirlah teknologi spektakular yang dikenal dengan nama Blockchain yang ternyata potensinya merambah luas diluar soal uang. Sensasi terakhir yang muncul dari Blockchain adalah NFT (Non Fungible Token, atau cara sertifikasi asset digital yang bersifat unik dan tidak bisa dipalsukan atau ditukarkan), berupa seni digital oleh artis Amerika Serikat (AS) Beeple yang laku dijual senilai 69 juta USD ! Seni atau aset digital lain, mudah sekali digandakan dan disebarkan dan karenanya versi aseli atau origin nya disertifikasi dengan NFT sehingga bisa menjadi sangat bernilai.</p>

<p>Bitcoin pada 2010 terbukti bisa dipakai sebagai alat bayar (ditukar dengan Pizza) namun demikian kini lebih bersifat asset spekulatif yang diperdagangan yang pada April 2021 mencapai nilai 63 ribu USD per Bitcoin. Karena sifatnya yang fluktuatif, cara menerbitkannya yang unik atau sangat enjiniring dan memakan energi listrik dan komputasi yang besar sekali serta ada batas maksimal jumlah Bitcoin yang bisa ada dimuka bumi ini maka Bitcoin tidak bisa menjadi alat bayar normal.</p>

<p>Penyulut kedua CBDC adalah Facebook yang memunculkan konsep uang digital dunia dengan nama Libra yang berbeda dengan Bitcoin, Libra dijamin oleh cadangan aset sehingga nilainya lebih stabil dan cara pengelolaannya tidak berdasar demokratisasi total melainkan diawasi oleh sebuah konsorsium dengan berbagai institusi swasta yang ternama sehingga lebih mendekati sifat uang normal. Tentu saja Libra membangkitkan kecemasan baru bagi semua bank sentral dan mendapat hadangan sangat keras dari otoritas. Lalu, Libra surut dan melunak serta lahir kembali dengan nama Diem.</p>

<p>Dengan latar belakang itu maka wajarlah jika BI juga sudah memulai menyiapkan diri untuk bisa melahirkan e-Rp atau e-IDR , mata uang digital resmi Indonesia yang diterbitkan dan dijamin serta dikendalikan oleh BI. Sesungguhnya daya tarik CBDC bagi bank sentral itu jelas sekali , diantaranya adalah bahwa CBDC lebih hemat karena tidak usah dicetak khusus agar sulit dipalsukan dan tidak bisa lusuh untuk diganti yang baru (tantangan nyata bagi Peruri), mudah sekali melacak semua transaksi (privasi data jadi isu tambahan) dan uang digital ini tetap inklusif di era ekonomi digital karena bisa dipakai oleh publik yang tidak punya rekening bank. Adapun masyarakat Indonesia khususnya dikota besar sudah dibiasakan melakukan pembayaran digital melalui berbagai platform digital swasta sehingga kemudahan uang digital bukan lagi jadi barang baru.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Rancang bangun e-IDR</h3>
<p>Desain e-IDR kemungkinan besar mengambil pendekatan tetap menjaga kestabilan ecosystem keuangan nasional. Membuat semua bank komersial tetap bisa beroperasi walaupun akan ada beberapa perubahan sebab dengan CBDC teoritis, kalau BI mau, setiap WNI dapat bertransaksi langsung dengan BI juga.</p>

<p>BI rasanya akan menjaga agar simpanan uang di bank komersial tetap normal dan tetap dengan suku bunga, tidak seperti uang kripto. e-IDR didapat publik dari menukarkan simpanan di rekening lalu e-IDR bisa ditransaksikan melalui aplikasi e-IDR yang dikeluarkan dan dikelola oleh BI langsung. Aplikasi pembayaran digital swasta tentu juga akan menerima transaksi e-IDR.</p>

<p>Era e-IDR yang inklusif tadi diwujudkan dengan token digital yang bisa transaksikan langsung dari orang ke orang melalui dompet digital di HP (Handphone) masing masing. Peredaran token ini biasanya hanya untuk transaksi jumlah terbatas saja karena transaksi peer-to-peer semacam ini tidak lewat aplikasi bank sentral ataupun swasta (walaupun registrasi awal mungkin diharuskan) sehingga tidak bisa ditelusuri dengan mudah. Akan rawan kalau jumlah transaksi token tidak dibatasi. Token digital juga tentu akan jadi sasaran pemalsuan dan benar harus dijaga agar ‘uang token digital palsu’ tidak terjadi. Pemalsuan uang digital dampaknya bisa jauh lebih spektakular dari uang kertas atau koin palsu karena masif dan lebih sulit dikenali secara awam. Peruri bisa punya peran lagi dalam soal ini.</p>

<p>E-IDR kelihatannya akan juga menggunakan sebagian dari teknologi Blockchain dan juga mengadopsi versi modifikasi dari Teknik DLT (Distributed Ledger Technology) yang dipakai uang kripto, seperti halnya Diem. Artinya, tidak hanya BI yang secara sendiri mengawasi dan menjamin semua transaksi e-IDR sah dan legal melainkan dilakukan bersama sama dengan berbagai lembaga yang diberi otoritas untuk ikut serta mengoperasikan simpul komputasi didalam jaringan DLT e-IDR. Para bank komersial misalnya bisa ikut menjadi ‘authorized DLT node operator’ sehingga bersama BI memberikan jaminan keamanan transaksi e-IDR. Cara ‘distributed governance’ ini lebih disukai publik di era CBDC karena lebih memberikan rasa yakin dan aman. Berbeda dengan kalau jaminan keamanan transaksi hanya dilakukan oleh BI semata.</p>

<p>Bisa diduga BI akan menjadi inisiator persiapan e-IDR dan melibatkan berbagai pihak termasuk praktisi teknologi agar bisa terwujud dengan aman dan baik. BI akan yang terdepan namun para ‘stakeholder’ sebaiknya bisa diajak mewujudkan e-IDR ini. Melihat derasnya dorongan global saya memperkirakan e-IDR mungkin bisa menjadi kenyataan pada 2025. Publik tak usah juga khawatir, sebab CBDC e-IDR dan juga semua CBDC tidak akan pernah menggantikan sepenuhnya uang normal yang ada karena banyak pertimbangan, termasuk misalnya pengguna uang yang masih dibawah umur, penyandang cacad, mereka yang tidak punya akses teknologi yang juga punya hak bertransaski sama dengan yang lain sebagai warga negara.</p>
`,
    },
    {
        id: 2,
        title: 'Benci Produk Asing , Cinta Produk Lokal? (Sebuah renungan Hari Kebangkitan Nasional)',
        excerpt:
            'Suryatin Setiawan, Konsultan Digitalisasi dan Komisaris TelkomTelstra. Slogan ini sudah digaungkan setiap rejim, dari Sukarno sampai Jokowi, sudah seumur Republik ini. Pada hari Kebangkitan Nasional 2021, tajuk rumit ini kembali di-curhat-kan oleh Menko Luhut Panjaitan...',
        tag: 'Op-Ed',
        date: 'December 17, 2021',
        icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
        image: produkAsingImage,
        link: 'https://bandungtalentsource.com/2021/12/17/benci-produk-asing-cinta-produk-lokal-sebuah-renungan-hari-kebangkitan-nasional/',
        content: `
<p>Suryatin Setiawan, Konsultan Digitalisasi dan Komisaris TelkomTelstra. Slogan ini sudah digaungkan setiap rejim, dari Sukarno sampai Jokowi, sudah seumur Republik ini. Pada hari Kebangkitan Nasional 2021, tajuk rumit ini kembali di-curhat-kan oleh Menko Luhut Panjaitan yang menyampaikan dari APBN 1300 triliun rupiah setidaknya ada 300 triliun yang bisa dibelanjakan membeli produk dan jasa lokal, dan itu belum dilakukan.</p>

<p>Nyata sudah, sampai kita merdeka hampir 76 tahun kita tak berhasil membuat para pengambil keputusan di birokrasi, lembaga hukum dan parlemen serta korporasi, khususnya korporasi besar kita untuk benar, jujur, dan sepenuh hati menjadi orang Indonesia yang berdaulat dan mau menjadi penjaga dan perawat hasil sendiri.</p>

<p>Persoalan besar bukan di lapisan masyarakat Indonesia kebanyakan tetapi pada kekosongan preferensi yang bersih, tegas dan murni kepada hasil lokal di hampir semua pemegang keputusan pemilik anggaran di birokrasi dan perusahaan lokal termasuk, mungkin terlebih lebih, BUMN.</p>

<p>Dengan kenyataan tiga perempat abad kita berhenti pada slogan pastilah ada soal fundamental yang harus diselesaikan yang nampaknya hanya mungkin dengan kesepakatan bangsa melalui kesepakatan ketiga kekuatan trias-politica, pemerintah, parlemen dan lembaga judisial.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Dampak sikap koruptif yang masif</h3>
<p>Logika dasarnya adalah, agar hasil lokal (produk dan jasa) bisa makin bermutu dan besar bersaing adalah memberi kesempatan dan pengawasan yang terus menerus tiada henti, rezim ke rezim, sampai betul menjadi produk yang kuat bersaing global.</p>

<p>Indonesia sebetulnya punya kesempatan ini di tahun 1980an namun tidak berhasil menyadari dan memanfaatkannya. Pada masa itu China belum sehebat ini, namun kebijakan masuknya semua produsen asing di China men-syaratkan pemaksaan yang konsisten agar produsen menanam modal besar, mempekerjakan tenaga lokal tidak hanya di tingkat buruh dan memenuhi target alih teknologi yang terukur kepada orang China, untuk membangun industri yang kuat.</p>

<p>Pada awal 80an saya baru mulai bekerja sebagai sarjana teknik telekomunikasi dan langsung bergabung dengan BUMN di Bandung. Kami direkrut saat itu karena ada proyek SBK (stasiun bumi kecil) 100 dari pemerintah yang dialokasikan (tunjuk langsung, bukan tender) kepada tiga perusahan lokal, dua BUMN dan satu swasta. Indonesia saat itu mengalami loncatan besar dalam industri telekomunikasi, ketiga perusahaan lokal itu dalam kurun waktu singkat terlihat bangkit, kuat dan percaya diri melalui pengalaman dan penugasan berharga itu, tidak ada keributan soal tunjuk langsung dan semua bisa berjalan baik tanpa cacat.</p>

<p>Dari ketiga perusahaan itu, karena masih bayi sudah dilepas, dan mulai diadu langsung di pasar, serta sebagai BUMN memiliki pemilik de-facto yang berbeda setiap selesai pemilu dan tidak ada kesepakatan nasional bahwa industri harus terus dijaga konsisten kemajuan nya sampai jadi kuat oleh setiap kabinet maka sekarang yang swasta sudah almarhum, satu BUMN pingsan dan satu lagi tetap kecil.</p>

<p>Kekosongan preferensi pada hasil lokal terjadi karena dampak sikap koruptif yang masif sampai saat ini, tunjuk langsung dilarang dan pasti akan diperiksa penegak hukum karena kita masih dibalut niat kotor bahwa pemberi proyek selalu meminta imbalan upeti. Kekuasaan selalu barter dengan ‘uang kembalian’, lihat saja semua kasus OTT korupsi itu, banyak calo dari pojok pojok eksekutif, legislatif dan yudikatif yang berdagang kekuasaan menentukan nasib orang/organisasi dan ini terus terjadi ditingkat operasional sehari hari. Moda tunjuk langsung / penugasan yang sangat perlu dalam membesarkan hasil industri lokal tidak bisa lagi dipakai dan persaingan dibuka lebar lebar dan pemain global bisa dengan bebas menggilas pelaku lokal yang masih terus hijau atau kerdil.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Produk lokal tidak bermutu (benar dan salah)</h3>
<p>Bagi para pemegang keputusan pemilik anggaran itu, alasan yang dipakai adalah bahwa hasil lokal tidak bermutu, kalah dengan hasil pemain global. Sikap ini mungkin sekali benar (tidak selalu) tetapi salah dalam konteks komitmen bersama sebagai bangsa untuk berdaulat dan mempertahankan eksistensi diri.</p>

<p>Bagi anda baby-boomers pasti masih ingat olok-olok zaman tahun 60-an tentang mobil Mazda ‘kotak sabun’ saking buruk dan sederhananya mobil Mazda itu. Tetapi perawatan Jepang atas industri nya membuat Mazda jadi pemain otomotif yang bergengsi sampai saat ini.</p>

<p>Ketika mobil Esemka tertatih tatih mulai muncul, tiba-tiba ada pemilik otoritas regulasi menghadang garang dengan alasan sahih yaitu harus lulus uji emisi yg ketat, sebuah sikap standar ganda yang menggelikan karena banyak sekali kendaraan umum yang berkeliaran di jalan raya sambil menyembur polutan yang dihisap para pengendara motor di sekitar nya dan itu tidak ditindak atau jadi masalah. Entahlah ada atau tidak lembaga pemerintah dan swasta besar yang konsisten membeli mobil Esemka agar industri mobil itu jadi besar, terus berganti model dan meningkatkan teknologi, estetika dan keandalan dan segera masuk ke EV (electric vehicle). Padahal peluang Indonesia masuk industri EV terbuka lebar karena berbeda dengan mobil bensin, EV jauh lebih sederhana permesinan dan komponen nya.</p>

<p>Kisah memilukan ini terjadi dimana mana, industri lokal perangkat telekomunikasi, pertahanan, elektronika, pesawat terbang dan sekarang malah menjalar ke industri rakyat dalam bidang ‘fashion’ karena kebijakan aneh yang ada sehingga beli batik atau sandang di pasar tanah abang lebih murah beli yang impor daripada hasil lokal. Bagaimana industri rakyat mau bersaing dengan pemain besar luar yang volume, teknologi, effisiensi dan dukungan pemerintahnya lebih besar sementara yang lokal harus berjuang mati matian dengan ‘hanya’ dukungan kredit dan slogan?</p>

<h3 class="text-lg font-bold mt-4 mb-2">Bangga diasosiasikan dengan asing dan kecenderungan hedonism</h3>
<p>Masalah ini memang ada dan nampak di lapisan elit kita. Memiliki branded goods adalah kebahagiaan, tentu saja ini hak pribadi, namun sebetulnya kualitas kita bisa juga diukur seperti Mark Zuckerberg yang kaya raya dan ternama itu, yang cukup berkaos oblong abu abu dan tidak menggunakan barang bermerek mewah dan dia tetap popular dan terhormat. Dalam hampir setiap kasus koruptor yg kena OTT muncul fakta rumah dan mobil mewah, tas dan arloji super mahal, tinggal di appartemen mewah di New York dll. Sikap bahagia hanya kalau memiliki merek asing ternama tentu tidak menguntungkan produk lokal untuk tumbuh dan lalu jadi industri besar.</p>

<p>Kalau referensi kita adalah berdaulat dan secara bersama, sebagai bangsa, kita bangkit, maka membeli sebuah sepeda impor yang ternama itu sebetulnya sama dengan belanja lebih dari sepuluh sepeda listrik pabrik lokal.</p>

<p>Senang diasosiasikan dengan asing tidak hanya soal beli branded goods tetapi juga sebagai elit lembaga/ korporasi senang kalau banyak vendor global yang ‘bersahabat’. Dan, banyak orang muda elit Indonesia yang senang berbicara dengan sisipan banyak kata dan ekpresi bahasa Inggris padahal bicara dengan sesama orang Indonesia.</p>

<p>Lalu, apakah kesepakatan berdaulat dan bangkit itu masih ada harapan? Mungkin bisa ditumbuhkan dari pernyataan Sri Mulyani bahwa untuk tidak masuk dalam jebakan kegagalan middle-income economy maka Indonesia bersama sama harus secepat mungkin sebelum 2030 meningkatkan produktifitas dan daya saing dan kualitas orang (cognitive, karakter dan softskill) melalui pendidikan yang sedang di-merdeka-kan oleh mas Nadiem. Ini nasib kita bersama!</p>

<p>Notifikasi masuk, HP saya memuat sebuah video saat pedagang kecil pasar Beringharjo Yogyakarta tegak dan khidmat berdiri menyayikan Indonesia Raya pada Harkitnas 2021 dan saya hanya bisa menangis haru sambil hampir punah harapan….</p>
`,
    },
    {
        id: 3,
        title: 'Pendidikan formal RI memasuki era ekonomi digital',
        excerpt:
            'Suryatin Setiawan, Penasehat Yayasan Unpar dan Anggota Yayasan SMA Loyola. Nadiem Makarim menjadi mendikbud baru. Apa yang akan dilakukan Nadiem? Dia menghadapi dua sisi yang mandek yaitu birokrasi di kementriannya dan Institusi Pendidikan yang juga sudah sangat baku pakemnya.',
        tag: 'Insight',
        date: 'December 17, 2021',
        icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
        image: pendidikanFormalImage,
        link: 'https://bandungtalentsource.com/2021/12/17/pendidikan-formal-ri-memasuki-era-ekonomi-digital/',
        content: `
<p>Suryatin Setiawan, Penasehat Yayasan Unpar dan Anggota Yayasan SMA Loyola.</p> 

<p>Nadiem Makarim menjadi mendikbud baru. Apa yang akan dilakukan Nadiem? Dia menghadapi dua sisi yang mandek yaitu birokrasi di kementriannya dan Institusi Pendidikan yang juga sudah sangat baku pakemnya .</p>

<p>Kemandekan birokrasi yang kronis perlu segera reorientasi. Biasanya pemimpin berupaya menemukan anggotanya yang punya motivasi dan kemampuan berubah dan mengandalkan perubahan cepat dimulai dari tim ini dan secara bergelombang ditularkan ke seluruh organisasi. Depdikbud perlu berubah dari pencengkeram dan penghambat kemajuan institusi pendidikan menjadi fasilitator dan pelayan sekolah dan universitas agar mereka bisa berubah maju pesat mengejar ketinggalan dan bahkan masuk ke era digital maju. Banyak sekali kepmen yang perlu dihapus atau diubah terutama yang mengatur terlalu dalam dan operasional dan membatasi pengembangan manajemen dan governance di sekolah dan universitas, menghilangkan banyak proses seremonial, misalnya dalam akreditasi dan menghilangkan beban administrasi laporan dan data yang memakan banyak waktu dan energi sekolah tetapi tidak banyak manfaatnya.</p>

<p>Depdikbud perlu mereformasi diri dengan merubah orientasi pekerjaan dari adminstratif dan regulator yang eksesif menjadi pembangkit motivasi maju, fasilitator dan pembantu pemenuhan kebutuhan sekolah. Dari juragan jadi pelayan. Birokrasi Depdikbud meninggalkan pekerjaan admin yang di era ini bisa dilakukan lebih manusiawi, cepat, transparan dan akurat melalui RPA (Robotic Process Automation) dan naik tingkat menangani pekerjaan analisis, perencanaan, antisipasi dan akurasi bantuan untuk kemajuan sekolah. Data science dan machile learning sudah perlu dibangun dalam kurun 5 tahun kedepan di Depdikbud.</p>

<p>Selama ini dogma yang sangat kental dan berbahaya bagi Indonesia ke depan adalah bahwa manajemen dan governance itu bukan ranah dunia pendidikan karena itu berarti membisniskan lembaga pendidikan yang selalu diagungkan sebagai kegiatan ilmu pengetahuan dan pengabdian. Yang sulit dimengerti adalah mengapa manajemen dan governance di-dikotomi-kan dengan pendidikan? Padahal tanpa manajemen dan governance yang kuat tidak ada organisasi apapun yang bisa membuat dampak luas , yang ada adalah ketertinggalan seperti dialami secara umum oleh institusi pendidikan kita sampai kini.</p>

<p>Tentu saja Nadiem tidak bisa menafikkan bahwa mutu dan kesiapan lembaga didik di Indonesia bervariasi dari yang sangat tertinggal , sudah lepas dari masalah dasar dan sudah mulai masuk ke tahap maju. Setiap sekolah itu, negeri maupun swasta perlu fasilitasi dan dukungan spesifik masing2. Akurasi dan kastemisasi semacam ini tidak mungkin dilakukan dengan moda birokrasi pendidikan seperti selama ini. Sekolah swasta juga punya peran penting dan dalam hal fasilitasi, bantuan dan dukungan maju, tidak semestinya diperlakukan berbeda dengan sekolah negeri.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Orang Indonesia yang berdaya saing</h3>

<p>Sudah banyak diulas dan diprediksi bahwa relevansi pendidikan formal, di seluruh dunia, terhadap gaya hidup dan format kehidupan di era digital maju semakin hilang. Format pendidikan digital maju itu sudah marak dimunculkan modelnya lewat MOOC (Massive Online Open Courses) yang membuka jalan lebar bagi siapa saja di muka bumi ini menuntut ilmu apapun, berakreditasi formal maupun tidak , bergelar atau nir-gelar. Model MOOC adalah model yang tidak ada dalam format pendidikan lama hasil revolusi industri mesin uap yang menyama-ratakan setiap murid dan bahkan mematikan pilihan bagi manusia sejak usia dini.</p>

<p>Model MOOC sangat rasional bagi generasi Alpha dan seterusnya nanti. Sebelum memutuskan mengambil kelas tertentu , calon siswa bisa melihat apa materi ajar, siapa pengajar, reputasi kelas dan pengajar dari review murid sebelumnya, apa yang akan didapat dan banyak insights lain dan barulah siswa memutuskan masuk atau tidak. Masuk sekolah/universitas atau kelas di Indonesia hari ini kita tidak bisa melihat menilai dalamnya secara rinci sebelum masuk.</p>

<p>Belum lagi model Khan Academy yang memberikan kemungkinan anak belajar sesuai dengan kemampuan dan kecepatan pemahaman masing2 . Tidak ada cap murid bodoh karena lambat mengerti. Murid dikelas diperlakukan unik sesuai talenta yang diberikan Tuhan kepada dirinya. Itulah esensi pedagogi yang sejatinya yang hanya bisa terwujud di era digital ini. Sebelumnya lebih sebagai ilmu pengetahuan. Di model ini guru bahkan bisa mengamati dari data nyata tentang peri laku murid selama proses belajar.</p>

<p>Kemampuan dan daya saing orang Indonesia yang dididik di dalam negeri yang menjadi tujuan pendidikan formal. Di lapangan kerja sejak 2020 ke depan talen yang dibutuhkan adalah yang punya karakter sosial yang tepat, ilmu dasar , logika, akal sehat-nya tajam, etos kerja yang kuat, analitis, kreatif, mampu koordinasi dan manajemen. Nadiem dengan pengalaman di Solve decacorn itu tentu paham ini.</p>

<p>Untuk menghasilkan manusia Indonesia seperti itu, pendidkan model kelas satu-arah dan murid dijejal hafalan harus segera hilang. Murid harus dibantu punya kebiasaan dan kemampuan belajar sendiri, haus dan mencari ilmu mandiri dan berdiskusi dengan teman dan guru. Kelas harus lebih merupakan diskusi kelompok dengan guru sebagai fasilitator. Setiap saat murid menyerap, menganalisis, berpendapat langsung dan berdiskusi dikelas. Guru , dosen dan profesor ibaratnya back to basic menjadi guru play group di kelasnya. Kelas dengan hanya mendengar guru dan mencatat tak boleh dilestarikan.</p>

<p>Orang Indonesia rata2 dikenal dengan orang yang kurang analitis, tidak bisa mengemukakan pendapat atau ide, diam adalah emas, artikulasi lemah apalagi dalam bahasa Inggris. Itulah yang dititipkan Jokowi ke Nadiem untuk diubah segera.</p>

<p>Jikalau Depdikbud bisa bertransformasi menjadi fasilitator , motivator dan pembantu maka beban beralih ke sekolah dan universitas untuk berubah secara cepat , mengadopsi manajemen dan governace maju ,merubah model kelas, memberi ruang gerak inisiatif lebih besar bagi anak didik untuk menjadi manusia sosial yang cerdik cerdas dan bisa bekerja harmoni dalam tim , menguasai ilmu dan pengetahuan mutakhir dan banyak ber eksperimen , beride, dan riset dalam seluruh perjalanan pendidikan formalnya sambil bergairah mencari ilmu sendiri sampai ke sekolah terkemuka di dunia melalui MOOC agar segera bisa berdiri tegak masuk dalam jajaran tenaga kerja dan professional yang bersaing global.</p>
`,
    },
    {
        id: 4,
        title: 'Bencana Peradaban : Sosial Media Gratis',
        excerpt:
            'Suryatin Setiawan; Senior coach , digitalisasi organisasi dan bisnis. Tristan Haris : “Gratis adalah model bisnis yang paling mahal yang dibayar oleh kemanusiaan” Tristan Haris pernah bekerja sebagai ‘design ethicist’ di Google dan kemudian menjadi penyebar paham bahwa revolusi digital melalui social media yang semula terasa mengembangkan pikiran kini sudah ...',
        tag: 'Op-Ed',
        date: 'December 17, 2021',
        icon: <Settings className="h-8 w-8 text-emerald-600" />,
        image: bencanaPeradabanImage,
        link: 'https://bandungtalentsource.com/2021/12/17/bencana-peradaban-sosial-media-gratis/',
        content: `
<p>Suryatin Setiawan; Senior coach , digitalisasi organisasi dan bisnis. </p>

<p>Tristan Haris : “Gratis adalah model bisnis yang paling mahal yang dibayar oleh kemanusiaan”</p>

<p>Tristan Haris pernah bekerja sebagai ‘design ethicist’ di Google dan kemudian menjadi penyebar paham bahwa revolusi digital melalui social media yang semula terasa mengembangkan pikiran kini sudah menjadi pembajak pikiran manusia. Mirip dengan Tristan , Jaron Lanier seorang pelopor Virtual Reality dari Silicon Valley menyuarakan lagu kotbah yang sama. Jaron berkampanye agar kita semua menghapus semua akun sosmed kita sekarang sebelum semua platform itu berubah menjadi berbayar.</p>

<p>Karena gratis , sosmed digunakan oleh milyaran manusia di dunia. Agar platform sosmed bisa terus tumbuh dan bahkan menghasilkan untung maka dibalik gratis itu mereka membuat semua upaya agar manusia kecanduan menikmati ‘like’, jumlah followers, re-share, re-tweet dan fitur2 yang kreatif, dan lalu membuat algoritma yang melengkapi kecanduan dengan degradasi mutu mental manusia seperti gagal konsentrasi, turunnya stabilitas mental dan standar kepatutan, isolasi sosial, polarisasi, gampang tersulut kemarahan, ekstrimisme, maraknya kebencian dan conspiracy theory ,akibat algoritma terus menyelam makin dalam di pikiran kita untuk terus menarik perhatian . Model bisnis gratis memerlukan itu. Dengan sangat cepat, kemanusiaan telah diturunkan derajatnya.</p>

<p>Sekarang sosmed menjadikan manusia sebagai sumber perahan seperti sapi di peternakan. Dunia harus segera berubah dari ekonomi yang memeras sumber manusia kembali menjadi yang memudakan dan memperkaya manusia. Tidak lagi mengkaitkan laba bisnis dengan tingkat atensi manusia pengguna sosmed. Menjadi perusahaan internet yang besar tetapi tidak merusak standard akhlak dan etika, seperti Amazon dan semua e-market place yang berjaya, Traveloka, Netflix , Grab, Gojek dan banyak lagi, karena inti model bisnis mereka bukan gratis.</p>

<p>Seharusnya Facebook, semua sosmed raksasa itu dan Google sejak awal diatur oleh otoritas untuk hanya menjadi freemium service . Pada awalnya gratis, tetapi setelah manfaat dirasakan pengguna , orang harus bayar atas jasa yang digunakannya. Sekarang sudah terlambat.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Sosmed, raksasa yang lepas kendali</h3>

<p>Tak perlu waktu lama, hanya dalam tempo belum genap satu setengah dekade, sosmed itu sudah menjadi raksasa dunia yang tak bisa dikendalikan lagi. Dampak erosi nilai standar kemanusiaan sudah dirasakan diseluruh dunia, dalam semua aspek kehidupan, merata disemua generasi dan menjadi senjata perusak yang menakutkan dalam kaitan perebutan pengaruh politik dan kekuasaan seperti yang kita alami baru baru ini.</p>

<p>Semua perusahaan internet raksasa itu makin menjadi berkuasa atas hajat hidup manusia , mereka bukan lagi perusahaan global tetapi menjadi penguasa dunia. Mirip Alibaba di China yang melalui big-data platfom e-commerce dan financing mereka, melalui credit rating Sesame lalu menguasai semua data dan gerak gerik hampir seluruh penduduk China sehingga mulai tahun 2017 pemerintah China mengambil oper semua data dan mengendalikan Alibaba dan Tencent dalam hal mengakses dan memanfaatkan data pengguna bisnis mereka.</p>

<p>Semua raksasa internet itu masuk dalam semua cabang dan kemampuan ekonomi digital didepan dan mencengkeram manusia makin ketat. Tahun 2020 misalnya Facebook akan memulai global crypto currency dengan nama Libra dan sekaligus Calibra, yang dijalankan oleh anak perusahaan Facebook di Geneva Swiss, yang merupakan digital wallet dan diintegrasikan ke Facebook, Messenger dan Whatsapp sehingga seperti ujar Mark Zukerberg , transaksi keuangan akan jadi semudah berbagi foto di sosmed. Jadilah Facebook sebuah negara dengan teritori yang meliputi semua penjuru bumi, dengan warga negaranya berjumlah 4 milyar, yang mengatur dan mengawasi warga nya dalam berkomunikasi, berdagang, bayar- membayar, berpolitk, berkomunitas dan pendeknya kehidupan sehari hari setiap warga. Libra memancing reaksi keras dari bank sentral Eropa dan juga AS karena sebagai crypto-currency, uang Libra tidak punya pengendali pusat. Yang sangat ditakutkan bank-sentral dan pemerintahan negara dunia kini nampak wujudnya dan siap lahir.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Kendali sosmed, kesepakatan global</h3>

<p>Tidak satu negarapun yang sekarang mampu mengendalikan sosmed , yang paling mendekati kemampuan tunggal ‘mengendalikan’ nya adalah Amerika Serikat negara asalnya. Departemen kehakiman AS tengah memulai penyelidikan pelanggaran anti-trust/ anti monopoli oleh semua perusahaan internet yang sudah jadi raksasa dunia itu. Salah satu capres partai Demokrat Pilpres US 2020, Elizabeth Warren juga menyatakan akan memecah raksasa internet yang sudah terlalu besar, berkuasa dan menjadi penghalang usaha baru yang tentu dari kecil asalnya . CEO Google menanggapi semua upaya ‘break-up’ ini dengan mengundang otoritas untuk bisa seimbang melihat juga bahwa skala raksasa diperlukan agar perusahaan punya kekuatan melakukan riset dan pengembangan teknologi jauh kedepan.</p>

<p>Pengendalian perusahaan internet raksasa hanya bisa dilakukan kalau ada kesepakatan global. Sebuah proses yang tidak mudah di zaman kini, tetapi harus diupayakan sebelum mereka benar menjadi de-facto negara dunia.</p>

<p>Ada empat jalan masuk yang mulai dipakai dunia untuk pengendalian itu : penerapan UU anti- trust , penerapan Digital Tax, adanya UU yang ketat dalam pengumpulan dan pemanfaatan data pribadi pengguna dan yang tidak kalah penting adalah pengharusan platform sosmed menerapkan standar etika dan tanggung jawab konten yang sangat tinggi.</p>

<p>Mula-mula EU mempermasalahkan cara licin raksasa internet itu menghindari pajak dengan membukukan transaski penjualan di negara ‘surga-pajak’. Upaya ini kemudian dibawa menjadi agenda dari pertemuan para menteri keuangan negara G-20 di Jepang baru2 ini , mereka belum bisa bersepakat bulat karena AS tentu saja berusaha melindungi jagoan internet yang hampir semua lahir di Silicon Valley. Ada dua pilar penerapan pajak yang sudah dirumuskan di pertemuan G20 itu yang disebut Digital Tax. Yang pertama, pajak penjualan diterapkan atas semua transaksi penjualan barang dan jasa yang terjadi di suatu teritori negara, bukan atas dasar dimana perusahaan internet itu tercatat. Yang kedua , penerapan Global Minimum Tax Rate untuk membatasi kalaupun masih ada peluang menghindar maka tidak bisa tanpa batas minimum pajak lagi.</p>

<p>Data privacy selalu diunggulkan oleh semua CEO raksasa sosmed itu. Kenyataannya, kasus bergengsi muncul dalam proses pilpres AS 2016 ketika 50 juta profil pengguna Facebook dipakai oleh Cambridge Analytica untuk kampanye memenangkan salah satu capres AS dan juga Brexit vote. Data profil dan gerak-gerik pengguna sosmed dipakai untuk melayani para pemasang iklan yang merupakan sumber pendapatan utama dari sosmed. Mark Zuckerberg meminta maaf dan berjanji memperbaiki diri dan CEO Google mengatakan bahwa pemanfaatan data pribadi untuk iklan sangat terbatas dan sifatnya tidak permanen. Dalam soal privasi data-pribadi, perlawanan diberikan oleh pencipta teknologi web (Bernes Lee), dasar kelahiran semua sosmed dan perusahaan internet, dengan platform web baru Solid (solid.inrupt.com) yang menurut Bernes didesain untuk merebut kembali kekuasaan data dari raksasa internet termasuk Facebook dan Google karena dunia sudah salah arah.</p>

<p>Soal etika dan tanggung jawab konten yang dituntut, mendapat momentum besar setelah terjadi serangan terorisme di tiga lokasi masjid di New Zealand yang brutal dan biadab pada Maret 2019 dan memakan korban jiwa lebih dari lima puluh. Teroris jahat itu menyiarkan aksinya via live-streaming di Facebook dan konten itu tidak bisa segera dideteksi dan diturunkan oleh facebook , bertengger bebas selama tak kurang dari sejam dan terlanjur menjadi viral. PM Selandia Baru Jacinda Ardern segera berbicara dg Mark Zuckerberg dan meminta facebook sadar dan bertindak, Christchurch Call to Action dilanjutkan dalam pembicaraan Presiden Emmanuel Macron dengan CEO Twitter. Pada awal bulan Juni 2019 ini Youtube mengumumkan melarang dan menurunkan konten yang mengandung supremasi kulit putih dan kebencian.</p>

<p>Milyaran dollar digunakan para raksasa internet itu untuk riset dan pengembangan banyak macam teknologi digital maju, menjadi pertanyaan besar kalau kemampuan AI, deep-learning , computer visioning gagal secara real-time memblokir dan menurunkan semua konten berakhlak rendah dan jahat yang membahayakan manusia dan peradabannya, bencana besar dari sosmed gratis itu.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Kedaulatan hukum negara</h3>

<p>Ketika dunia belum bisa bersepakat tentang penanganan semua dampak kerusakan peradaban akibat platform sosmed raksasa yang sudah menjadi realita pahit kemanusiaan maka wajarlah jika pemerintah masing masing negara di dunia mulai melakukan pengaturan hukum di wilayah masing masing.</p>

<p>Beberapa negara sudah memberlakukan hukum penanganan berita-bohong dan konten kebencian diantaranya Singapura , Rusia, Perancis, Jerman, Malaysia dan EU. Jerman bahkan memberlakukan keharusan platform sosmed raksasa dan web sites untuk menghapus konten bohong dan kebencian yang muncul .</p>

<p>Indonesia mendapat pengalaman luar biasa baru baru ini dalam menangani penyebaran berita bohong dan kebencian di internet. Dan seperti di semua negara, langkah-langkah hukum itu tentu mengundang pro dan kontra. Tetapi pengalaman Indonesia menjadi langkah maju yang sangat dibutuhkan.</p>

<p>Indonesia perlu mempertimbangkan pajak-digital yang bisa diberlakukan , sebagian mengikuti pola pilar rumusan forum Menteri keuangan G20 dan sebagian bisa dirumuskan sendiri. Sebab, semua upaya pengamanan efek negatif sosmed membutuhkan dana yang tidak sedikit dan dana itu seyogyanya juga ditanggung oleh para sosmed raksasa itu.</p>
`,
    },
    {
        id: 5,
        title: 'Transformasi Peradaban Digital Mulai 2020',
        excerpt:
            'Transformasi Peradaban Digital Mulai 2020. (KOMPAS, 18 Desember 2018) Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra. Tahun 2020 adalah batu-kilometer yang penting yang menjadi awal masuknya manusia dan peradabannya ke era peradaban dan ekonomi digital tahap lanjut.',
        tag: 'Opinion',
        date: 'August 3, 2019', // <--- Tanggal ditambahkan
        icon: <Brain className="h-8 w-8 text-indigo-600" />,
        image: transformasiPeradabanImage,
        link: 'https://bandungtalentsource.com/2019/08/03/transformasi-peradaban-digital-mulai-2020/',
        content: `
<p>Transformasi Peradaban Digital Mulai 2020. (KOMPAS, 18 Desember 2018) Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra. Tahun 2020 adalah batu-kilometer yang penting yang menjadi awal masuknya manusia dan peradabannya ke era peradaban dan ekonomi digital tahap lanjut.</p>

<p>Teknologi digital-cyber-mobile terus melangkah maju dan tanpa segan dan malu merangsek masuk dalam gaya hidup manusia diseluruh muka bumi, termasuk Cuba dan Korea Utara. Di tahun 2020 diantaranya yang akan menjadi gaya hidup adalah Autonomous Vehicle atau Self Driving Car sebagai taksi di jalan jalan raya, dimulai oleh Tokyo berbarengan dengan Olympiade dan kemudian diikuti oleh London. Mobil tanpa pengemudi dan juga bermesin dan tenaga listrik sebagai alat transpor publik. Ini saja sudah akan membawa gangguan-libas-dadakan bagi lebih dari 30 industri lain.</p>

<p>Pada kurun waktu yang sama AR (augmented reality) akan menjadi warna aplikasi dan penggunaan smart-phone untuk banyak hal yang sifatnya produktif maupun hanya sekedar menghibur seperti sudah disebarkan oleh Pokemon Go. Teknologi komunikasi selular 5G resmi mulai 2020 masuk ke jaringan dan layanan publik di beberapa negara, termasuk Australia, negara2 maju di Asia dan Uni Eropa. 5G adalah arena generasi baru dengan rekor kecepatan dan kapasitas data, delay transmisi dan kemampuan menjadi transport bagi IoT yang sudah lama digadang-gadang sejak namanya M2M dulu.</p>

<p>Dunia kesehatan adalah pemakai paling progresif dari big data dan AI (artificial intelligence), mereka sudah melakukan dari sekarang dan membawa kemajuan menakjubkan dalam layanan kesehatan. Sektor dan industri lain juga mendapat tantangan luar biasa besar, tekanan untuk berubah atau hilang dilibas jaman, seperti sektor jasa keuangan dan pendidikan formal bukan lagi ilusi kosong.</p>

<p>Dari semua pembaharuan dan transformasi peradaban itu ada sebuah teknologi yang punya potensi paling liar dan merubah segala macam tatanan yang ada yaitu Blockchain. Lahirnya blockchain yang dikenal dalam bentuk uang digital Bitcoin itu pun didasari oleh motivasi ‘pemberontakan’ akan sistem pengendalian keuangan negara oleh otoritas Bank Sentral yang dipandang gagal sehingga krisis ekonomi global terjadi di 2008.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Semua harus berubah</h3>

<p>Transformasi digital ini adalah transformasi peradaban. Siapapun kita akan berubah atau diubah. Berubah jika dengan kesadaran dan mengendalikan, diubah jika tidak sadar. Cara hidup kita, 15 tahun lalu, sudah sangat berbeda dari saat ini, hampir tidak kita kenali lagi. Demikianlah yang akan dialami seluruh manusia dalam 15 tahun ke depan. Sebagai pemerintah, organisasi atau institusi , bisnis atau korporasi, juga sebagai individu dengan status orang tua, dewasa, remaja, anak, berprofesi apapun, dokter, professor, guru, pengacara, notaris, aktuaris, sales, pilot semuanya berurusan dengan perubahan. Ada yang mampu cepat ada yang mampunya sangat lambat bahkan resistan, itu hanya soal waktu belaka.</p>

<p>Perusahaan dan bisnis tentu saja paling berkepentingan. Jaya dan hebat sekarang bukan asset abadi. Hilang cepat bukan mustahil. Semuanya diserahkan pada para pemilik, manajemen dan karyawan di dalamnya. Seperti itu pula Pemerintahan, lembaga dan organisasi apapun.</p>

<p>Daya gerak pertama dan utama ada dalam kepemimpinan korporasi atau organisasi. Kelemahan terbesar adalah gamang membawa diri bersama memasuki era yang kadang sang pemimpin sendiri tidak tahu era macam apa di depan itu. Transformasi memerlukan visi, keberanian, kepiawaian pemimpin dan manajemen serta sumberdaya.</p>

<p>Sebuah sesi strategis dalam lingkaran pemimpin perlu dibuat di awal untuk melihat bersama apa itu era digital setelah 2020, apa saja peluang dan ancaman nya dan dimana korporasi saat ini berada.</p>

<p>Dalam sesi strategis babak lanjut kalau konsensus transformasi sudah terbentuk, identifikasi produk, atau wilayah bisnis digital yang baru, bisa dilakukan , bersamaan dengan identifikasi proses binis, cara kerja di dalam korporasi dan organisasi yang biasanya di Indonesia sangat terbelakang dan sudah jatuh dalam perangkap kenyamanan dan kenikmatan berhenti tanpa gangguan. Proses kerja dan cara kerja kini sudah sangat efisien, partisipatif, akurat, bisa bebas kepentingan, mudah dan itu semua menggeser beban kerja yang berulang-ulang, memerlukan konsentrasi tinggi dalam durasi lama, pekerjaan berbahaya, kotor, perlu tenaga besar, pekerjaan ‘low-level’, dari manusia kepada mesin atau robot. Robot fisik maupun yang tidak terlihat, yang bisa bekerja efisien 7/24/365, tanpa cuti, tanpa tuntutan.</p>

<p>Untuk individu, dunia membukakan diri lebar lebar bagi siapa saja untuk dapat menimba ilmu pengetahuan, ketrampilan, seni, budaya dan cabang peradaban apapun . Pengetahuan dan ilmu sudah di-demokratisasi, bisa diakses siapapun kapanpun. Setiap orang yang mau maju dan unggul, peluangnya besar. Mentalitas baru adalah self-learning, belajar sendiri. Akibat demokratisasi ilmu dan pengetahuan ini Lembaga Pendidikan formal terutama dari SMA sampai Universitas menghadapi acaman besar, berubah atau punah. Pusat Pelatihan ala tradisional di suatu Lembaga hampir tidak relevan lagi.</p>

<p>Yang sangat diperlukan dalam transformasi ini adalah talent ekonomi digital dan pembentukannya memerlukan coach/ mentor yang berpengalaman dan paham akan kultur komunitas dan masyarakat yang sedang mau bertransformasi. Kombinasi self-learning dengan experienced knowledgeable coach diperlukan untuk mencetak digital talent yang sudah diperlukan sekarang oleh korporasi dan organisasi, serta membantu peralihan kemampuan / ketrampilan lama tradisional orang yang ada, menuju ke ketrampilan dan pengetahuan baru yang sesuai proses bisnis dan cara kerja baru. Menjadikan manusia berkarya di domain yang tak tergantikan mesin dan program.</p>

<p>Seperti halnya setiap transformasi, pasti ada banyak muncul resitansi karena takut kehilangan apa yang sudah dipahami, dilakukan dan dinikmati selama ini. Yang menonjol diulas dan dijadikan pemahaman adalah ancaman dan bukan peluangnya, hanya satu sisi dari koin yang sama itu. Persis seperti ketika banyak diskusi menyongsong lahirnya internet di pertengahan tahun 90 an sampai peralihan abad kemarin. Terbukti sudah fokus kepada ancaman tak ada manfaat dan dampaknya, internet sudah menjadi kenyataan hidup dan darah dan oksigen peradaban abad ini dan ke depan. Manusia dan ekonomi tak bisa hidup normal lagi tanpa internet dan teknologi mobile, dan sisi ancaman dan gelap internet juga memang terus hidup berdampingan dengan semua manfaatnya.</p>
`,
    },
    {
        id: 6,
        title: 'Digitalisasi Layanan Pemerintah',
        excerpt:
            'Digitalisasi Layanan Pemerintahan (KOMPAS 25 April 2019) Suryatin Setiawan Senior Digital Consultant and Coach – Advisory board PCU PT Pegadaian. Ada kesepahaman yang membesarkan hati dari Debat Capres keempat Sabtu 30 Maret 2019 yang lalu. Kedua capres menyatakan akan menggunakan Teknologi Digital untuk menjalankan layanan pemerintahan RI.',
        tag: 'Op-Ed',
        date: 'August 1, 2019',
        icon: <Newspaper className="h-8 w-8 text-teal-600" />,
        image: digitalisasiLayananImage,
        link: 'https://bandungtalentsource.com/2019/08/01/digitalisasi-layanan-pemerintah/',
        content: `
<p>Digitalisasi Layanan Pemerintahan (KOMPAS 25 April 2019) Suryatin Setiawan Senior Digital Consultant and Coach – Advisory board PCU PT Pegadaian. Ada kesepahaman yang membesarkan hati dari Debat Capres keempat Sabtu 30 Maret 2019 yang lalu. Kedua capres menyatakan akan menggunakan Teknologi Digital untuk menjalankan layanan pemerintahan RI.</p>

<p>Pernyataan kedua capres itu membuka harapan yang sangat besar bagi lompatan katak (leap-frog) RI dalam layanan pemerintah kepada rakyat dalam era digital maju mulai kurun pemerintahan 2019- 2024. Indonesia mempunyai peluang yang nyata menjadi model dari penggunaan teknologi digital maju bagai pelayanan umum di sebuah negara kepulauan terbesar yang sedang berkembang karena di negara maju birokrasi dan layanan pemerintahan cenderung sudah sangat tradisional, kaku dan menahun.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Menentukan prioritas</h3>
<p>Karena begitu banyak sektor dan area strategis yang semua perlu diperbaiki segera, bagi Indonesia yang lebih sulit adalah memilih prioritas yang tepat , yang dikerjakan dahulu, dibanding dengan penerapan teknologi digital.</p>

<p>Yang utama adalah memetik-buah-cepat dari penggunaan teknologi digital agar rakyat mengalami perbaikan layanan umum yang sungguh berarti, menikmati kemudahan hidup. Kalau pemerintah melakukan transformasi birokrasi sekaligus, upaya, energi dan resiko yang dihadapi akan terlalu besar, sedangkan rakyat ingin dampak nyata yang dialami sehari hari sehingga timbul rasa bangga dan optimis sebagai warga negara dan itu akan memacu lebih cepat kemajuan Indonesia menuju negara ekonomi besar di dunia.</p>

<p>Prioritas yang sangat tinggi sudah sering dianalisis dan diulas pemerintah, politikus dan analis yaitu : Operasi Birokrasi, Pemudahan Layanan Umum, Industri-Ekspor-Devisa, Pendidikan, dan Ekonomi Rakyat.</p>

<p>Operasi birokrasi dapat cepat ditingkatkan kecepatan, efisiensi dan akurasi nya melalui penggunaan RPA (Robotic Process Automation) dan UC (Unified Communication, untuk efisiensi rapat, briefing dan presentasi). Pemudahan layanan Umum akan berbasis pada layanan di web dan aplikasi HP yang didisain dengan baik untuk membuat banyak layanan menjadi daring penuh, bukan setengah daring, sehingga rakayat sangat dimudahkan menerima layanan pemerintah untuk urusan sangat esensial seperti e-ktp dan kependudukan , perijinan, perpanjangan SIM, BPJS, Imigrasi, denda tilang, pertanahan. Pajak on-line sudah dimulai dan sangat membantu hanya tutorial yang baku, lengkap dan jelas serta memang dirancang untuk memudahkan belajar sendiri (self-learning) belum tersedia sehingga banyak yang tetap datang ke kantor pajak.</p>

<p>Industri Ekspor untuk Devisa memerlukan Kawasan khusus industri 4.O yang disediakan untuk Smart-Industry dengan insentif dan infrastruktur serta platform digital yang lengkap dan mutakhir, guna menarik investor industri 4.O masuk dan orang Indonesia bisa mengalami secara nyata 4.O itu. Di Kawasan khusus inilah besar kemungkinan teknologi 5G akan diwujudkan di awal. Selain itu diperlukan Sistem Logistik Nasional terpadu dari gudang , pengangkutan darat, pelabuhan laut dan udara, sampai jalur distribusi umum dengan teknologi efektif seperti bar/ QR coding, RFID, tracking, robotic sampai ke teknologi maju seperti blockchain dan computer vision serta Artificial Intelligence dapat digunakan untuk mencapai efisiensi dan keunggulan logistik nasional dan big data logistik nasional yang sangat diperlukan pemerintah dalam perencanaan infrastruktur nasional yang tepat.</p>

<p>Pendidikan adalah sektor paling kritis dan strategis untuk menyiapkan manusia Indonesia masuk dalam kompetisi global dan yang bisa dilakukan cepat adalah merangsang sekolah dan universitas untuk segera bertransformasi menghadapi tantangan disrupsi (dadak-libas) dengan diantaranya membentuk self-learning culture dikalangan pengajar dan juga murid dan menggunakan sumber daya pendidikan mutakhir MOOC (massive on-line open courses) dalam pendidikan dan pengajaran. Pendidikan etos kerja dan peri laku profesional sudah sangat diperlukan untuk daya saing pekerja dan profesional Indonesia.</p>

<p>Ekonomi rakyat dibangkitkan dan dibantu dengan pelayanan web dan aplikasi untuk bantuan riil seperti akses modal kerja, bantuan majanemen usaha sampai ke displin mutu yang diperlukan UMKM agar bisa tegak dan tumbuh. Sektor ekonomi rakyat secara logis perlu ditumpukan pada industri pariwisata dan pertanian dengan teknologi digital seperti penggunaan IoT (Internet of Things) dan drone.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Posisi Kominfo dan BRTI</h3>
<p>Untuk mewujudkan panen-cepat digital itu presiden memerlukan sebuah sumber daya yang handal yang bisa membantu presiden melayani semua fungsi pemerintahan pusat dan daerah untuk mendapat bantuan cepat mewujudkan digitalisasi layanan umum tersebut. Yang bisa dipertimbangkan adalah Kementrian Kominfo dan BRTI yang secara tradisional lahir dari kebutuhan mengatur sektor telekomunikasi dan kini sudah waktunya berubah menjadi Pelayanan Digitalisasi .</p>

<p>Fungsi pengaturan sektor telekomunikasi menjadi salah satu dari fungsi digitalisasi layanan umum yang perlu diperankan.</p>

<p>Indonesia saat ini sudah memiliki dalam jumlah cukup jaringan digital fiber dan nir-kabel berkecepatan tinggi , data centers dan platform awan (cloud infra) aplikasi dan platform layanan dengan standar operasi dan keamanan yang tinggi yang jikalau kurangpun relatif mudah ditingkatkan atau dikembangkan. Pemerintah dapat menggunakannya segera setelah menetapkan syarat kebutuhan pemerintah (Requirement Specification).</p>

<p>Adapun BRTI di era digitalisasi perlu ditingkatkan menjadi lembaga regulasi yang independen dari kementrian dan punya tantangan besar dalam merumuskan regulasi di ranah digital yang demikian luas dan merasuk dalam kehidupan. Regulasi yang sudah mulai dibahas di dunia adalah pengaturan penggunaan dan kemampuan social media yang banyak disalah-gunakan untuk pertarungan politik dan terorisme.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Peran profesional muda Indonesia</h3>
<p>Digitalisasi pelayanan umum memerlukan banyak tenaga enjinir dan ahli di domain komputer/ informatika yang jumlah sekolah/ jurusan nya begitu banyak di seluruh Indonesia. Indonesia sendiri, khususnya para unicorn baru itu sangat memerlukan tenaga ini, namun ironisnya tidak dapat menemukan dalam jumlah cukup yang memenuhi syarat kemampuan dan etos kerja mereka sehingga mereka tetap harus mendatangkan tenaga dari India dan China. Sehingga menjadi jelas, pemerintah melalui Departmen Ristek/Dikti perlu melakukan reformasi dan peningkatan mutu di semua jurusan dan sekolah komputer dan Informatika/ IT di Indonesia untuk menghasilkan tenaga profesi bidang ini yang dapat mengisi kebutuhan dunia usaha dan juga pemerintah dalam membuat lompatan katak digitalisasi pemerintahan Indonesia menuju Indonesia masuk jajaran ekonomi produktif dan besar dunia.</p>
`,
    },
    {
        id: 7,
        title: 'Guru, Murid, dan Pendidikan Era Digital RI',
        excerpt:
            'Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra. Salah satu hal paling positif dari majunya peradaban digital yang sudah jadi gaya hidup adalah soal penyebaran ilmu dan pengetahuan. Ketika era pra-internet ilmu dan pengetahuan sangat dibatasi di ruang2 kuliah, lab, perpustakaan dan buku pribadi.',
        tag: 'Insight',
        date: 'July 30, 2019', // <--- Tanggal ditambahkan
        icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
        image: guruMuridImage,
        link: 'https://bandungtalentsource.com/2019/07/30/guru-murid-dan-pendidikan-era-digital-ri/',
        content: `
<p>Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra. Salah satu hal paling positif dari majunya peradaban digital yang sudah jadi gaya hidup adalah soal penyebaran ilmu dan pengetahuan. Ketika era pra-internet ilmu dan pengetahuan sangat dibatasi di ruang2 kuliah, lab, perpustakaan dan buku pribadi. Hari ini ilmu di-demokratisasi, bisa mudah diakses oleh siapa saja dan kapan saja.</p>

<p>Inilah sebab utama mengapa Pendidikan di RI punya peluang untuk melakukan lompatan menunggangi gelombang peradaban digital maju. Peluang hanya dapat diraih kalau sikap, kebiasaan, ketrampilan dan sistem pengajaran di sekolah dan universitas segera berubah. Generasi baby-boomers, X, Y, atau Z , lebih lebih Generasi Alpha dan selanjutnya punya peluang besar menguasai ilmu dan pengetahuan tanpa mengandalkan Pendidikan formal. Dan lapangan kerja yang ada tidak terlalu lagi memerlukan ijazah, yang diperlukan adalah kemampuan. Ini sudah dimulai oleh Google dan Ernst & Young (EY).</p>

<h3 class="text-lg font-bold mt-4 mb-2">Self-learning</h3>
<p>Kemampuan dan sikap yang vital di era digital maju adalah ‘belajar sendiri’. Sikap ini perlu dimiliki siapa saja, terlebih lebih adalah dosen, guru, murid di sepanjang hidup. Jika budaya self-learning ini ada di kelas2 dan ruang didik di seluruh negeri maka orang Indonesia kemudian akan mampu menjadi unggul berkarya karena kompetensi yang dicari semua bisa didapat melalui MOOC (massive open on-line courses) dengan gratis atau berbayar, dengan atau tanpa gelar, dan banyak diberikan oleh universitas unggul kelas dunia dan instruktur/ professor yang reputasinya tinggi. Demokratisasi ilmu itu sudah nyata dan bahkan interaktif dan maju.</p>

<p>MOOC terkemuka di dunia merendahkan dirinya dengan tidak menyatakan diri sebagai open-university misalnya, namun ilmu dan kompetensi yang diajarkannya meliputi ilmu2 baru ekonomi dan peradaban digital yang mustahil bisa cepat ditawarkan di universitas tradisional terlebih yang birokratis dan dijerat oleh gurita regulasi ritual formalitas. Bagaimana memenuhi kebutuhan Indonesia akan digital scientist, cyber security expert, AI engineers, dan industry 4.O professionals kalau menunggu universitas formal membentuk prodi atau programnya?</p>

<p>Guru2 di Pendidikan dasar sampai menengah perlu difasilitasi untuk trampil dalam self-learning, Murid murid tidak lagi mendengar dan mencatat di kelas, karena mata-ajar bisa dipelajari sebelumnya , dan dikelas adalah saat menggali lebih dalam dan mengerjakan proyek berkelompok untuk mempraktekkan mata-ajar itu. Guru diberi petunjuk untuk mengembangkan ilmu dan pengetahuan nya dengan belajar sendiri di sumber ilmu yang handal di internet, mengakses berbagai bahan ajar yang jauh lebih menarik bagi guru dan murid karena formatnya memaksimalkan keluwesan , dinamika dan keindahan digital content. Apalagi tak berbayar.</p>

<p>Di sebuah SMA di Semarang seorang guru matematika mengubah Teknik mengajar di kelas dengan memaksimalkan salah satu MOOC yang gratis tapi berkelas dunia, khan academy yang dilengkapi dengan Learning Management System sehingga guru bisa memantau behavior anak didik sewaktu mempelajari mata-ajar yg ditugaskan. Guru sejarah mendapatkan bahan ajar sejara dunia yang tersedia gratis dalam bentuk animasi ala Gen Alpha sehingga jadi sangat menarik. Pedagogi menjadi bisa diterapkan nyata karena belajar di MOOC memungkinkan setiap anak belajar dengan ‘tingkat kecepatan’ nya masing2 dan tidak perlu malu.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Bahasa Inggris</h3>
<p>Kenyataan dunia adalah bahwa ilmu dan pengetahuan yang tersedia di cyber-space itu ada dalam Bahasa Inggris. Jadi, bagi orang Indonesia, menguasai bahasa Inggris sungguh perlu. Memang ini adalah salah satu disadvantage sebagai orang Indonesia dibanding peer -nya di negeri jiran Malaysia, Singapore, Australia. Tetapi dengan budaya self-learning itu setiap kita bisa belajar bahasa Inggris setiap saat melalui pilihan kursus gratis dari ratusan atau lebih aplikasi HP (mobile-app) ataupun web. Ikut kursus seminggu sekali atau intensif tidak begitu relevan lagi. Belajar Bahasa adalah soal memakainya setiap hari, setiap saat, berbareng dengan memakai HP.</p>

<p>Agar supaya MOOC dan semua sumber ilmu di internet bisa digunakan memang guru, dosen dan murid Indonesia harus paham berbahasa Inggris. Ini bukan soal mau menaikkan gengsi seperti banyak dilakukan beberapa dari kalangan menengah dan atas. Ini soal menggali ilmu dan berdaya saing di era digital maju.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Sikap hidup, sikap kerja</h3>
<p>Sudah sangat dikenal, beberapa unicorn Indonesia banyak sekali mengandalkan sumber daya profesi dan intelektual dari luar. Salah satu dari mereka misalnya pernah mencoba memenuhi kebutuhan programmer dari dalam negeri (mengapa tidak? Begitu banyak nya sekolah komputer, prodi IT / informatika ) dengan membuka ‘camp’ di Yogyakarta , namun akhirnya rencana baik dan logis itu tak bisa lanjut. Sebabnya kita juga semua paham. Jumlah lulusan sekolah programmer sudah pasti harusnya berlimpah. Namun jumlah itu tak bisa memenuhi kebutuhan bahkan hanya untuk pemberi kerja lokal karena dua hal, banyak lulusan yang suka menyeleweng dari jalur ilmu yang dituntut dan anehnya suka bekerja di perusahaan2 besar mapan yang dalam ekonomi digital rawan dadak-rubah dan hilang. Kedua, soal work-attitude. Yang kompeten dan mau kerja sangat keras dan menjaga komitmen kerja serta tidak ber manja ria adalah pekerja dari India dan Cina.</p>

<p>Ini tantangan raksasa bagi pendidikan RI, baik pendidikan formal maupun dalam keluarga dan masyarakat. Dimulai dengan perubahan sikap hidup dan sikap kerja dan ditambah dengan kompetensi yang relevan dari hasil pendidikan , barulah kita bisa mengisi kebutuhan tenaga kerja sendiri khususnnya di era industry 4.O.</p>

<p>Catatan data sudah menunjukkan bahwa secara ekonomi Indonesia terus tumbuh, tetapi secara produktivitas lebih diam ditempat dengan nyaman.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Regulasi Pendidikan RI</h3>
<p>Hampir di setiap pembicaraan dengan para pelaku pendidikan formal Indonesia , dasar, menengah, atas, maupun tinggi, muncul hawa ‘tak-berdaya’ atas begitu banyak batasan, aturan dan yang jauh dari proses kerja digital yang diberlakukan oleh otoritas. Ironi nya semua orang Indonesia tahu bahwa untuk mengangkat derajat bangsa dalam persaingan digital,( yang menyerahkan pekerjaan inteletual-rendah kepada robot dan software dan hanya menyisakan pekerjaan intelektual tinggi dan hakiki manusiawi kepada manusia ), yang harus berubah segera adalah sistem pendidikan RI.</p>

<p>Otoritas regulasi pendidikan perlu berubah sikap , kebijakan dan strategi. Yang diperlukan Indonesia sekarang dan ke depan adalah otoritas yang lebih bersikap fasilitator, support / sumberdaya pendukung, pendorong kemajuan sambil terus menjadi pengawas nilai2 , sehingga para pelaku pendidikan bisa cepat ber-transformasi menjadi sesuai dengan jaman dan mampu menyiapkan ekonomi dan orang Indonesia masuk dalam era ekonomi intellectual capitalism.</p>

<p>Saya banyak berinteraksi dengan pelaku pendidikan formal RI, saya kurang melihat gerakan merubah diri. Padahal ini soal maha penting bagi Indonesia di era ke depan. Ini program prioritas bagi pemerintahan baru yang akan terbentuk hasil pemilu tahun ini.</p>
`,
    },
    {
        id: 8,
        title: 'Cellular 2.O',
        excerpt:
            'Suryatin Setiawan - Bandung TalentSource (Saya tulis di 27 Feb 2015 dan menjadi realita pada 2018). Setelah 20 tahun industri selular beroperasi di Indonesia, sampailah industri ke tahap jenuh, mencari pertumbuhan top line 2 digit adalah tugas yg tak mudah, pertumbuhan jumlah pelanggan sudah praktis selesai.',
        tag: 'Opinion',
        date: 'February 22, 2019', // <--- Tanggal ditambahkan
        icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
        image: cellular20Image,
        link: 'https://bandungtalentsource.com/2019/02/22/cellular-2-o/',
        content: `
<p>Suryatin Setiawan - Bandung TalentSource (Saya tulis di 27 Feb 2015 dan menjadi realita pada 2018). Setelah 20 tahun industri selular beroperasi di Indonesia, sampailah industri ke tahap jenuh, mencari pertumbuhan top line 2 digit adalah tugas yg tak mudah, pertumbuhan jumlah pelanggan sudah praktis selesai.</p>

<p>Masa emas industri selular Indonesia kira2 hanya berlangsung 12 tahun dan kini indikasi jenuh sudah nampak jelas.</p>

<p>Semua pelaku bertanya, babak baru industri layanan selular seperti apa bentuknya dan bagaimana membentuknya? Karena semua berpendapat kurva hidup kedua Selular masih sangat buram muncullah nama 2.O , nama keren untuk perubahan mendasar yg masih tak jelas wujudnya.</p>

<p>Semua top manajemen Selular dan barangkali juga para pemilik belum, atau tak mau, menemukan bentuk baru usaha Selular nya. Secara bisnis organic semua masih nyaman mencoba mencari solusi tactical belaka. Padahal semua teori bisnis dan manajemen mengatakan bahwa kurva hidup berikutnya dari suatu bisnis yang menjelang atau sudah jenuh adalah transformasi ke bentuk yang sama sekali baru. Tak bisa tactical lagi.</p>

<p>Sama seperti Yahoo yang masih tak bisa menemukan bentuk bisnis 2.O nya. Yang kalau tak segera ditemukan, Yahoo tanpa asset Alibaba dan Yahoo Japan akan segera menjadi sejarah. Bahkan Google, Facebook, Apple sudah demikian gencar eksplorasi semua kemungkinan masa depannya selagi bisnis dan sumber daya sedang demikian besar dan jaya, semua dicoba, dari satelit orbit rendah, fiber optic, robotic, drone, dan tentu saja aplikasi2 analytic yang mudah di aukisisi. Besar tak pernah menjamin bahwa masa depannya selalu cerah.</p>

<p>Yang pernah besar dan gagal menyiapkan masa depan karena kurang peka dan terdadak adalah Nokia dan Blackberry.</p>

<h3 class="text-lg font-bold mt-4 mb-2">Menyadari dan menerima realita</h3>
<p>Manajemen dan pemilik operator Selular di Indonesia perlu mengingat, menyadari dan menerima pakem dasar usaha Selular yang diantaranya:</p>

<ul class="list-disc pl-5 mt-2 mb-4 space-y-1">
  <li>pemenang persaingan dalam layanan selular adalah pemodal paling kuat yang tetap mau menggelontorkan belanja modal, sedikit lebih besar dari pesaing terdekatnya. Kalau tidak bisa memobilisasi dana capex sulit menjadi pemenang sebab Indonesia terlalu luas bagi pemodal terbatas.</li>
  <li>layanan broad band cellular jauh lebih sulit dari layanan voice dan SMS. Sulit mencari profit dan pengembalian modal. Hubungan antara investasi jaringan dengan kenaikan revenue tidak instant dan tidak lagi linear sederhana</li>
  <li>Pasar bisnis dengan model kurva hidup 1.O yang masih dipakai sampai saat ini , nyatanya sudah jenuh. Dan sekedar bertahan tanpa secara strategic dan sistematik melakukan eksplorasi ranah dan model baru sama dengan menyiapkan penutupan binis.</li>
</ul>

<p>Dengan kesadaran atas pakem dasar itu ada urgensi untuk segera melakukan penyesuaian korporasi secara strategic dan terencana untuk menemukan kurva pertumbuhan baru.</p>

<p>Salah satu kemungkinannya adalah menempuh strategi dengan tiga jalur ini yang pada dasarnya berupaya secepatnya menemukan konfigurasi, model bisnis dan portofolio baru yang mengembalikan pertumbuhan perusahaan.</p>

<h3 class="text-lg font-bold mt-4 mb-2">1. Memperpanjang nilai riil layanan voice tradisional bukan VoIP</h3>
<p>Pelanggan selular (dan telekomunikasi) Indonesia pada kebanyakannya masih sangat memerlukan layanan voice call yang handal dan suara yang jernih, tidak hanya di daerah kecil dan jauh bahkan sangat relevan di kota besar. Bisnis dan relasi sosial tetap banyak membutuhkan voice call. Komunitas bisnis masih banyak mengeluhkan drop call dan voice quality yang jelek. Mayoritas pendapatan operator masih berasal dari panggilan suara. Mengapa pertumbuhan panggilan suara menurun cepat? Bukan karena tiba2 orang Indonesia jadi tidak suka bicara dan lebih suka main texting tetapi karena rejim tariff untuk panggilan jarak jauh (kita mungkin sudah lupa istilah SLJJ) yang sudah sangat ketinggaln realita dan tua renta belum diperbaharui. Rejim tariff itu menghambat orang melakukan panggilan suara dengan leluasa. Rakyat kebanyakan kemudian mengakali rejim tariff dengan layanan on-net selular yang murah sekali atau bahkan gratis, satu orang punya beberapa SIM card. Orang Indonesia yang sudah sedikit canggih lalu pindah melakukan banyak sekali komunikasi messenger dan Skype untuk berkomunikasi , bahkan suara.</p>

<p>Tak pelak lagi , sangat suburlah semua OTT messenger global itu , dari BBM dulu, sampai Whatsapp dan LINE kini. Kebijakan tariff percakapan long distance Indonesia yang berlaku, membuat kita menjadi ladang subur sekali bagi OTT global. Kita terus protes akan penunggangan OTT pada infrastruktur kita tetapi kita sendirilah yang mengarahkan orang Indonesia menjadi pemakai fanatik semua OTT global messenger itu.</p>

<p>Bisnis voice masih bisa tumbuh lebih besar dari statistik yang praktis flat sekarang, kalau rejim tariff dan interkoneksi diganti menjadi realistik, terjangkau dan sederhana. Bukankah prinsip bisnis dengan volume besar adalah dengan memberi harga retail yang sangat terjangkau masyarakat?</p>

<p>Upaya kementrian Kominfo untuk tinjau ulang tariff dan interkoneksi perlu didukung dan dipercepat dan untuk menjaga layanan voice tidak pindah dalam paket data dan menyuburkan secara hebat OTT messenger global yang sulit dikenai pajak itu dan agar orang tak lagi perlu punya beberapa SIM card dalam dompet, maka opsi 4 dalam Dokumen Konsultasi Publik Kominfo : Penyempurnaan Regulasi Tariff dan Interkoneksi adalah opsi yang paling jitu dan cocok dengan realita zaman.</p>

<h3 class="text-lg font-bold mt-4 mb-2">2. Mempertahankan margin/Mbyte layanan data .</h3>
<p>Tantangan berat layanan mobile broadband bagi operator di seluruh dunia, tapi khususnya di Indonesia yang nilai tukar rupiah terus melemah terhadap USD, adalah kecilnya revenue/ Mbyte data. Di Indonesia operator selular kira-kira mendapatkan 65 rupiah/ MByte atau sekitar 0,5 cent USD , dan biaya operasi dan pemeliharaan jaringan kemungkinan mencapai 0.6 cent/ Mbyte. Jelaslah, tantangan operator selular di era mobile data access adalah mengelola margin per Mbyte yang harusnya positif .</p>

<p>Menaikkan revenue/MByte di Indonesia tidak mudah, apalagi kalau persaingan antar operator hanya sekedar memberi murah tanpa punya standard mutu layanan yang minimal. Menurunkan biaya jaringan per MByte terus diusahakan secara dunia dengan semua perkembangan teknologi yang luar biasa cepat dan agresif. LTE, NFV, SDN dan nanti 5G akan memastikan bahwa biaya jaringan itu bisa terus ditekan.</p>

<p>Dalam keadaan yang tak mudah ini industri dipaksa berubah. Relasi antara operator selular, infrastructure vendor dan tower provider harus berubah drastis ke relasi yg lebih mendalam dan imbang. Sudah berakhir hubungan sekedar jual beli putus diantara ketiganya dan kondisi pasar harus masuk ke dalam desain teknologi sejak teknologi masih di dalam pabrik. Tanpa merombak model relasi bisnis ketiga komponen pelaku bisnis dalam ecosystem industry selular ini akan berakibat degradasi mutu layanan dan saling negasi antar ketiganya. Pada saat yang sama Kominfo memberlakukan pengawasan standar mutu layanan selular yang ketat.</p>

<p>Operator selular di Indonesia tidak mungkin, demi citra bisnis, mempertahankan tingkat EBITDA margin yang terus dipegang selama ini tanpa mengorbankan mutu layanan. Kalau EBITDA margin terus bertahan, bisa dipastikan mutu layanan pasti terus turun.</p>

<h3 class="text-lg font-bold mt-4 mb-2">3. Blue ocean layanan iklan, banking, payment di Smartphone.</h3>
<p>Jalur strategi ke 3 adalah penemuan siklus hidup baru bagi perusahaan selular secara organik. Transformasi besar dalam hal sumber daya kunci, proses bisnis utama, kanal distribusi (dealership ala kurva 1.O sudah tidak diperlukan lagi), pelayanan pelanggan dan mitra bisnis. Ke enam komponen usaha tersebut akan sangat berbeda di era kurva kedua. Apakah manajemen dan pemilik selular berani melakukan transformasi itu? Jika tidak , kurva 2.O tidak akan pernah ditemukan.</p>

<p>Dengan melihat model bisnis semua perusahaan internet global yang sekarang menjadi OTT yang digjaya maka secara logika layanan yang sangat berpotensi dan sangat bisa dilakukan operator selular adalah memindahkan tayangan iklan ke smartphone, iklan suara, gambar maupun video. Mengapa smartphone bisa kalah dari TV manakala hari ini jumlah unit smartphone yang beredar sudah lebih besar dari jumlah pesawat TV, apalagi TV dan media tradisional lain bukan lagi jadi prime attraction mata kita ?.</p>

<p>Layanan mobile banking dan payment yang didorong BI dan diawasi OJK juga peluang luar biasa besar yang bisa masuk dalam agenda transformasi selular. Kalau selama ini semua hal itu pernah dicoba dan tidak berhasil muncul menjadi kurva dua itu karena pendekatannya terlalu teknis R&D dan bukan transformasi bisnis. Bisnis kurva dua adalah juga era behavior analytics pelanggan selular yang sampai saat ini tak mampu dilakukan dengan baik oleh operator.</p>

<p>Layanan M2M dan IoT (Internet of things) sering disebut sebut punya potensi besar, namun sampai hari ini tak nampak kedekatan M2M dan IoT dengan akses selular. Kedua layanan itu lebih dekat ke WiFi dan wireless interface lainnya seperti yang terjadi dengan wearables</p>

<p>Strategi tiga jalur ini mungkin hanya relevan maksimum sampai 10 tahun ke depan. Tekanan perombakan total struktur industri selular juga bisa terjadi dadakan kepada operator setelah wujud 5G, Next generation WiFi network dan MVNO Google menampakkan bentuk dan impaknya. Yang jelas, tak ada kemewahan waktu untuk menunggu lagi.</p>
`,
    },
    {
        id: 9,
        title: 'Why Indonesia company can and should leapfrog in digitalization?',
        excerpt:
            'Let me start by sharing my observation on the attributes of Indonesia enterprises in general and this is mostly about the medium-large companies, state-owned, or private in Indonesia. In terms of the chance to adopt digital technologies, those Indonesia companies have the following advantages : they operate in...',
        tag: 'Strategy',
        date: 'November 18, 2017',
        icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
        image: whyIndonesiaImage,
        link: 'https://bandungtalentsource.com/2017/11/18/why-indonesia-company-can-and-should-leapfrog-in-digitalization/',
        content: `
<p>Let me start by sharing my observation on the attributes of Indonesia enterprises in general and this is mostly about the medium-large companies , state-owned, or private in Indonesia.</p>

<p>In terms of the chance to adopt digital technologies , those Indonesia companies have the following advantages :</p>
<ul class="list-disc pl-5 mt-2 mb-4 space-y-1">
    <li>They operate in third largest market in Asia, which is projected to be the 5th largest global economy in 2030 meaning their growth potential is huge.</li>
    <li>In terms of technology and digitalization many of Indonesia companies are basically ‘green field’. Just to give you an example: an established company with profit of around 135 million USD is just recently starting to initiate the implementation of ERP system in their operation.</li>
    <li>Those companies can focus first to win local market as the underlining battle ground before going regional and to go to the next level. While keeping their current business, they can start leapfrogging by digitalizing their major processes.</li>
    <li>Indonesia has abundant supply of young work-force. They generally need a solid, short-term-KPI-oriented induction program to be able to play a productive role in the company since their early days.</li>
    <li>In average, the level of awareness in the middle level leadership in those companies of the need to perform better is high. The motivation to be better is real.</li>
</ul>

<p>On the other hand, there are disadvantages that Indonesia businesses are facing :</p>
<ul class="list-disc pl-5 mt-2 mb-4 space-y-1">
    <li>Equity support from shareholder(s) to support the growth sometime is not an easy game.</li>
    <li>At the same time access to low cost financing also not generally known.</li>
    <li>The well known situation of Indonesia for business and industry is the lacking of supporting industries, in whatever business line, Indonesia need to catch up in a big way to create an efficient industry ecosystem for business to be able to get all support needed to do business quickly and efficiently.</li>
    <li>Even though the number of young work force with various formal education background is high, it is relatively only low percentage of young talent in the market who really ready in terms of basic knowledge, work attitude and right skill. Likewise the existing potential talent in the company also somehow capped by the old bureaucracy and complacency that has been there so long and there is no way-out for them to break through and move forward and catching up quickly. In this situation specialized business and process development project coaching and mentoring program by business experienced coaches is therefore required to get the talent up to the level and can then play a really significant role in the digitalization of the enterprise.</li>
</ul>

<p>The fact that the internal business processes are relatively green field and the motivation of the middle level leadership to move forward is strong, make a lot easier for companies in introducing various digital and cloud based processes provided the top leadership really want it. It can really be a leapfrog!</p>

<p>In my observation, some of the common simple examples in digitalizing the internal company processes and that usually can happen quickly and bring a lot of improvement among others are :</p>
<ul class="list-disc pl-5 mt-2 mb-4 space-y-1">
    <li>Improving meeting efficiency using various technologies like audio or video conferencing, which is actually accessible over the smartphone now, especially if the enterprises have foot print scattered in all provinces in Indonesia ; a small note, audio conferencing for meeting has just really picking up recently and gaining popularity in Indonesia and it has been able to improve meeting efficiency because in audio conferencing time punctuality is just a basic requirement and during the meeting, discussions can only happen in a very straight forward manner this goes along with the fact that Indonesia is such a vast country and that very serious traffic problem is just a day-to-day experience in big cities all around Indonesia.</li>
    <li>The flourishing mobile messenger group in Indonesia has really been facilitating an effective means for business coordination, people from all level are so used to it now. This has been really an effective coordination platform for all kind of business and organization.</li>
    <li>The use of reporting bot to produce regular reports has saved a lot of time. The use of bots in some processes in the Indonesia companies is starting now.</li>
    <li>Simple project supervision and monitoring is now done easily over a m-app not mentioning that exhaustive Project Management planning is now doable over cloud and in collaborative manner that has improved tremendously the efficiency in doing and executing a plan.</li>
    <li>Human capital processes can now be done on cloud and become more transparent , real time, learning and interactive. and many more.</li>
</ul>

<p>There are cases where technologies has greatly improved the customer experience in subscribing company’s services in Indonesia. One major example would be the experience of millions of Indonesian in using the inter-city train services, from getting the ticket on the mobile -app till the ‘check-in’ process at the station as it is so convenient nowadays.</p>

<p>The non-cash payment at the toll gates which was recently introduced as mandatory will eventually provide a new experience for customers of smooth moving at the toll gates and as well as efficiency for the toll company.</p>

<p>Mobile banking in Indonesia has been massive and becoming a very common means for Indonesian people more than those in the first world countries where to many Asian looks very old school.</p>

<p>Not mentioning the use of Facebook and Instagram by common people on the street in Indonesia to buy and sell products from their mobile devices</p>

<p>Those examples of digitalizing company internal and customer-facing processes are just a fraction of the so many that we can see today in Indonesia enterprises. It has shown that people in Indonesia embrace the benefit of technologies very much and do not hesitate in using it quickly. Indonesia do not invent any of those technologies but in this digital age, technologies are created and made easy accessible as ‘generic’ medias, tools, or platforms and that it is now up to enterprise as how to use those technologies to radically transform companies to become more efficient, productive and competitive.</p>

<p>The top leaders of the companies must be aware of this and make the decision to engage to the new reality of digital era for enterprises</p>

<p>Apart from financial type of challenges mentioned above, be it equity or access to low cost debt , the rest of the major challenges in leapfrogging are business network and people upgrading. I am with my team and we are business hands-on experienced people, we love to help and see that Indonesia companies survive the disruptions threat of digitalization and even more, take the most benefit of it, to grow more, expand market and be more competitive.</p>

<p>Let me know if you are the leadership of Indonesia companies and interested to discuss this further.</p>
`,
    },
    {
        id: 10,
        title: 'Why enterprise digitalization matters ?',
        excerpt:
            'Established running companies these days at least facing two potential real challenges one is, competition including from product substitution, maybe completely un-expectable and coming out in totally different format, and two, is its opex basis If a company think that its products or services will never be replaceable, think deeper ...',
        tag: 'Business',
        date: 'November 12, 2017', // <--- Tanggal ditambahkan
        icon: <Settings className="h-8 w-8 text-gray-600" />,
        image: enterpriseDigitalizationImage,
        link: 'https://bandungtalentsource.com/2017/11/12/why-enterprise-digitalization-matters/',
        content: `
<p>Established running companies these days at least facing two potential real challenges one is, competition including from product substitution, maybe completely un-expectable and coming out in totally different format, and two, is its opex basis</p>

<p>If a company think that its products or services will never be replaceable, think deeper and longer and listen or read the weak signals that might appears on the horizon out of no where , be sensitive and open minded , and you might find something interesting. With the remarkable proliferation of internet, mobile smart devices with amazing computing power and wireless connectivity everywhere and with the growing implementation in human daily life of at least a dozen of technologies like robotic including bot , automation, machine learning like AI , IoT, cloud, autonomous vehicles including drone, block chained, next-gen genomics which have been invented in the last three decades or so , there are many new ways in doing our life and the operation of our corporation and many new things as products and services coming out. This will definitely have a profound impact to our life and our companies , our businesses.</p>

<p>If after a series of contemplation sessions a company still can not find any possible new forms of the products and services that they have been producing and selling for many years, then they should try to find at least some new ways of developing, producing and delivering its legacy products and services; and for sure , especially for companies in Indonesia, there are many new ways that a company should consider, carefully plan and eventually do it to embrace the new digital age coming our way. Why ? the rationale behind it is simple, your opex basis can be scrutinized easily by competition if you just keep doing it the same way as you have been doing in last several decades.</p>

<p>Many companies can be quickly out of business beaten up by new player who can produce and deliver the same product or service but in much lower cost, with way way lower operational expenditure. It’s no secret anymore. Factories will be fully automated with no human operator like Tesla, sea ports and airport are fully automated like Hamburg seaport or Changi T4, warehouse are full of moving robots like Amazon and Alibaba, courier companies must transform its delivery efficiency using RFID Track and Trace and Smart locker, vast palm plantation must use drone and LiDar, old school property companies are scrutinized by competitors who use 3D printer, and many other.</p>

<p>In short the internal business processes in companies, and i am focusing on companies in Indonesia, must be transformed and empowered , aligned with the digital environment, for companies to sustain business or even to grow more. With digitalization, companies gain a remarkable efficiency in its opex and boost its productivity and thus Indonesia companies can then compete globally. Indonesia do not invent the technologies but Indonesia can leap frog by utilizing the technologies currently available which can be customized and designed to meet the local needs. We did once with Palapa Satellite and we should be able to do the same now and onwards.</p>

<p>Some companies can easily find the new way of delivering their products and services to customer in much cheaper and reliable way by utilizing the digital technologies. Not only that, companies can also see the new forms of it’s digital products and services . Or at the minimum, enrich the existing products and services with digital features that make the products or services more appealing and make a lot of sense for the customers.</p>

<p>If you are an Indonesia company and keen to digitalize your processes and find your digital products/ services, just drop me a line and we can explore further.</p>
`,
    },
    {
        id: 11,
        title: 'The uncovered potential of Indonesia companies',
        excerpt:
            'I find many companies in Indonesia, whether they are at the first tier or lower, have an incredible potential to grow and become a big regional player in this gigantic growing ASEAN market as we all can see. But it is very common to see that these potentially great companies ...',
        tag: 'Analysis',
        date: 'November 11, 2017',
        icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
        image: uncoveredPotentialImage,
        link: 'https://bandungtalentsource.com/2017/11/11/the-uncovered-potential-of-indonesia-companies/',
        content: `
<p>I find many companies in Indonesia, whether they are at the first tier or lower, have an incredible potential to grow and become a big regional player in this gigantic growing ASEAN market as we all can see. But it is very common to see that these potentially great companies in Indonesia have failed to ride on the waves of opportunities that actually so close to them.</p>

<p>Many companies in Indonesia operate in old school traditional way comfortably and the top management , both the board of directors and board of commissioners have missed the urgency of rejuvenating the whole process in the company and bring it forward and synced up with the present time , the age of digital. The awareness that the company is not operating in its top capacity is likely there, within the enterprise, but the leadership, in most cases, is not sure themselves as how , when and from where they should kick the start button.</p>

<p>Here, I am not talking about second tier of Indonesia enterprises but also those big brands that look shiny at the moment but will turn gloomy when we project them into the coming decades when digitalization become the common reality of human life, simply because they complacently continue doing the same thing as what they have been doing in the last two or three decades in all major business processes , be it product development, customer care, channel sales, outlets operation, business partnership, company housekeeping processes, or people management and talent development process.</p>

<p>In all Indonesia companies today we start to see a real generation gap issues. The gap is really worrying but real and it exist between the top leadership from baby boomers time with the many under -utilized and handcuffed gen-Y talents that start joining the company. it is really a counter productive ‘below the surface’ tension that really lock the true potential of the company.</p>

<p>What I have been doing to help some of them is in in essence expose them to the new way of doing things utilizing the real power of cloud, internet, IoT, mobile-app, collaborative mode of work, diminishing the killing bureaucracy , empowering the assigned gen-X and Y to my digitalization projects and bridge this generation with the baby boomers at the top .. all in a fully customized , no-nonsense project with clear and measurable business goals and deliverables.</p>

<p>I love to do this because I know these Indonesia companies deserve to be big and become the new stars in the regional and global stage and I believe that dream can be realized using the most local resources that is available. When I work with these gen-x and gen-Y team member in the project I see and trust that they can perform much more than what they have been able to show if they are given the right tools, culture and opportunity by the right coach and mentor.</p>

<p>With my team, I am developing the company to be ready for full-pledge digitalization of human economy and industry and hopefully also developing the future business leaders of Indonesia.</p>

<p>If you are the Indonesia company that I am discussing above and need the kind of help to digitalize your company or your products and develop your digital talents, drop me a line and we can discuss this further.</p>
`,
    },
    {
        id: 12,
        title: 'Pengantar Data Science dan Aplikasinya bagi Pemula',
        excerpt:
            'Pengantar Data Science dan Aplikasinya bagi Pemula. Bagi mayoritas orang, terlebih lagi yang belum berkecimpung di dunia kerja, barangkali data dianggap tidak penting. Data bisa jadi dianggap berkonotasi dengan “tumpukan” angka-angka yang membosankan dan “meaningless”. Data dianggap menjadi urusan perusahaan atau pemerintah, sehingga merupakan hal yang “jauh” dari kehidupan sehari-hari ...',
        tag: 'Tech',
        date: 'November 10, 2017',
        pdfUrl: '/Pengantar-data-science.pdf',
        icon: <BarChart className="h-8 w-8 text-blue-500" />,
        image: dataScienceImage,
        link: 'https://bandungtalentsource.com/2017/11/10/pengantar-data-science-dan-aplikasinya-bagi-pemula/',
        content: `
<p>Pengantar Data Science dan Aplikasinya bagi Pemula. Bagi mayoritas orang, terlebih lagi yang belum berkecimpung di dunia kerja, barangkali data dianggap tidak penting. Data bisa jadi dianggap berkonotasi dengan “tumpukan” angka-angka yang membosankan dan “meaningless”.</p>

<p>Data dianggap menjadi urusan perusahaan atau pemerintah, sehingga merupakan hal yang “jauh” dari kehidupan sehari-hari. Maka, meskipun “data science” atau ilmu data dan profesi data scientist sudah “terlahir” sejak beberapa tahun yang lalu, dapatlah dipahami bahwa masih banyak orang yang bertanya-tanya tentang apa itu data science, juga apa yang dikerjakan data scientist.</p>
`,
    },
    {
        id: 13,
        title: 'Digitalize your company, find your digital products',
        date: 'November 10, 2017',
        excerpt:
            "If you're a company in Indonesia facing digitalization challenges, not really sure how to deal with potential disruptions by the digitalization wave, my team and I are potentially the right partner to help you...",
        tag: 'Service',
        icon: <Brain className="h-8 w-8 text-teal-500" />,
        image: digitalizeCompanyImage,
        link: 'https://bandungtalentsource.com/2017/11/10/digitalize-your-company-find-your-digital-products/',
        content: `
<p>If you’re a company in Indonesia facing digitalization challenges, not really sure how to deal with potential disruptions by the digitalization wave, my team and I are potentially the right partner to help you. Regardless of your business size, a private, public or State owned enterprise we will design a coaching and mentoring program for your internal team to embark on digitalizing your internal business processes or identifying and developing your new digital products.</p>
<p>With my team, I have been doing this for companies in Indonesia, the culture, market, business networks that I know very well. We know Indonesia much better than any foreign resources.</p>
<p>This is the right time for you to really initiate a systematic but yet a straight forward, ‘no-nonsense’ programs to craft your future in this new era where technologies like cloud, IoT, automation, robotic, AI, centered on smart mobile devices and the internet and wireless connectivity will play its transformational role in every aspect of human life in the decades to come.</p>
<p>Drop me a message and let’s explore further.</p>
`,
    },
]

export const OpEd = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const articlesPerPage = 6
    const totalPages = Math.ceil(articles.length / articlesPerPage)

    const indexOfLastArticle = currentPage * articlesPerPage
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
    const currentArticles = articles.slice(
        indexOfFirstArticle,
        indexOfLastArticle
    )

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
                    <Link to="/" className="hover:text-teal-600">
                        Home
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span>Op-Ed</span>
                </div>
            </div>

            {/* Header */}
            <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                        Op-Ed & Articles
                    </h1>
                    <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                        Opinions, insights, and research notes on digital
                        transformation, automation, and data-driven decision
                        making.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {currentArticles.map((article) => (
                            <Card
                                key={article.id}
                                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                            >
                                <div className="relative">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        {article.icon}
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <Badge
                                            variant="secondary"
                                            className="bg-white/90 text-gray-800"
                                        >
                                            {article.tag}
                                        </Badge>
                                    </div>
                                </div>

                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg font-bold text-gray-900 mb-2">
                                        {article.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-grow flex flex-col">
                                    <CardDescription className="text-gray-600 mb-4">
                                        {article.excerpt}
                                    </CardDescription>
                                    <div className="mt-auto pt-4 border-t">
                                        <Link
                                            to={`/op-ed/${article.id}`}
                                            className="block"
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                                            >
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
                                            onClick={() =>
                                                paginate(currentPage - 1)
                                            }
                                            className={
                                                currentPage === 1
                                                    ? 'pointer-events-none opacity-50'
                                                    : 'cursor-pointer'
                                            }
                                        />
                                    </PaginationItem>

                                    {pageNumbers.map((number) => (
                                        <PaginationItem key={number}>
                                            <PaginationLink
                                                onClick={() => paginate(number)}
                                                isActive={
                                                    number === currentPage
                                                }
                                                className="cursor-pointer"
                                            >
                                                {number}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}

                                    <PaginationItem>
                                        <PaginationNext
                                            onClick={() =>
                                                paginate(currentPage + 1)
                                            }
                                            className={
                                                currentPage === totalPages
                                                    ? 'pointer-events-none opacity-50'
                                                    : 'cursor-pointer'
                                            }
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
