import { FaGithub, FaXTwitter, FaSteam, FaItchIo } from 'react-icons/fa6'

import Social from './components/Social.tsx'
import Link from './components/Link.tsx'
import Foldout from './components/Foldout.tsx'
import Header from './components/Header.tsx'

import profilePic from './assets/profile.jpg'
import spacePic from './assets/space.jpg'
import firePic from './assets/fire.jpg'
import animeGif from './assets/anime_preview.gif'

function App() {
    return (
        <>
            <div className='relative min-h-screen overflow-hidden font-poppins antialiased bg-bg text-txt'>
                <div className='relative z-20 flex justify-center px-4 pt-[10vh] pb-6'>
                    <div className='w-full max-w-md space-y-6'>

                        {/* Header */}
                        <div className="flex flex-col items-center text-center space-y-2">
                            <img
                                src={profilePic}
                                alt='Profile Picture'
                                width={192}
                                height={192}
                                className='rounded-full border-3 border-primary'
                            />

                            <h1 className='text-name text-2xl font-bold'>John Doe</h1>
                            <p className='text-description text-sm'>I am, the one and only, John Doe</p>

                            <div className='flex space-x-4 pt-2'>
                                <Social icon={<FaGithub />} tooltip='GitHub' url='https://github.com/slushyrh' />
                                <Social icon={<FaXTwitter />} tooltip='Twitter / X' url='https://x.com/slushyrh' />
                                <Social icon={<FaItchIo />} tooltip='Itch.io' url='https://slushyrh.itch.io' />
                                <Social icon={<FaSteam />} tooltip='Steam' url='https://store.steampowered.com/developer/slushyrh' />
                            </div>
                        </div>

                        {/* Main Body */}
                        <div className='flex flex-col space-y-4'>
                            <Header title='Hello' />
                            <Link title='Link' url='https://slushyrh.dev' />
                            
                            <Foldout title='Foldout' bgImg={spacePic}>
                                <Link title='Hidden Link 1' url='https://slushyrh.dev' />
                                <Link title='Hidden Link 2' url='https://slushyrh.dev' />
                            </Foldout>

                            <Header title='Cool Links' />
                            <Link title='Antoher Link' url='https://slushyrh.dev' />
                            <Link title='Link With Image' bgImg={firePic} url='https://slushyrh.dev' />
                            <Link title='Link With Gif' bgImg={animeGif} url='https://slushyrh.dev' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
