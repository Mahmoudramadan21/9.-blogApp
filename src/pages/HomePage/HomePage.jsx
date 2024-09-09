import React, { useState } from 'react';
import "./HomePage.scss";
import { banner_image, search_icon } from '../../utils/images';
import { useBlogsContext } from '../../context/blogsContext';
import BlogList from '../../components/BlogsList/BlogsList';
import Title from '../../components/Title/Title';

const HomePage = () => {
    const { blogs, setSearchTerm, searchTerm, fetchBlogsFromSearch } = useBlogsContext();

    const [erroMsg, setErrorMsg] = useState("");

    const handleSearchTerm = (e) => {
        e.preventDefault();
        if ((e.target.value.replace(/[^\w\s]/gi, "")).length !== 0) {
            setSearchTerm(e.target.value);
            setErrorMsg("");
        } else {
            setErrorMsg("Invalid search term ...");
        }
    }

    const handleSearchResult = (e) => {
        e.preventDefault();
        fetchBlogsFromSearch(searchTerm);
    }

    return (
        <>
            <div className="hero-section-background">
                <div className="container">
                    <div className="container hero-content">
                        <h1 className="hero-heading">
                            A Beautiful Blog with No Images Required
                        </h1>
                        <form className="search-bar-container" onSubmit={(e) => handleSearchResult(e)}>
                            <input type="text" className="search-input" placeholder="Search here blog..."
                                onChange={(e) => handleSearchTerm(e)} />
                            <button className="search-btn">
                                <img src={search_icon} alt="Search icon" />
                            </button>
                        </form>
                        <span className="error">{erroMsg}</span>
                    </div>
                </div>
            </div>

            <section className='section'>
                <div className='container'>
                    <div className='section-content'>
                        <Title title="Blogs" color={"#0D1741"} />
                        {<BlogList blogs={blogs} />}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage