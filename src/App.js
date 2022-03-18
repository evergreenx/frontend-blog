import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout.js";
import { Container } from "./components/Styles/Container.styled";

import useSwr from "swr";
function App() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error , mutate, isValidating  } = useSwr("http://localhost:1337/api/posts", fetcher);
  console.log(data?.data);

  return (
    <Layout>
      <Container>
        <div className="App">Blog Content goes here</div>

        {!data && <div>Loading...</div>}
        {error && <div>Failed to load</div>}

        {data &&
          data.data.map((post) => (
            <div key={post.attributes.slug}>
              <h1>{post.attributes.title}</h1>
              <p>{post.attributes.cbody}</p>
            </div>
          ))}


<main class="py-6">
  
  <div class="mb-12">
    <div class="flex flex-col md:flex-row w-full lg:w-10/12">

  
    <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
      <a class="bg-gray-100" href="/blog/2018-12-29-writing-with-markdown/">
        <img width="640" height="360" class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" alt="Writing With Markdown" src="/assets/images/unsplash-CTivHyiTbFw-640x360.jpeg"></a>
    </div>
  

  <div class="flex-1">
    <div class="flex items-center">
      
        <div class="flex ml-4">
          
            





<div class="flex items-center mr-2 -ml-4">
  
    <img width="28" height="28" class="rounded-full border-white border-2" src="/assets/images/author/sage-kirk.jpg" alt="Sage Kirk">
  

  
</div>

          
            





<div class="flex items-center mr-2 -ml-4">
  
    <img width="28" height="28" class="rounded-full border-white border-2" src="/assets/images/author/mike-vance.jpg" alt="Mike Vance">
  

  
</div>

          
        </div>
      
      <div class="text-sm font-medium text-gray-700">29 December 2018</div>
    </div>

    <a href="/blog/2018-12-29-writing-with-markdown/" class="hover:text-green-400">
      <h2 class="text-2xl font-semibold mb-1">Writing With Markdown</h2>
    </a>

    <p class="text-base font-light text-gray-600 mb-4">Learn how to use Markdown to write blog posts. Understand front-matter and how it is used in templates.</p>

    
      <div class="mb-2">
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/development">Development</a>
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/javascript">Javascript</a>
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/web-design">Web Design</a>
        
      </div>
    


  </div>
</div>
  </div>
  
  <div class="mb-12">
    <div class="flex flex-col md:flex-row w-full lg:w-10/12">

  
    <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
      <a class="bg-gray-100" href="/blog/2018-12-29-styling-css/">
        <img width="640" height="360" class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" alt="Styling CSS" src="https://source.unsplash.com/INHtWKpBTsA/640x360"></a>
    </div>
  

  <div class="flex-1">
    <div class="flex items-center">
      
        <div class="flex ml-4">
          
            





<div class="flex items-center mr-2 -ml-4">
  
    <img width="28" height="28" class="rounded-full border-white border-2" src="/assets/images/author/mike-vance.jpg" alt="Mike Vance">
  

  
</div>

          
        </div>
      
      <div class="text-sm font-medium text-gray-700">29 December 2018</div>
    </div>

    <a href="/blog/2018-12-29-styling-css/" class="hover:text-green-400">
      <h2 class="text-2xl font-semibold mb-1">Styling CSS</h2>
    </a>

    <p class="text-base font-light text-gray-600 mb-4">Learn how to use Markdown to write blog posts. Understand front-matter and how it is used in templates.</p>

    
      <div class="mb-2">
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/development">Development</a>
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/javascript">Javascript</a>
        
      </div>
    


  </div>
</div>
  </div>
  
  <div class="mb-12">
    <div class="flex flex-col md:flex-row w-full lg:w-10/12">

  
    <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
      <a class="bg-gray-100" href="/blog/2018-12-29-hosting-your-static-site/">
        <img width="640" height="360" class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" alt="Hosting Your Static Site" src="https://source.unsplash.com/y3PdLg_zSDs/640x360"></a>
    </div>
  

  <div class="flex-1">
    <div class="flex items-center">
      
        <div class="flex ml-4">
          
            





<div class="flex items-center mr-2 -ml-4">
  
    <img width="28" height="28" class="rounded-full border-white border-2" src="/assets/images/author/sage-kirk.jpg" alt="Sage Kirk">
  

  
</div>

          
            





          
        </div>
      
      <div class="text-sm font-medium text-gray-700">29 December 2018</div>
    </div>

    <a href="/blog/2018-12-29-hosting-your-static-site/" class="hover:text-green-400">
      <h2 class="text-2xl font-semibold mb-1">Hosting Your Static Site</h2>
    </a>

    <p class="text-base font-light text-gray-600 mb-4">Hosting your website as a static site will improve performance and improve security.</p>

    
      <div class="mb-2">
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/hosting">Hosting</a>
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/development">Development</a>
        
      </div>
    


  </div>
</div>
  </div>
  
  <div class="mb-12">
    <div class="flex flex-col md:flex-row w-full lg:w-10/12">

  
    <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
      <a class="bg-gray-100" href="/blog/2018-12-20-designing-your-brand/">
        <img width="640" height="360" class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" alt="Designing Your Brand" src="https://source.unsplash.com/YmQ0-nmWcV0/640x360"></a>
    </div>
  

  <div class="flex-1">
    <div class="flex items-center">
      
      <div class="text-sm font-medium text-gray-700">19 December 2018</div>
    </div>

    <a href="/blog/2018-12-20-designing-your-brand/" class="hover:text-green-400">
      <h2 class="text-2xl font-semibold mb-1">Designing Your Brand</h2>
    </a>

    <p class="text-base font-light text-gray-600 mb-4">Branding is an intrinsic part of your companies success, learn why your brand matters.</p>

    
      <div class="mb-2">
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/branding">Branding</a>
        
      </div>
    


  </div>
</div>
  </div>
  
  <div class="mb-12">
    <div class="flex flex-col md:flex-row w-full lg:w-10/12">

  
    <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
      <a class="bg-gray-100" href="/blog/2018-12-20-optimizing-your-website/">
        <img width="640" height="360" class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out" alt="Optimizing Your Website" src="https://source.unsplash.com/MS7KD9Ti7FQ/640x360"/></a>
    </div>
  

  <div class="flex-1">
    <div class="flex items-center">
      
        <div class="flex ml-4">
          
            





<div class="flex items-center mr-2 -ml-4">
  
    <img width="28" height="28" class="rounded-full border-white border-2" src="/assets/images/author/sage-kirk.jpg" alt="Sage Kirk" />
  

  
</div>

          
        </div>
      
      <div class="text-sm font-medium text-gray-700">19 December 2018</div>
    </div>

    <a href="/blog/2018-12-20-optimizing-your-website/" class="hover:text-green-400">
      <h2 class="text-2xl font-semibold mb-1">Optimizing Your Website</h2>
    </a>

    <p class="text-base font-light text-gray-600 mb-4">Making sure your website runs fast and loads quickly is a fundamental part of the web design and seo process.</p>

    
      <div class="mb-2">
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/development">Development</a>
        
          <a class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out" href="/category/web-design">Web Design</a>
        
      </div>
    


  </div>
</div>
  </div>
  
</main>
      </Container>
    </Layout>
  );
}

export default App;
