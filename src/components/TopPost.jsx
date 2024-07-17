import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const TopPost = () => {
    const [blogs, setBlogs] = useState([])

    const getBlogs = async () => {
        try {
            const res = await getDocs(collection(db,'posts'))
            if (res) {
              const blogIds = new Set();
              setBlogs((prevBlogs) => {
                prevBlogs.forEach(blog => blogIds.add(blog.id));
                res.forEach((doc) => {
                  if (!blogIds.has(doc.id)) {
                    blogIds.add(doc.id);
                    prevBlogs = [...prevBlogs, { id: doc.id, ...doc.data() }];
                  }
                });
                return prevBlogs;
              });
            }
        } catch (error) {
          alert(error.message)
        } 
    }
    useEffect(()=>{
      getBlogs()
    },[])

  return (
    <div
        className="container m-5 mx-auto rounded-2"
        style={{ backgroundColor: "rgba(140, 137, 137, 0.5)" }}
      >
        {blogs.map((item, index) => {
          return (
            <div className="clearfix " key={index}>
              <div className={`float-${index % 2 == 0 ? "start" : "end"}`}>
                <Card card={item} />
              </div>
            </div>
          );
        })}
        <div className="text-center p-3">
          <Link
            to={"/posts"}
            className={
              "link-info link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-3"
            }
          >
            All Posts
          </Link>
        </div>
      </div>
  )
}
