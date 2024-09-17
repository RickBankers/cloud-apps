import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className='container mx-auto flex justify-between items-center'>
                <a href='' className='text-2xl font-bold'>
                    Cloud_Apps
                </a>
                <div>
                    <Link href='/' className='mx-2 hover:text-gray-300'>
                        Home
                    </Link>
                    <Link href='/add' className='mx-2 hover:text-gray-300'>
                        New_CloudApp
                    </Link>
                    <Link href='/help' className='mx-2 hover:text-gray-300'>
                        Help
                    </Link>
                </div>
            </div>
        </nav>
    );
};