import Card from "../components/ui/Card"

const datos = [
    {
        id: 1,
        title: "Card 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolore aliquid illum incidunt perferendis temporibus doloribus maiores doloremque, tempora, in, ullam nemo mollitia quia maxime neque ratione? Blanditiis harum porro ipsam possimus optio earum neque fugit eligendi cupiditate alias, amet, beatae repellendus animi saepe, laboriosam recusandae dicta atque tempore ex.",
        active: false
    },
    {
        id: 2,
        title: "Card 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolore aliquid illum incidunt perferendis temporibus doloribus maiores doloremque, tempora, in, ullam nemo mollitia quia maxime neque ratione? Blanditiis harum porro ipsam possimus optio earum neque fugit eligendi cupiditate alias, amet, beatae repellendus animi saepe, laboriosam recusandae dicta atque tempore ex.",
        active: true
    },
    {
        id: 3,
        title: "Card 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolore aliquid illum incidunt perferendis temporibus doloribus maiores doloremque, tempora, in, ullam nemo mollitia quia maxime neque ratione? Blanditiis harum porro ipsam possimus optio earum neque fugit eligendi cupiditate alias, amet, beatae repellendus animi saepe, laboriosam recusandae dicta atque tempore ex.",
        active: false
    }
]

const TarjetaNeonPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center container mx-auto">
            <div className="relative flex items-center justify-center flex-wrap gap-5">
                {
                    datos.map(item => (
                        <Card key={item.id} title={item.title} description={item.description} active={item.active}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TarjetaNeonPage