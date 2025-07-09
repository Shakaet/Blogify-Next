import Image from "next/image";
import MobileMenu from "./component/MobileMenu";
import Filtering from "./component/filtering";
import fs from 'fs';
import path from 'path';
import AllData from "./component/AllData";
import SortSelect from "./component/SortSelect";





export default function Home({ searchParams }) {

    // console.log(searchParams)
    const category = searchParams?.category || null;
    const sort = searchParams?.sort || "latest"; // default value

  const blogsPath = path.join(process.cwd(), 'app', 'data.json');
  const blogsData = fs.readFileSync(blogsPath, 'utf-8');
  const blogs = JSON.parse(blogsData);

  const categoriesPath = path.join(process.cwd(), 'app', 'categories.json');
  const categoriesData = fs.readFileSync(categoriesPath, 'utf-8');
  const categories = JSON.parse(categoriesData);

  let filteredBlogs = category
    ? blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase())
    : blogs;
    
    if (sort === "latest") {
  filteredBlogs = filteredBlogs.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
} else if (sort === "oldest") {
  filteredBlogs = filteredBlogs.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
}

 
  return (
    <div>
     
    <section className="py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
               
                <div className="lg:w-2/3 lg:pr-12">
                   
                    <div className="mb-6 flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Articles</h2>
                        <SortSelect category={category} sort={sort} />
                    </div>


                    {
                      filteredBlogs.map((data,index)=><AllData key={index} data={data}></AllData>)
                    }

                    
                 

                  
                    <div className="text-center">
                        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                            Load more
                        </button>
                    </div>
                </div>


                <Filtering currentCategory={category}></Filtering>

                
                
            </div>
        </div>
    </section>
    
   
   <MobileMenu></MobileMenu>
    </div>
  );
}
