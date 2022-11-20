import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="item">
                    <h3>what is cors?</h3>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
                <div className="item">
                    <h3>Why are you using firebase?</h3>
                    <p>You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login. This tutorial gets you started with Firebase Authentication by showing you how to add email address and password sign-in to your app.</p>
                </div>
                <div className="item">
                    <h3> How does the private route work?</h3>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </div>
                <div className="item">
                    <h3>What is Node JS?</h3>
                    <p>It is a used as backend service where javascript works on the server-side of the application.This way javascript is used on both frontend and backend.Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive..
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;