import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
 const [bookmarks, setBookmarks] = useState([]);
 ////////////////////////////////
 const [readingTime, setReadingTime] = useState(0);

 const handleAddToBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
 }

 const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
  // // remove the read blog from bookmark // // // //
 }



  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
     
     
    </>
  )
}

export default App
