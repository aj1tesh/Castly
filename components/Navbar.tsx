'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

interface NavbarProps {
    user?: {
        id: string;
        name: string;
        email: string;
        image?: string;
    } | null;
}

const Navbar = ({ user }: NavbarProps) => {
    const router = useRouter();
    
    const handleLogout = async () => {
        try {
            await authClient.signOut();
            router.push('/sign-in');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
    
    return (
        <header className='navbar'>
            <nav>
                <Link href="/">
                    <Image src="/assets/icons/logo.svg" alt="logo" width={32} height={32}/>
                    <h1>Castly</h1>
                </Link>

                {user ? (
                    <figure>
                        <button onClick={() => router.push(`/profile/${user.id}`)}>
                            <Image 
                                src={user.image || "/assets/images/dummy.jpg"} 
                                alt="user" 
                                width={32} 
                                height={32} 
                                className='rounded-full aspect-square object-cover'
                            />
                        </button>
                        <button className='cursor-pointer' onClick={handleLogout}>
                            <Image src="/assets/icons/logout.svg" alt="logout" width={24} height={24} className='rotate-180'/>
                        </button>
                    </figure>
                ) : (
                    <Link href="/sign-in" className="sign-in-link">
                        Sign In
                    </Link>
                )}
            </nav>
        </header>
    )
}

export default Navbar