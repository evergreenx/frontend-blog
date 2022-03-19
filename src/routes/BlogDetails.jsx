import React from "react";
import { useParams } from "react-router-dom";
import useSwr from "swr";
import { formatDistance, parseJSON, subDays } from "date-fns";

import ReactMarkdown from 'react-markdown'
const BlogDetails = () => {
  let params = useParams();

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error, mutate, isValidating } = useSwr(
    `http://localhost:1337/api/posts/${params.id}`,
    fetcher
  );

  return (
    <>
      {!data && <div>Loading...</div>}
      {error && <div>Failed to load</div>}
      <div className="container p-4 w-full mx-auto">
        <div className="header-content flex justify-center items-center  flex-col">
          <p className="date text-sm font-semibold capitalize">
            {data &&
              formatDistance(
                parseJSON(data.data.attributes.publishedAt),
                subDays(new Date(), 1)
              )}
          </p>

          <div className="title">
            <h1 className="text-3xl font-bold text-gray-800">
              {data && data.data.attributes.title}
            </h1>
          </div>

          <div className="tagline">
            <h4 className="text-base  text-gray-400 font-bold text-gray-800">
              {data && data.data.attributes.headline}
            </h4>
          </div>


          <div className="content py-5">


            
          </div>

          <div className="text-gray-500">
                {data && <ReactMarkdown>
                    {data.data.attributes.body}
                    
                     </ReactMarkdown>}

                    </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
