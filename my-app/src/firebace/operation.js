import { collection, getDocs, setDoc,  doc, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

async function getSongs() {
  try {
    const snapshot = await getDocs(collection(db, "songs")); // songs コレクションを参照
    if (snapshot.empty) {
      console.log("No matching documents.");
      return [];
    }


    const songs = snapshot.docs.map(doc => ({
      id: doc.id, 
      songName: doc.data().songName,
      author: doc.data().author,
      genre: doc.data().genre,
      mood: doc.data().mood,
      situation: doc.data().situation,
      lyricsType: doc.data().lyricsType,
      youtubeURL: doc.data().youtubeURL,
    }));

    console.log("Fetched songs:", songs);
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
    const songsCollection = collection(db, "songs");
    const q = query(songsCollection, where("name", "==", songName));

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No songs found with that name.");
      return;
    }

    // 該当するドキュメントを更新
    querySnapshot.forEach(async (docSnap) => {
      const songRef = doc(db, "songs", docSnap.id);
      await updateDoc(songRef, updatedSong);
      console.log(`Document with ID: ${docSnap.id} successfully updated!`);
    });
  } catch (error) {
    console.error("Error updating document:", error);
  }
}



async function deleteSong(songName) {
    try {
      const songsCollection = collection(db, "songs");
      const q = query(songsCollection, where("name", "==", songName));
  
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        console.log("No songs found with that name.");
        return;
      }
  
      querySnapshot.forEach(async (docSnap) => {
        await deleteDoc(doc(db, "songs", docSnap.id));
        console.log(`Document with ID: ${docSnap.id} deleted successfully!`);
      });
    } catch (error) {
      console.error("Error deleting document:", error);
    }
}

export { getSongs, addSong, updateSong, deleteSong };




// GETする処理
// import React, { useEffect, useState } from "react";
// import { getSongs } from "../firebace/operation";
// function SongList() {
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     async function fetchSongs() {
//       try {
//         const fetchedSongs = await getSongs();
//         setSongs(fetchedSongs);
//       } catch (error) {
//         console.error("Failed to fetch songs:", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchSongs();
//   }, []);
//   if (loading) {
//     return <p>Loading...</p>;
//   }
//   return (
//     <div>
//       <h1>Song List</h1>
//       {songs.length === 0 ? (
//         <p>No songs found.</p>
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
// import { addSong } from "../firebase/operation";
// function AddSongForm() {
//   const [name, setName] = useState("");
//   const [author, setAuthor] = useState("");
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const song = { name, author };
//     await addSong(song);
//     setName("");
//     setAuthor("");
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
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Author:
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
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
// import { updateSong } from "../firebace/operation";
// function UpdateSongForm() {
//   const [songName, setSongName] = useState("");
//   const [newName, setNewName] = useState("");
//   const [newAuthor, setNewAuthor] = useState("");
//   // フォーム送信時に曲を更新する処理
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // ページリロードを防ぐ
//     // 更新内容のオブジェクトを作成
//     const updatedSong = {
//       name: newName,
//       author: newAuthor,
//     };
//     await updateSong(songName, updatedSong);
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
