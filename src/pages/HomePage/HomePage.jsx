import React, { useState } from 'react';
import "./HomePage.scss";
import { search_icon } from '../../utils/images';
import { useBlogsContext } from '../../context/blogsContext';
import BlogList from '../../components/BlogsList/BlogsList';
import Title from '../../components/Title/Title';

const HomePage = () => {
    const { blogs, setSearchTerm, searchTerm, fetchBlogsFromSearch } = useBlogsContext();
    const [errorMsg, setErrorMsg] = useState("");

    const handleSearchInput = (e) => {
        e.preventDefault();
        const inputValue = e.target.value.trim().replace(/[^\w\s]/gi, "");
        if (inputValue.length !== 0) {
            setSearchTerm(inputValue);
            setErrorMsg("");
        } else {
            setErrorMsg("Invalid search term ...");
        }
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        fetchBlogsFromSearch(searchTerm);
    }

    return (
        <main>
            <section className="hero">
                <div className="hero__content">
                    <h1 className="hero__title">
                        A Beautiful Blog with No Images Required
                    </h1>

                    <form className="search" onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            className="search__input"
                            placeholder="Search here blog..."
                            onChange={handleSearchInput}
                        />
                        <button className="search__button">
                            <img src={search_icon} alt="Search icon" />
                        </button>
                    </form>
                    {errorMsg && <span className="search__error">{errorMsg}</span>}
                </div>
            </section>

            <section id="blogs" className="blogs">
                <div className="container">
                    <div className="blogs__content">
                        <Title title="Blogs" />
                        <BlogList blogs={blogs} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;
