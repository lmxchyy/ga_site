import React from "react"
import Link from "gatsby-link"
import Counter from "./counter"
export default function Home() {
  return <div style ={{color: 'green'}}> 
            <h1>Hello world,这是我的第一Gatsby网站项目</h1>
            <p>this is a prograph</p>
           <Link to="/about">about</Link>
           <br />
           <Link to="/company/history/"> history</Link>
           <br />
           <Counter color="red"/>           
        </div>
}
