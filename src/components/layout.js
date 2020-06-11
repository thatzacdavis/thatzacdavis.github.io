import PropTypes from "prop-types";
import React from "react";

import Twitter from "../../assets/twitter.svg";
import Twitch from "../../assets/twitch.svg";
import GitHub from "../../assets/github.svg";

import Header from "./header";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900">
            <Header />

            <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
                {children}
            </main>

            <footer className="bg-pink-600">
                <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
                    <p className="text-white">
                        Created by{` `}
                        <a
                            className="font-bold no-underline"
                            href="https://thatzacdavis.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Zac Davis
                        </a>
                        {` w/ `}
                        <a
                            className="font-bold no-underline"
                            href="https://gatsbyjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gatsby
                        </a>
                    </p>

                    <p>
                        <a 
                            aria-label="Zac Davis' Twitter" 
                            href="https://twitter.com/thatzacdavis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter className="inline m-1" />
                        </a>
                        <a
                            aria-label="Zac Davis' Twitch"
                            href="https://www.twitch.tv/thatzacdavis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitch className="inline m-1" />
                        </a>
                        <a
                            aria-label="Zac Davis' Github"
                            href="https://github.com/thatzacdavis"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHub className="inline m-1" />
                        </a>
                    </p>
                </nav>
            </footer>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
