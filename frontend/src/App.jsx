import{Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BlogDetails from './pages/BlogDetails'
import Dashboard from './pages/Dashboard'
import CreateBlog from './pages/CreateBlog'
function App(){
  return(
    <>
     <Navbar/>
     

      <Routes>
       <Route path = '/' element = {<Home />}/>
       <Route path = '/login' element = {<Login />}/>
       <Route path = '/signup' element = {<Signup/>}/>
       <Route path = '/blog/:id' element = {<BlogDetails />}/>
       <Route path="/create-blog" element={<CreateBlog />} />
       <Route path = '/dashboard' element = {<Dashboard/>}/>
      </Routes>

      <Footer/>
     </>
  )
}
export default App