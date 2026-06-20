import { useParams } from "react-router-dom"

const UserPage = () => {
    const params = useParams()
    return (
        <div>
            <h1
                className="text-center text-xl text-white">UserPage
                <span className="text-3xl text-red-900 font-bold mx-5">{params.id}</span>
            </h1>
        </div>
    )
}

export default UserPage