import React from "react"
import Link from "gatsby-link"
export default function Home() {
  return <div style ={{color: 'green'}}> 
            <h1>Hello world</h1>
            <p>this is a prograph</p>
           <Link to="/about">about</Link>
           <br />
           <Link to="/company/history/"> history</Link>
           <br />
           <Link to="/counter"> counter</Link>
        </div>
}
