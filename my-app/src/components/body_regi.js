import React, { useState } from "react";
import "./css_folder/input.css";
import SaveIcon from '@mui/icons-material/Save';
import { addSong } from "../firebace/operation";

function Musicdistribution() {
  const [songName, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [youtubeURL, setYoutubeURL] = useState("");
  const [genre, setGenre] = useState("");
  const [mood, setMood] = useState("");
  const [situation, setSituation] = useState("");
  const [lyricsType, setLyricsType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!songName || !author || !mood || !situation || !genre || !lyricsType || !youtubeURL) {
      alert("全てのフィールドを入力してください");
      return;
    }

    const newSong = {
      name: songName,
      author: author,
      youtubeURL: youtubeURL,
      genre: genre,
      mood: mood,
      situation: situation,
      lyricsType: lyricsType,
    };

    try {
      await addSong(newSong);
      alert("楽曲が正常に登録されました！");
      setName("");
      setAuthor("");
      setYoutubeURL("");
      setGenre("");
      setMood("");
      setSituation("");
      setLyricsType("");
    } catch (error) {
      console.error("楽曲の登録に失敗しました:", error);
      alert("楽曲の登録中にエラーが発生しました");
    }
  };

  return (
    <div className="container">
      <h2>楽曲登録</h2>
      <p>新しい楽曲情報を登録できます</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="songName">楽曲名</label>
          <input
            type="text" id="songName"
            value={songName}
            onChange={(e) => setName(e.target.value)}
            placeholder="楽曲名を入力してください"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">作詞・作曲者名</label>
          <input
            type="text" id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="作詞・作曲者名を入力してください"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="youtubeURL">YoutubeURL</label>
          <input
            type="text" id="youtubeURL"
            value={youtubeURL}
            onChange={(e) => setYoutubeURL(e.target.value)}
            placeholder="YoutubeのURLを入力してください"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">ジャンル</label>
          <select id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
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
            required
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
            required
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
            required
          >
            <option value="">選択してください</option>
            <option value="love">恋愛</option>
            <option value="heartbreak">失恋</option>
            <option value="encouragement">応援</option>
            <option value="season">季節</option>
            <option value="party">パーティ</option>
          </select>
        </div>

        <button type="submit" className="submit-button"><SaveIcon /> 登録</button>
      </form>
    </div>
  );
};
export default Musicdistribution