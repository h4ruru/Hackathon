import React from 'react'
import './css_folder/editing.css'
import SaveIcon from '@mui/icons-material/Save';

const EditForm = () => {
  return (
    <div className="edit-form">
      <h2>楽曲編集</h2>
      <form>
        <div>
          <label htmlFor="title">楽曲名</label>
          <input type="text" id="songName" />
        </div>
        <div>
          <label htmlFor="youtubeUrl">YouTube URL</label>
          <input type="url" id="youtubeUrl" name="youtubeUrl" />
        </div>
        <div>
          <label htmlFor="artist">作詞・作曲者名</label>
          <input type="text" id="artist" name="artist" />
        </div>
        <div>
          <label htmlFor="genre">ジャンル</label>
          <input type="text" id="genre" name="genre" />
        </div>
        <div>
          <label htmlFor="mood">気分</label>
          <input type="text" id="mood" name="mood" />
        </div>
        <div>
          <label htmlFor="situation">シチュエーション</label>
          <input type="text" id="situation" name="situation" />
        </div>
        <div>
          <label htmlFor="lyricsType">歌詞のタイプ</label>
          <input type="text" id="lyricsType" name="lyricsType" />
        </div>
        < button type="submit" className="submit-button"><SaveIcon /> 更新</button>
      </form>
    </div>
  )
}

export default EditForm

