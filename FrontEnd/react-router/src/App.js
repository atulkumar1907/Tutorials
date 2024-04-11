// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Routes, Route } from 'react-router-dom'
import { OrderComfirmed } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { Featured } from './components/Featured';
import { New } from './components/New';
import { User } from './components/User';
import { UserDetails } from './components/UserDetails';
import { Profile } from './components/Profile';
import { Login } from './components/Login.js'
import { AuthProvider } from './components/auth.js'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}>
          <Route index element={<Featured />}></Route>
          <Route path='featured' element={<Featured />}></Route>
          <Route path='new' element={<New />}></Route>
        </Route>
        <Route path="/users" element={<User />}>
          <Route path='/users/:userId' element={<UserDetails />}></Route>
        </Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </AuthProvider>
  )

}

export default App;
