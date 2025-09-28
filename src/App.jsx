import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import PostSection from './sections/PostSection'

const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <HeroSection />
      <PostSection />
    </div>
  )
}

export default App