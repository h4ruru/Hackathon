import React from 'react'
import './css_view/search.css'

const SearchResult = () => {
  return (
    <div className="search-result">
      <h2>検索結果</h2>
      <form>
        <div className="search-item">
          <p>楽曲名：Song 1</p>
          <p>アーティスト名：Artist 1</p>
          <p>リンク：<a href="https://example.com">https://example.com</a></p>
        </div>
        <div className="search-item">
          <p>楽曲名：Song 2</p>
          <p>アーティスト名：Artist 2</p>
          <p>リンク：<a href="https://example.com">https://example.com</a></p>
        </div>
      </form>
    </div>
  );
};

export default SearchResult;


