
const HomePage = () => {
    return (
        <div className="flex container mx-auto justify-center flex-col">
            <h1 className="text-center text-4xl text-yellow-600 font-bold">Curso de Tailwind</h1>
            <h2 className="text-center text-2xl">After</h2>

            <div>
                <button className="bg-orange-600 w-32 rounded-md p-3 relative after:absolute after:left-32 after:border-8 after:border-transparent after:border-l-orange-600 after:top-4">Haz click aqui</button>

                <input type="text" placeholder="Nombre" className="border ml-3 px-2 placeholder:text-orange-600 placeholder:italic" />

                <br /><br />

                <input type="file" className="file:bg-violet-100 file:border-0 file:rounded-lg file:text-violet-800 file:px-3 file:font-semibold hover:file:bg-violet-300" />

                <br /><br />
                <ul className="list-disc ml-6 marker:text-red-500 marker:font-bold">
                    <li>item</li>
                    <li>item</li>
                    <li>item</li>
                </ul>

                <br /><br />
                <p className="selection:bg-green-400 selection:text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum suscipit id aperiam laudantium cumque. Esse nesciunt ea consequuntur libero ipsam corrupti porro suscipit corporis expedita! Iste voluptatibus voluptate velit cumque accusamus ut id harum illo magnam, ex incidunt labore rem ipsam exercitationem at. Velit aperiam tempora perferendis quibusdam fugit quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim voluptates, ratione repellat est doloremque odit soluta atque aspernatur amet inventore a recusandae optio voluptatibus dolores. Voluptates fuga facilis non est delectus soluta inventore ea laboriosam earum necessitatibus fugiat culpa nulla libero, sit, officiis doloribus ad quia reprehenderit excepturi nobis quo?</p>

                <br />
                <p className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum suscipit id aperiam laudantium cumque. Esse nesciunt ea consequuntur libero ipsam corrupti porro suscipit corporis expedita! Iste voluptatibus voluptate velit cumque accusamus ut id harum illo magnam, ex incidunt labore rem ipsam exercitationem at. Velit aperiam tempora perferendis quibusdam fugit quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim voluptates, ratione repellat est doloremque odit soluta atque aspernatur amet inventore a recusandae optio voluptatibus dolores. Voluptates fuga facilis non est delectus soluta inventore ea laboriosam earum necessitatibus fugiat culpa nulla libero, sit, officiis doloribus ad quia reprehenderit excepturi nobis quo?</p>

            </div>
        </div>
    )
}

export default HomePage