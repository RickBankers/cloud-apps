import Link from 'next/link';
import { navbar } from './components/Navbar';
import { Navbar } from '../components/Navbar';

export default function Home() {

    return (
        <div className="p-6">
            <Navbar />
            <h1 className="text-center text-3xl font-bold mb-6 text-green-400">
                Help
            </h1>

        </div>
    );
}