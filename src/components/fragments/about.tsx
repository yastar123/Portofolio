import Image from 'next/image'
export default function About() {
    return (
        <div className='max-w-4xl mx-auto my-36 md:mt-64 px-4'>
            <div className='flex justify-between items-center'>
                <div className='text-xl md:text-2xl font-bold text-white'>
                    About Me
                </div>
                <div className='rounded-full'>
                    <Image src="/me.jpg" alt="my photo" width={80} height={80} className='rounded-full' />
                </div>
            </div>
            <div className='my-10'>
                <p className='text-white text-justify'>
                    I am a Fullstack Developer with expertise in both front-end and back-end development, specializing in Next.js for building modern, high-performance web applications. My skills span HTML, CSS, JavaScript, API integration, and responsive design, allowing me to create optimized user experiences through server-side rendering (SSR) and static site generation (SSG).
                </p>
                <p className='mt-6 text-white text-justify'>
                    With experience in managing databases, server integration, and web security, I deliver scalable and secure solutions. My roles in various projects and organizations have refined my approach to building reliable, user-focused websites that align with client and organizational goals.
                </p>
            </div>
        </div>
    )
}