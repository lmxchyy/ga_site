import React from "react"
import Link from "gatsby-link"
import Counter from "./counter"
import { graphql } from "gatsby"
export default function Home({data}) {
  return <div style ={{color: 'green'}}> 
            <h1>Hello world,这是我的第一Gatsby网站项目</h1>
            <p>this is a prograph</p>
            <p>{data.site.siteMetadata.title}</p>
            <h3>{data.site.siteMetadata.author}</h3>
           <Link to="/about">about</Link>
           <br />
           <Link to="/company/history/"> history</Link>
           <br />
           <Counter color="red"/>           
        </div>
}

export const query = graphql`
  query MyFilesQuery{
    site {
      siteMetadata{
        title
        author
      }
    }
  }
`