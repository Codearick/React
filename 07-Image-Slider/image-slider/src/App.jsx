import ImageSlider from "./components/ImageSlider"

function App() {


  return (
    <>
    <div className="flex items-center justify-center mt-10">
      <ImageSlider  url={"https://picsum.photos/v2/list"} page = {1} limit={10}/>
    </div>
    </>
  )
}

export default App
