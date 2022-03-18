import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout.js";
import { Container } from "./components/Styles/Container.styled";
import { formatDistance, subDays } from 'date-fns'

import useSwr from "swr";
function App() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, mutate, isValidating } = useSwr(
    "http://localhost:1337/api/posts",
    fetcher
  );
  console.log(data?.data);

  return (
    <Layout>
      {/* // <Container> */}

      {!data && <div>Loading...</div>}
      {error && <div>Failed to load</div>}

<div className="container p-4"> 
{data &&
        data.data.map((post) => (
          <div key={post.attributes.slug}>
            <div class="mb-12">
              <div class="flex flex-col md:flex-row w-fulllg:w-10/12">
                <div class="md:mr-4 mb-2 md:mb-0 md:w-4/12 ">
                  <a class="bg-gray-100" href="/blog/2018-12-29-styling-css/">
                    <img
                      width="640"
                      height="360"
                      class="rounded mb-3 hover:opacity-70 transition duration-300 ease-in-out"
                      alt="Styling CSS"
                      // src={
                      //   post.attributes?.cover_image.url
                      // }
                    />
                  </a>
                </div>

                <div class="flex-1">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-gray-700">
                     {
                     }

                     {
                       formatDistance(subDays(new Date(post.attributes.publishedAt), 3), new Date(), { addSuffix: true })
                     }
                    </div>
                  </div>

                  <a
                    href="/blog/2018-12-29-styling-css/"
                    class="hover:text-green-400"
                  >
                    <h2 class="text-2xl font-semibold mb-1">
                      {post.attributes.title}
                    </h2>
                  </a>

                  <p class="text-base font-light text-gray-600 mb-4">
                    {post.attributes.body}
                  </p>

                  <div class="mb-2">
                    <a
                      class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
                      href="/category/development"
                    >
                      Development
                    </a>

                    <a
                      class="p-1 px-3 mr-1 mb-1 inline-block text-xs font-mono rounded bg-green-200 text-green-800 hover:bg-blue-200 hover:text-blue-800 transition duration-300 ease-in-out"
                      href="/category/javascript"
                    >
                      Javascript
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

</div>
     
      <main class="py-6"></main>
      {/* </Container> */}
    </Layout>
  );
}

export default App;
