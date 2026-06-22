import StarRingBoldIcon from '@iconify-react/solar/star-ring-bold';

const TarjetaPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <section className='bg-linear-to-r from-[#EAB37C] to-[#FDA241] rounded-2xl p-4 flex gap-5'>
                <article className='flex flex-col justify-center gap-2'>
                    <section className='flex bg-[#FFF0E6] text-[#F18313] rounded-lg px-4 py-1 items-center'>
                        <StarRingBoldIcon height="1em" />
                        <button className="font-bold ml-2">New episode!</button>
                    </section>
                    <section className='flex flex-col'>
                        <span className='font-bold'>My hero Academia</span>
                        <span className='text-black/50 font-semibold'>S6 E22 - Friend</span>
                    </section>
                </article>
                <article className='relative flex items-end h-25'>
                    <img className='h-60 object-cover relative -bottom-4' src="images/imagen4.png" alt="modelo" />
                </article>
            </section>
        </div>
    )
}

export default TarjetaPage