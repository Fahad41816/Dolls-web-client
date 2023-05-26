import React from 'react';

const Blog = () => {

    document.title = "DollVibe || Blog"
    return (  

        <div data-aos="zoom-in">    
    <div className='text-center  mb-28  mt-20 flex flex-col items-center gap-1 justify-center'>
        <div className="collapse rounded-lg  w-2/3 bg-slate-200">
            <input type="checkbox" />
            <div className="collapse-title text-start text-xl font-medium">
               1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </div>
            <div className="collapse-content text-start">
                Ans: <br />
                 <span className='font-bold '>access token</span> : An access token is a credential that is issued by an authentication server after a user successfully authenticates. It represents the user's authorization to access protected resources, <br />

                 <span className='font-bold '> refresh token</span>: A refresh token is a long-lived credential that is also issued by the authentication server during the authentication process. It is used to obtain a new access token when the current access token expires.
            </div>
        </div> 
        <div className="collapse rounded-lg w-2/3   bg-slate-200">
            <input type="checkbox" />
            <div className="collapse-title text-start text-xl font-medium">
                2.Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content text-start">
               Ans: SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
            </div>
        </div> 
        <div className="collapse  rounded-lg w-2/3 bg-slate-200">
            <input type="checkbox" />
            <div className="collapse-title  text-start text-xl font-medium">
                3. What is express js? What is Nest JS?
            </div>
            <div className="collapse-content text-start">
            Ans: Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI
            </div>
        </div> 
        <div className="collapse rounded-lg w-2/3 bg-slate-200">
            <input type="checkbox" />
            <div className="collapse-title text-start text-xl font-medium">
                4. What is MongoDB aggregate and how does it work ?
            </div>
            <div className="collapse-content text-start">
            Ans: a way of processing a large number of documents in a collection by means of passing them through different stages
            </div>
        </div> 
      
    </div>
    </div>     
    );
};

export default Blog;