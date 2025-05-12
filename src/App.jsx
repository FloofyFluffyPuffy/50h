import Footer from "../components/Footer"
import Greet from "../components/Greet"
import Greeting from "../components/Greeting"
import Header from "../components/Header"
import JSXRules from "../components/JSXRules"
import MainContent from "../components/MainContent"
import ProductInfo from "../components/ProductInfo"
import ProductList from "../components/ProductList"
import UserList from "../components/UserList"
import WeclomeMessage from "../components/WeclomeMessage"
const App = () => {
  return (
    <div>
      <Greeting/>
      <UserList/>
      <ProductList/>
    </div>
  )
}

export default App