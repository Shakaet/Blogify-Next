import Image from "next/image";
import MobileMenu from "./component/MobileMenu";
import Filtering from "./component/filtering";
import fs from 'fs';
import path from 'path';
import AllData from "./component/AllData";



export default function Home() {

  const filePath = path.join(process.cwd(), 'app','data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(jsonData);

  console.log(blogs.length)
  return (
    <div>
     
    <section className="py-10 border-t border-gray-200">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
               
                <div className="lg:w-2/3 lg:pr-12">
                   
                    <div className="mb-6 flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Articles</h2>
                        <div>
                            <label for="sort" className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
                            <select id="sort" name="sort" className="border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500">
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                                <option value="popular">Most Popular</option>
                                <option value="read-time">Shortest Read Time</option>
                            </select>
                        </div>
                    </div>


                    {
                      blogs.map((data,index)=><AllData key={index} data={data}></AllData>)
                    }

                    
                 

                  
                    <div className="text-center">
                        <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                            Load more
                        </button>
                    </div>
                </div>


                <Filtering></Filtering>

                
                
            </div>
        </div>
    </section>
    
   
   <MobileMenu></MobileMenu>
    </div>
  );
}
