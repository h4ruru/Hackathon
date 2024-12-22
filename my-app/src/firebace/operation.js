import { collection, getDocs, setDoc,  doc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

async function getSongs() {
  try {
    const snapshot = await getDocs(collection(db, "songs")); // songs コレクションを参照
    if (snapshot.empty) {
      console.log("No matching documents.");
      return [];
    }

    // ドキュメントを配列に変換
    const songs = snapshot.docs.map(doc => ({
      id: doc.id, // ドキュメント ID
      songName: doc.data().songName, // songName フィールド
      author: doc.data().author, // author フィールド
      genre: doc.data().genre, // genre フィールド
      mood: doc.data().mood, // mood フィールド
      situation: doc.data().situation, // situation フィールド
      lyricsType: doc.data().lyricsType, // lyricsType フィールド
      youtubeURL: doc.data().youtubeURL, // youtubeURL フィールド
    }));

    console.log("Fetched songs:", songs); // 確認用ログ
    return songs;
  } catch (error) {
    console.error("Failed to fetch songs:", error);
  }
}


async function addSong(song) {
    try {
      const snapshot = await getDocs(collection(db, "songs"));
      const docCount = snapshot.size;
      const docId = (docCount + 1).toString();
      const docRef = doc(db, "songs", docId);
      await setDoc(docRef, song);
      console.log("Document written with ID:", docId);
    } catch (error) {
      console.error("Error adding document:", error);
    }
}



async function updateSong(songName, updatedSong) {
  try {
    const songsCollection = collection(db, "songs"); // "songs" コレクションを参照
    const q = query(songsCollection, where("name", "==", songName)); // 曲名で検索するクエリ

    const querySnapshot = await getDocs(q); // クエリを実行して結果を取得

    if (querySnapshot.empty) {
      console.log("No songs found with that name."); // 曲名に一致するドキュメントがない場合
      return;
    }

    // 該当するドキュメントを更新
    querySnapshot.forEach(async (docSnap) => {
      const songRef = doc(db, "songs", docSnap.id); // 更新するドキュメントを参照
      await updateDoc(songRef, updatedSong); // 新しいデータで更新
      console.log(`Document with ID: ${docSnap.id} successfully updated!`);
    });
  } catch (error) {
    console.error("Error updating document:", error); // エラーが発生した場合、エラーログを表示
  }
}



async function deleteSong(songName) {
    try {
      const songsCollection = collection(db, "songs"); // "songs" コレクションを参照
      const q = query(songsCollection, where("name", "==", songName)); // 曲名で検索するクエリ
  
      const querySnapshot = await getDocs(q); // クエリを実行して結果を取得
  
      if (querySnapshot.empty) {
        console.log("No songs found with that name."); // 曲名に一致するドキュメントがない場合
        return;
      }
  
      // 該当するドキュメントを削除
      querySnapshot.forEach(async (docSnap) => {
        await deleteDoc(doc(db, "songs", docSnap.id)); // ドキュメントを削除
        console.log(`Document with ID: ${docSnap.id} deleted successfully!`);
      });
    } catch (error) {
      console.error("Error deleting document:", error); // エラーが発生した場合、エラーログを表示
    }
}

export { getSongs, addSong, updateSong, deleteSong };




// GETする処理
// import React, { useEffect, useState } from "react";
// import { getSongs } from "../firebace/operation"; // データ取得関数をインポート
// function SongList() {
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     async function fetchSongs() {
//       try {
//         const fetchedSongs = await getSongs();
//         setSongs(fetchedSongs); // データを state に設定
//       } catch (error) {
//         console.error("Failed to fetch songs:", error);
//       } finally {
//         setLoading(false); // ローディング完了
//       }
//     }
//     fetchSongs();
//   }, []);
//   if (loading) {
//     return <p>Loading...</p>; // ローディング中の表示
//   }
//   return (
//     <div>
//       <h1>Song List</h1>
//       {songs.length === 0 ? (
//         <p>No songs found.</p> // データが空の場合
//       ) : (
//         <ul>
//           {songs.map(song => (
//             <li key={song.id}>
//               {song.name} by {song.author}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
// export default SongList;








//POSTする処理
// import React, { useState } from "react";
// import { addSong } from "../firebase/operation"; // addSong 関数をインポート
// function AddSongForm() {
//   const [name, setName] = useState(""); // 曲名を保存
//   const [author, setAuthor] = useState(""); // 作曲者を保存
//   // フォーム送信時に曲を追加する処理
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // ページリロードを防ぐ
//     const song = { name, author }; // 入力された値を song オブジェクトに格納
//     await addSong(song); // Firestore に曲を追加
//     setName(""); // フォームの入力値をリセット
//     setAuthor(""); // フォームの入力値をリセット
//   };
//   return (
//     <div>
//       <h2>Add a New Song</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Song Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)} // 入力値を state に保存
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Author:
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)} // 入力値を state に保存
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Add Song</button>
//       </form>
//     </div>
//   );
// }
// export default AddSongForm;







//PUTする処理
// import React, { useState } from "react";
// import { updateSong } from "../firebace/operation"; // updateSongByName 関数をインポート
// function UpdateSongForm() {
//   const [songName, setSongName] = useState(""); // 曲名を保存
//   const [newName, setNewName] = useState(""); // 更新後の曲名を保存
//   const [newAuthor, setNewAuthor] = useState(""); // 更新後の作者名を保存
//   // フォーム送信時に曲を更新する処理
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // ページリロードを防ぐ
//     // 更新内容のオブジェクトを作成
//     const updatedSong = {
//       name: newName,
//       author: newAuthor,
//     };
//     await updateSong(songName, updatedSong); // 曲名で該当する曲を更新
//     setSongName(""); // フォームの入力値をリセット
//     setNewName(""); // 新しい曲名をリセット
//     setNewAuthor(""); // 新しい作者名をリセット
//   };
//   return (
//     <div>
//       <h2>Update a Song</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Song Name to Update:
//           <input
//             type="text"
//             value={songName}
//             onChange={(e) => setSongName(e.target.value)} // 入力された曲名を state に保存
//             required
//           />
//         </label>
//         <br />
//         <label>
//           New Song Name:
//           <input
//             type="text"
//             value={newName}
//             onChange={(e) => setNewName(e.target.value)} // 新しい曲名を state に保存
//             required
//           />
//         </label>
//         <br />
//         <label>
//           New Author:
//           <input
//             type="text"
//             value={newAuthor}
//             onChange={(e) => setNewAuthor(e.target.value)} // 新しい作者名を state に保存
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Update Song</button>
//       </form>
//     </div>
//   );
// }
// export default UpdateSongForm;






//DELETEする処理
// import React, { useState } from "react";
// import { deleteSong } from "../firebase/operation"; // deleteSongByName 関数をインポート
// function DeleteSongForm() {
//   const [songName, setSongName] = useState(""); // 曲名を保存
//   // フォーム送信時に曲を削除する処理
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // ページリロードを防ぐ
//     await deleteSong(songName); // 曲名で該当する曲を削除
//     setSongName(""); // フォームの入力値をリセット
//   };
//   return (
//     <div>
//       <h2>Delete a Song</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Song Name:
//           <input
//             type="text"
//             value={songName}
//             onChange={(e) => setSongName(e.target.value)} // 入力値を state に保存
//             required
//           />
//         </label>
//         <br />
//         <button type="submit">Delete Song</button>
//       </form>
//     </div>
//   );
// }
// export default DeleteSongForm;
