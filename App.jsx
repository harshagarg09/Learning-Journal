import Navbar from './components/Navbar'
import Header from './components/Header'
import BlogsList from './components/BlogsList'
import Footer from './components/Footer'


export default function App() {
    return <>
        <Navbar />
        <Header />
        <BlogsList display={6} />
        <Footer />
    </>
}