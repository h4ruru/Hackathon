import React from "react";
import './css_folder/header.css'; // CSS ファイルをインポート
import HomeIcon from "@mui/icons-material/Home";
// import AddIcon from "@mui/icons-material/Add";
import AudioFileOutlinedIcon from '@mui/icons-material/AudioFileOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* ロゴとタイトル */}
        <AudioFileOutlinedIcon className="header-icon-logo" />
        <p><span className="header-title">音楽データベース</span></p>
      </div>

      <div className="header-center">
        {/* ホームボタン */}
        <div className="header-menu">
          <HomeIcon className="header-icon" />
          <span>ホーム</span>
        </div>
        {/* 登録ボタン */}
        <div className="header-menu">
          <AddCircleOutlineOutlinedIcon className="header-icon" />
          <span>登録</span>
        </div>
      </div>
    </header>
  );
}

export default Header;