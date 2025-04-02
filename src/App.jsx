import Hero from "./components/Hero/hero"
import Nadvar from "./components/nadvar/nadvar"
import fondo from "./assets/fondo.png"



function App() {

  const bgImagen ={
      backgroundImage: `url(${fondo})`,
      backgroundRepeat :"no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      position: "relative",

  }

  return (
    <>
    <div style={bgImagen} className="overflow-hidden min-h-screen">
    <Nadvar/>
    <Hero/>
    </div>
    </>
  )
}

export default App
