
const GridPage = () => {
  return (
    <div className="min-h-screen w-full p-4">
        <div className="grid grid-cols-4 gap-4">
            <div className="card col-span-2 row-span-2">1</div>
            <div className="card">2</div>
            <div className="card">3</div>
            <div className="card">4</div>
            <div className="card">5</div>
            <div className="card row-span-2">6</div>
            <div className="card col-[2/5]">7</div>
            <div className="card">8</div>
            <div className="card col-span-2">9</div>
        </div>

        <div className="grid grid-cols-2">
            <div className="bg-red-900 text-white font-bold text-3xl w-100 h-100 grid place-content-center">1</div>
            <div className="bg-blue-800 text-white font-bold text-3xl w-100 h-100 grid place-content-center">2</div>
        </div>

    </div>
  )
}

export default GridPage