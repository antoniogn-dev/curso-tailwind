import TailwindSolidIcon from '@iconify-react/flowbite/tailwind-solid';
import HtmlIcon from '@iconify-react/material-icon-theme/html';
import ReactIcon from '@iconify-react/material-icon-theme/react';
import { Link } from 'react-router-dom';

const CardResponsivePage = () => {
    return (
        <div className='h-screen flex justify-center items-center bg-linear-to-b from-rose-900 to-black'>
            <section className='bg-[#221E1E] text-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 mx-14'>
                <div className='w-48 h-48 rounded-full overflow-hidden border-[#221E1E] -mt-32 border-[12.5px] sm:w-82.5 sm:h-72.5 sm:rounded-[20px] sm:border-0 transition-all duration-300 ease-in-out md:mt-6.25 md:-ml-15 md:mb-6.25'>
                    <img className='w-full h-full object-cover' src="/images/pantera-rosa.png" alt="pantera-rosa" />
                </div>
                <div className='mt-5 flex flex-col items-start text-left max-w-lg'>
                    <h2 className='text-3xl font-bold'>Capibara</h2>
                    <span className='text-lg opacity-70'>Tailwing</span>
                    <p className='text-sm mt-2 text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quaerat excepturi ipsa architecto. Esse cum ullam modi, ipsa perferendis quibusdam animi sunt praesentium corporis officia ut alias voluptatem adipisci. Voluptate!</p>
                    <div className='flex mt-4 gap-3 text-start w-full'>
                        <Link className='w-12.5 h-12.5 flex items-center justify-center bg-[#363234] rounded-full hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out'>
                            <TailwindSolidIcon height="24" />
                        </Link>
                        <Link className='w-12.5 h-12.5 flex items-center justify-center bg-[#363234] rounded-full hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out'>
                            <HtmlIcon height="24" />
                        </Link>
                        <Link className='w-12.5 h-12.5 flex items-center justify-center bg-[#363234] rounded-full hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out'>
                            <ReactIcon height="24" />
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default CardResponsivePage