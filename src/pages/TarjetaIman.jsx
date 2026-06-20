import Magnetic from "../components/ui/magnetic"

const TarjetaImanPage = () => {
  return (
    <div className="mx-auto min-h-screen bg-linear-to-t from-black to-black/80 container text-white grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
      
      <div className="w-96 h-96 flex items-center justify-center border-2 border-gray-500 rounded-3xl">
        <Magnetic>
          <div className="w-96 relative rounded-3xl hover:cursor-pointer hover:shadow-xl">
            <img src="/images/imagen1.jpg" alt="Batman" width={1000} height={1000} className="w-full h-95 object-cover rounded-3xl"/>
            <div className="flex flex-col justify-end absolute left-0 top-0 w-full h-full bg-linear-to-t from-black to-transparent rounded-3xl">
              <h2 className="text-2xl mx-4 mb-2 font-bold">El Guardian de la noche</h2>
              <p className="text-gray-400 mx-4 mb-4 text-sm">Batman es el heroe de ciudad Gotica su verdadera identidad es Bruce Wayne, dueño de industrias Wayne.</p>
            </div>
          </div>
        </Magnetic>
      </div>

      <div className="w-96 h-96 flex items-center justify-center border-2 border-gray-500 rounded-3xl">
        <Magnetic>
          <div className="w-96 relative rounded-3xl hover:cursor-pointer hover:shadow-xl">
            <img src="/images/imagen3.jpg" alt="Batman" width={1000} height={1000} className="w-full h-95 object-cover rounded-3xl"/>
            <div className="flex flex-col justify-end absolute left-0 top-0 w-full h-full bg-linear-to-t from-black to-transparent rounded-3xl">
              <h2 className="text-2xl mx-4 mb-2 font-bold">Novia de Batman</h2>
              <p className="text-gray-400 mx-4 mb-4 text-sm">Melania Fringe conocio a Bruce Wayne en una cena de gala donde hicieron coneccion.</p>
            </div>
          </div>
        </Magnetic>
      </div>

      <div className="w-96 h-96 flex items-center justify-center border-2 border-gray-500 rounded-3xl">
        <Magnetic>
          <div className="w-96 relative rounded-3xl hover:cursor-pointer hover:shadow-xl">
            <img src="/images/imagen2.jpg" alt="Batman" width={1000} height={1000} className="w-full h-95 object-cover rounded-3xl"/>
            <div className="flex flex-col justify-end absolute left-0 top-0 w-full h-full bg-linear-to-t from-black to-transparent rounded-3xl">
              <h2 className="text-2xl mx-4 mb-2 font-bold">La asistente de Batman</h2>
              <p className="text-gray-400 mx-4 mb-4 text-sm">Juliette Benings es la asesora de Bruce Wayne que lleva una.</p>
            </div>
          </div>
        </Magnetic>
      </div>

    </div>
  )
}

export default TarjetaImanPage