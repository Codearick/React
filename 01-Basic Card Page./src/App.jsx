import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"
function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
      <Card title="Card 1" desc="This is the desctiption of the card 1 which couldn't be written by lorem ipusm"/>
      <Card title="Card 2" desc="This is the desctiption of the card 2 which couldn't be written by lorem ipusm"/>
      <Card title="Card 3" desc="This is the desctiption of the card 3 which couldn't be written by lorem ipusm"/>
      <Card title="Card 4" desc="This is the desctiption of the card 4 which couldn't be written by lorem ipusm"/>
      <Card title="Card 5" desc="This is the desctiption of the card 5 which couldn't be written by lorem ipusm"/>
      </div>
      <Footer/>
    </>
  )
}
export default App
