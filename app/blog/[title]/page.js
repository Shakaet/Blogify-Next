import React from 'react'
import fs from 'fs';
import path from 'path';

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
    <div>page</div>
  )
}

export default page