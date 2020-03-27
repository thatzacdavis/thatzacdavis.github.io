import React from "react"
import { Link } from "gatsby"
import Twitter from "../../assets/twitter.svg"
import Twitch from "../../assets/twitch.svg"
import GitHub from "../../assets/github.svg"

export default () => (
<header className="grid grid-cols-4 gap-4 flex items-baseline">
    <div className="col-span-3">
        <span className="site-title mr-6">thatzacdavis</span>
        <a href="https://twitter.com/thatzacdavis"><Twitter className="inline m-1" /></a>
        <a href="https://www.twitch.tv/thatzacdavis"><Twitch className="inline m-1" /></a>
        <a href="https://github.com/thatzacdavis"><GitHub className="inline m-1" /></a>
    </div>
    <div className="col-span-1 relative">
        <Link className="p-2" to="/">Home</Link>
        <Link className="p-2" to="/about/">About</Link>  
    </div>
</header>
);
