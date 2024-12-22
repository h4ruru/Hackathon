import React, { useState, useEffect } from "react";
import "./css_folder/view.css";
import SearchIcon from '@mui/icons-material/Search';
import { getSongs } from '../firebace/operation';

const Musicdistribution = ({ onResultClick }) => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [songName, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [situation, setSituation] = useState("");
  const [lyricsType, setLyricsType] = useState("");

  useEffect(() => {
    const fetchSongs = async () => {
      const fetchedSongs = await getSongs();
      setSongs(fetchedSongs);
      setFilteredSongs(fetchedSongs);
    };
    fetchSongs();
  }, []);

  const handleFilter = () => {
    const filtered = songs.filter((song) => {
      return (
        ((song.songName && song.songName.includes(songName)) || songName === "") &&
        ((song.author && song.author.includes(author)) || author === "") &&
        ((song.genre && song.genre === genre) || genre === "") &&
        ((song.mood && song.mood === mood) || mood === "") &&
        ((song.situation && song.situation === situation) || situation === "") &&
        ((song.lyricsType && song.lyricsType === lyricsType) || lyricsType === "")
      );
    });
    // d2b394f40dffea770990ce06eb8a430ecf77180d
    setFilteredSongs(filtered);
  };

  // URLの短縮
  const shortenUrl = (url) => {
    if (url && url.length > 30) {
      return url.slice(0, 30) + "...";
    }
    return url;
  };

  return (
    <div className="container">
      <h2>楽曲検索</h2>
      <p>データベースの楽曲を検索・閲覧できます</p>
      <form className="form">
        <div className="form-group">
          <label htmlFor="songName">楽曲名</label>
          <input
            type="text"
            id="songName"
            placeholder="楽曲名を入力してください"
            value={songName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">作詞・作曲者名</label>
          <input
            type="text"
            id="author"
            placeholder="作詞・作曲者名を入力してください"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">ジャンル</label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="pop">ポップ</option>
            <option value="rock">ロック</option>
            <option value="jazz">ジャズ</option>
            <option value="classical">クラシック</option>
            <option value="hiphop">ヒップホップ</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mood">気分</label>
          <select
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="happy">楽しい</option>
            <option value="sadly">悲しい</option>
            <option value="angry">怒っている</option>
            <option value="calm">落ち着いている</option>
            <option value="tired">疲れている</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="situation">シチュエーション</label>
          <select
            id="situation"
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="relaxation">リラックスしたい</option>
            <option value="commute">通勤・通学</option>
            <option value="study">勉強</option>
            <option value="drive">ドライブ</option>
            <option value="party">パーティ</option>
            <option value="motivate">モチベーションを高めたい・元気を出したい</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="lyricsType">歌詞のタイプ</label>
          <select
            id="lyricsType"
            value={lyricsType}
            onChange={(e) => setLyricsType(e.target.value)}
          >
            <option value="">選択してください</option>
            <option value="love">恋愛</option>
            <option value="heartbreak">失恋</option>
            <option value="encouragement">応援</option>
            <option value="season">季節</option>
            <option value="party">パーティ</option>
          </select>
        </div>

        <button
          type="button"
          className="submit-button"
          onClick={() => {
            handleFilter();
            onResultClick();
          }}
        ><SearchIcon /> 検索</button>
      </form>
      <div className="results">
        <h3>検索結果</h3>
        {filteredSongs.length === 0 ? (
          <p>一致する楽曲がありません</p>
        ) : (
          <ul>
            {filteredSongs.map((song, index) => (
              <li key={index}>
                <h4>{song.songName && song.songName !== "楽曲" ? song.songName : "楽曲名なし"}</h4>
                <p>作詞・作曲者: {song.author || "作詞・作曲者名なし"}</p>
                <p>
                  YoutubeURL: {song.youtubeURL ?
                    <a href={song.youtubeURL} >
                      {shortenUrl(song.youtubeURL) || song.youtubeURL}
                    </a> : "URLなし"}
                </p>
                <p>ジャンル: {song.genre || "ジャンル情報なし"}</p>
                <p>気分: {song.mood || "気分情報なし"}</p>
                <p>シチュエーション: {song.situation || "シチュエーション情報なし"}</p>
                <p>歌詞のタイプ: {song.lyricsType || "歌詞タイプ情報なし"}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Musicdistribution;
