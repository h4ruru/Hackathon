import React, { useState } from "react";
import "./css_folder/input.css";
import SaveIcon from '@mui/icons-material/Save';
import { getSongs } from "../firebace/operation"; // データ取得関数をインポート

const Musicdistribution = () => {
  const [songData, setSongData] = useState({
    songName: "",
    author: "",
    genre: "",
    mood: "",
    situation: "",
    lyricist: "",
  });

  return (
    <div className="container">
      <h2>楽曲登録</h2>
      <p>新しい楽曲情報を登録できます</p>
      <form className="form">
        <div className="form-group">
          <label htmlFor="songName">楽曲名</label>
          <input type="text" id="songName" placeholder="楽曲名を入力してください" />
        </div>

        <div className="form-group">
          <label htmlFor="author">作詞・作曲者名</label>
          <input type="text" id="author" placeholder="作詞・作曲者名を入力してください" />
        </div>

        <div className="form-group">
          <label htmlFor="genre">ジャンル</label>
          <select id="genre">
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
          <select id="mood">
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
          <select id="situation">
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
          <select id="lyricsType">
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

export default Musicdistribution;
