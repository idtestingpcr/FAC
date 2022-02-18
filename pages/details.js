import ReactHtmlParser from 'react-html-parser';
import utilModule from '../styles/util.module.css';
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Details({photo,context }) {
  console.log(context, 'my data')
  console.log(photo, 'photo data')

  const [persons, setPersons] = useState('')
  const [search, setSearch] = useState('')
  const [loc, setLoc] = useState('')
  const [myImage, setMyImage] = useState('')

  const [myRender, setMyRender] = useState(false)

  useEffect(()=>{
console.log(photo, '--------')
  var baseweburl = 'https://memed.co.uk'
  var urlParams = new URLSearchParams(window.location.search);
  var slug = urlParams.get('slug')
  var postid = urlParams.get('postid')
  
  setSearch(window.document.referrer)
  
  
 
  if((window.document.referrer) === 'https://lm.facebook.com/' || window.location.search.includes('fbclid'))
    
  {
      window.location.href = `${baseweburl}/${slug}`;
      return;
  } else{
    setMyRender(true)
     // alert('third')

     axios.get(`https://https://memed.co.uk/wp-json/my_posts/v2/post/${postid}`)
     .then(res => {
       console.log(res.data[0])
      setPersons(res?.data?.post_content)
     
     })
     .catch(error => {
       console.log(error)
     })
  }



 },[])

 const handleOGImage = (ogimg) => {
  let repogimg = ogimg.replace("https://memed.co.uk", "https://memeduk.netlify.app")
  return repogimg;
 }

 return (
      <div>
    
      <Head>
 <title>{photo?.post_title}</title>
<meta property="og:url" content="your url" />
<meta name="description" content={ReactHtmlParser(photo.post_content)} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb id" />
      
        <meta property="og:title" content={photo?.post_title} />

        {/* <meta name="twitter:card" content="summary" /> */}
     
        <meta property="og:image" content={handleOGImage(photo[0])} />
        <meta property="og:image:alt" content={photo?.post_title} />


        <meta property="og:image:width" content="300"/>
<meta property="og:image:height" content="200"/>
      </Head>
     
<>
        
       {/* {    (window.document.referrer) === 'https://lm.facebook.com/' || window.location.search.includes('fbclid')? <></> : ( */}

       {   !myRender?
        <></> : (
          
      
      <div className={utilModule.black_div}>
          

     
        <div >  
          <ul className={utilModule.black}>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className={utilModule.about}><a className={utilModule.active} href="#about">About</a></li>
          </ul>
        </div>
   
        <div className={utilModule.contentdiv} style={{textAlign:'left'}}>
            {ReactHtmlParser(persons)}
           
            </div>


      </div>
   
  )
}  
{/* } */}
       </>
      </div>
  );
}


export const getServerSideProps = async (context) => {
  let photo = null;
  console.log('--------------------------')
  await axios.get(`https://memed.co.uk/wp-json/my_posts/v2/post/${context.query.postid}`).then(res => 
  
  photo= res.data
  

  )
  return {
    props: {
      photo,
      context:context.query
    },
  };
};