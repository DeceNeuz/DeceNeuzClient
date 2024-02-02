import googleLogo from "@/public/devicon_google.png";
import watchImg from './assets/apple-watch.png'
import Image from 'next/image'

export default function ProductCard (){
    return (


<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    {/* <a href="#">
        <img className="p-8 rounded-t-lg" src="{require('./assets/apple-watch.png')}" alt="product image" />
    </a> */}
    <div className="text-center">
      <Image 
        src="/download.jpeg"
        alt="My Image"
        width={350}
        height={200}
        className="mx-auto my-4 rounded"
      />
      </div>
    
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">5 BIGGEST AUTOMOTIVE EXHIBITIONS</h5>
        </a>
       
        
            
            <span className="bg-white-100 text-orange-500 ml-0 text-sm font-semibold px-0 py-0.5 rounded dark:bg-blue-200 dark:text-orange-500 ">AUTHOR</span>
        
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat sint laborum odit, tempore quibusdam quo aliquam voluptas voluptates omnis!</p>
        <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white mt-3">40mins ago</span>
            <a href="#" className="text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">VISIT ARTICLE</a>
        </div>
    </div>
</div>

    )
} 