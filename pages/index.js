import axios from "axios";
import { useEffect, useState } from "react";
import Head from "next/head";
import utilModule from '../styles/util.module.css';

import ReactHtmlParser from 'react-html-parser';


import Link from 'next/link'
export default function Home() {
  // const [posts, setPosts] = useState(mockPosts);

  // console.log(props, 'props')
  const [persons, setPersons] =useState([])
  
  // const [loader, setLoader] = useState(true)
  
  useEffect(() => {
  // console.log(window.location, '================')
      axios.get('https://memed.co.uk/wp-json/wp/v2/posts/')
      .then(res => {
        // console.log(res.data)
        // const personss = res.data;
        // console.log(persons[0].slug, '========')
       setPersons(res.data)
      //  setLoader(false)
      })
      .catch(error => {
        console.log(error)
      })
    
    }, []);

  return (


     
      <div className={utilModule.black_div}>
        <div>
          <ul className={utilModule.black}>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className={utilModule.about}><a className={utilModule.active} href="#about">About</a></li>
          </ul>
        </div>
   
      <Head>
        <title>Hybrid Tech Car</title>
      </Head>
  
        <div>
        {/* {!loader ?
        <> */}
        {
          persons
            .map(person =>
              <div id={person.id} style={{textAlign:'left'}} className={utilModule.post_cont}>
           <Link href={{ pathname: `/details`,
           search: `?postid=${person.id}&slug=${person.slug}`,
          //  pic:
           }} prefetch={false}><a><h1>{person.title.rendered}</h1></a></Link>
           { ReactHtmlParser(person.content.excerpt) }
            
              <p >{ReactHtmlParser(person.excerpt?.rendered)}</p>
              </div>
             
            )
        }
        {/* </>
        : <FullScreenLoader /> } */}
      </div>
   
     


        
        </div>
      // </Layout>
     

  );
}
