import React from "react";
import Content from './Components/Content/Content.jsx';
import Layout from  './Components/Layout/Layout.jsx';
import "./App.scss";

const App = () => {
    return (
        <div className="app">
            <Layout>
                <Content/>
            </Layout>
        </div>
    )
}

export default App;