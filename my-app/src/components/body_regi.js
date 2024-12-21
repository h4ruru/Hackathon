import React from "react";
import "./css_folder/input.css";
import SaveIcon from '@mui/icons-material/Save';

const Musicdistribution = () => {
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
            <option valie="hiphop">ヒップホップ</option>
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

        <div className="form-group">
          <label htmlFor="vocalRange">男声/女声（声域）</label>
          <select id="vocalRange">
            <option value="">選択してください</option>
            <option>高い</option>
            <option>普通</option>
            <option>低い</option>
          </select>
        </div>

        < button type="submit" className="submit-button"><SaveIcon /> 登録</button>
      </form>
    </div>
  );
};

export default Musicdistribution;
