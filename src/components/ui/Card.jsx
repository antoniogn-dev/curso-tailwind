
const Card = ({ title, description, active }) => {

    return (
        <div className="relative w-75 h-100 m-10 flex justify-center items-center transition-all duration-500 hover:bg-primary cursor-pointer bg-[#161616] hover:z-50 hover:shadow-neon group overflow-hidden">

            {active && (
                <>
                    <span className="absolute block top-0 left-0 w-full h-1 animate-to-right bg-linear-gradient-to-right"></span>

                    <span className="absolute block -top-full right-0 w-1 h-full animate-to-bottom bg-linear-gradient-to-bottom" style={{animationDelay: "0.5s"}}></span>
                    
                    <span className="absolute block bottom-0 -right-full w-full h-1 animate-to-left bg-linear-gradient-to-left" style={{animationDelay: "1s"}}></span>

                    <span className="absolute block -bottom-full left-0 w-1 h-full animate-to-top bg-linear-gradient-to-top" style={{animationDelay: "1.5s"}}></span>
                </>
            )}

            <div className="relative w-full h-full p-10 flex flex-col items-center justify-center text-center text-primary group-hover:text-black transition-colors duration-300">
                <h2 className="text-3xl mb-5 font-bold">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    )
}

export default Card