import React from 'react';
import BlogDescription from './BlogDescription.jsx';
import Image from 'next/image';
import Link from 'next/link';








const AllData = ({ data }) => {
 

 
  return (
    <div>
      <article className="mb-10 pb-10 border-b border-gray-200">
        <div className="flex items-center mb-4">
          {/* <img src="..." alt="Author" className="h-6 w-6 rounded-full mr-2" /> */}
           {data?.author?.avatar && (
            <Image className='h-6 w-6 rounded-full mr-2'
                src={data.author.avatar}
                alt="Author"
                width={150}
                height={100}
            />
           )}
          <span className="text-sm font-medium">{data.author?.name}</span>
        </div>

        <Link
          href={`/blog/${data.title}`}
          className="text-xl font-bold mb-2 hover:underline cursor-pointer"
        >
          {data.title}
        </Link>

        <BlogDescription html={data.description} />

        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-500 text-sm">
            <span>{data.date}</span>
            <span className="mx-1">·</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">{data.category}</span>
          </div>

          <button className="text-gray-400 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </article>
    </div>
  );
};

export default AllData;
