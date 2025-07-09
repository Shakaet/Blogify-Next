import React from 'react'
import fs from 'fs';
import path from 'path';
import MobileMenu from '@/app/component/MobileMenu';
import Filtering from '@/app/component/Filtering';
import BlogDescription from '@/app/component/BlogDescription';
import Image from 'next/image';

const page = ({params}) => {
     const filePath = path.join(process.cwd(), 'app','data.json');
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const blogs = JSON.parse(jsonData);
    

    let {title}=params
    console.log(title)
    const decodedTitle = decodeURIComponent(title);
    // console.log(blogs.length)


  let specificData = blogs.find((data) => data.title === decodeURIComponent(title));


   console.log(specificData.title)


    
  return (
    <div>


      <div className="bg-white text-gray-900">
    
   

   
    <section className="py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
             
                <div className="lg:w-2/3 lg:pr-12">
                   
                    <div className="container mx-auto px-4 py-8 max-w-4xl">
                        <div className="mb-8">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                {specificData?.title}</h1>

                            <div className="flex items-center mb-6">
                                {/* <img src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75" alt="Sumit Saha" className="h-12 w-12 rounded-full mr-4"> */}
                                 {specificData?.author?.avatar && (
                                            <Image className='h-6 w-6 rounded-full mr-2'
                                                src={specificData?.author?.avatar}
                                                alt="Author"
                                                width={150}
                                                height={100}
                                            />
                                           )}
                                <div>
                                    <div className="flex items-center">
                                        <span className="font-medium mr-2">{specificData?.author?.name}</span>
                                        <button className="text-green-600 text-sm font-medium">Follow</button>
                                    </div>
                                    <div className="flex items-center text-gray-500 text-sm mt-1">
                                        <span>{specificData?.date}</span>
                                        <span className="mx-1">·</span>
                                        <span className="bg-gray-100 px-2 py-1 rounded-full">{specificData?.category}</span>
                                    </div>
                                </div>
                            </div>

                         
                        </div>



                       
                        <div className="article-content">
                          <BlogDescription html={specificData?.description} />
                      
                        </div>


                        <section className="bg-gray-50 py-12 mt-12">
                            <div className="container mx-auto px-4 max-w-4xl">
                                <h3 className="text-xl font-bold mb-6">Recommended Blogs</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <article className="mb-10 pb-10 border-b border-gray-200">
                                        <div className="flex items-center mb-4">
                                            {/* <img src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75" alt="Author" */}
                                               
                                            <span className="text-sm font-medium">Sumit Saha</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">The Ultimate
                                            Guide to Tailwind CSS v4: What's New and Improved</h2>
                                        <p className="text-gray-700 mb-4">Discover the latest features and improvements in
                                            Tailwind CSS v4 and how they can enhance your web development workflow.</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <span>May 14</span>
                                                <span className="mx-1">·</span>
                                                <span className="bg-gray-100 px-2 py-1 rounded-full">Web Development</span>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </article>

                                    <article className="mb-10 pb-10 border-b border-gray-200">
                                        <div className="flex items-center mb-4">
                                            {/* <img src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75" alt="Author" */}
                                                {/* className="h-6 w-6 rounded-full mr-2"> */}
                                            <span className="text-sm font-medium">Sumit Saha</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">The Ultimate
                                            Guide to Tailwind CSS v4: What's New and Improved</h2>
                                        <p className="text-gray-700 mb-4">Discover the latest features and improvements in
                                            Tailwind CSS v4 and how they can enhance your web development workflow.</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <span>May 14</span>
                                                <span className="mx-1">·</span>
                                                <span className="bg-gray-100 px-2 py-1 rounded-full">Web Development</span>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </article>

                                    <article className="mb-10 pb-10 border-b border-gray-200">
                                        <div className="flex items-center mb-4">
                                            {/* <img src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75" alt="Author" */}
                                                {/* className="h-6 w-6 rounded-full mr-2"> */}
                                            <span className="text-sm font-medium">Sumit Saha</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">The Ultimate
                                            Guide to Tailwind CSS v4: What's New and Improved</h2>
                                        <p className="text-gray-700 mb-4">Discover the latest features and improvements in
                                            Tailwind CSS v4 and how they can enhance your web development workflow.</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <span>May 14</span>
                                                <span className="mx-1">·</span>
                                                <span className="bg-gray-100 px-2 py-1 rounded-full">Web Development</span>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </article>

                                    <article className="mb-10 pb-10 border-b border-gray-200">
                                        <div className="flex items-center mb-4">
                                            {/* <img src="https://learnwithsumit.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstructor.de111715.jpg&w=828&q=75" alt="Author" */}
                                                {/* className="h-6 w-6 rounded-full mr-2"> */}
                                            <span className="text-sm font-medium">Sumit Saha</span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-2 hover:underline cursor-pointer">The Ultimate
                                            Guide to Tailwind CSS v4: What's New and Improved</h2>
                                        <p className="text-gray-700 mb-4">Discover the latest features and improvements in
                                            Tailwind CSS v4 and how they can enhance your web development workflow.</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center text-gray-500 text-sm">
                                                <span>May 14</span>
                                                <span className="mx-1">·</span>
                                                <span className="bg-gray-100 px-2 py-1 rounded-full">Web Development</span>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

                {/* <!-- Sidebar --> */}
               <Filtering></Filtering>
            </div>
        </div>
    </section>

    {/* <!-- Mobile Bottom Navigation --> */}
   <MobileMenu></MobileMenu>
</div>

   

    </div>
  )
}

export default page