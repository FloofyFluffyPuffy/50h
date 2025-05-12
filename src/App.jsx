import Footer from "../components/Footer"
import Greet from "../components/Greet"
import Greeting from "../components/Greeting"
import Header from "../components/Header"
import JSXRules from "../components/JSXRules"
import MainContent from "../components/MainContent"
import Person from "../components/Person"
import Product from "../components/Product"
import ProductInfo from "../components/ProductInfo"
import ProductList from "../components/ProductList"
import UserList from "../components/UserList"
import WeclomeMessage from "../components/WeclomeMessage"
const App = () => {
  return (
    <div>
      <Person name="A" age={23}/>
      <Product name="B" price={7}/>
    </div>
  )
}

export default App