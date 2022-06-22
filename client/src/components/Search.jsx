import React from 'react';

export default function Searched({ searched, setSearched, handleSearch }) {
  return (
      <form action="/" method="get">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search Anime</span>
      </label>
      <input
          value={searched}
          onInput={e => setSearched(e.target.value)}
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s"
      />
      <button type="submit" className="submit" onSubmit={e => handleSearch(e)}>Search</button>
    </form>
  )
}