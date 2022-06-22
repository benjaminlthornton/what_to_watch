import React from 'react';

export default function Searched(props) {
  return (
      <form classsName='search-box' onSubmit={props.HandleSearch}>
      <input
          type="search"
          placeholder="Search anime"
          value={props.search}
          onChange={e => props.SetSearch(e.target.value)}
      />
      {/* <button type="submit" className="submit" onClick={e => props.HandleSearch(e)}>Search</button> */}
    </form>
  )
}