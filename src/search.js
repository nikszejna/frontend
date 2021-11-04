const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">youtube url:</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="youtube video id"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);




export default SearchBar;