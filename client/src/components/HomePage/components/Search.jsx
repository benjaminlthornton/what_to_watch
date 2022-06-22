import React from 'react';

export default function Searched(props) {
  return (
      <form classsName='search-box' onSubmit={props.HandleSearch}>
      <label htmlFor="header-search">
          <span className="visually-hidden">Search Anime</span>
      </label>
      <input
          value={props.search}
          onChange={e => props.SetSearched(e.target.value)}
          type="search"
          placeholder="Search anime"
      />
      <button type="submit" className="submit" onClick={e => props.HandleSearch(e)}>Search</button>
    </form>
  )
}