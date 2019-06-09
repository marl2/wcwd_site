import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

function ThirdPage() {
    return (
        <Layout>
            <h1> This is the third page</h1>
            
        <Link to="/">Home</Link>
        </Layout>
    )
}

export default ThirdPage