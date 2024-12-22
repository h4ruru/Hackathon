import React from "react";
import "./css_folder/view.css";
import SearchIcon from '@mui/icons-material/Search';

const Musicdistribution = ({ onResultClick }) => {
  return (
    <div className="container">
      <h2>楽曲検索</h2>
      <p>データベースの楽曲を検索・閲覧できます</p>
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
          <input type="text" id="mood" placeholder="気分を入力してください" />
        </div>

        <div className="form-group">
          <label htmlFor="situation">シチュエーション</label>
          <input type="text" id="situation" placeholder="シチュエーションを入力してください" />
        </div>

        <div className="form-group">
          <label htmlFor="lyricist">歌詞のタイプ</label>
          <input type="text" id="lyricist" placeholder="歌詞のタイプを入力してください" />
        </div>

        <button type="button" className="submit-button" onClick={onResultClick}><SearchIcon /> 検索</button>
      </form>
    </div>
  );
};

export default Musicdistribution;
