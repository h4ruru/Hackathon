import React from "react";
import './css_folder/header.css'; // CSS ファイルをインポート
import HomeIcon from "@mui/icons-material/Home";
// import AddIcon from "@mui/icons-material/Add";
import AudioIcon from '@mui/icons-material/AudioFileOutlined';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Header({ onRegiClick, onHomeClick }) {
  return (
    <header className="header">
      <div className="header-left">
        {/* ロゴとタイトル */}
        <AudioIcon className="header-icon-logo" />
        <span className="header-title">まえはらみゅーじっく</span>
      </div>

      <div className="header-center">
        {/* ホームボタン */}
        <div className="header-menu" onClick={onHomeClick}>
          <HomeIcon className="header-icon" />
          <span>ホーム</span>
        </div>
        {/* 登録ボタン */}
        <div className="header-menu" onClick={onRegiClick}>
          <AddIcon className="header-icon" />
          <span>登録</span>
        </div>
      </div>
    </header>
  );
}

export default Header;