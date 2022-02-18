import { useEffect, useState } from "react";
import axios from "axios";
import utilModule from '../styles/util.module.css';

export default function wpContent({photo,context }) {
    const [myRender, setMyRender] = useState(false)

    useEffect(()=>{
        // console.log(photo, '--------')
        
        var slug_two = 'wp-content/uploads/2022/01/risky-assumptions.jpg'
  var baseweburl = 'https://memed.co.uk'
         
        //   if(window.document.referrer.includes('wp-content'))
            
        //   {
            //   alert('hello')
              window.location.href = `${baseweburl}/${slug_two}`;
              return;
          
        
        //   if(window.document.referrer.includes('uploads')){
        //     window.location.href = `${baseweburl}/wp-content/uploads/2022/01/risky-assumptions.jpg`;
        //     return;
        //   }
        
         },[])
         return (
            <div>
            {/* <Head>
              <title>Details &mdash; WebNextjs</title>
              <meta property="og:image" content="https://unsplash.com/photos/Y1JduWEJuW4"  />
      
            </Head> */}
      
           
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
         
              {/* <div className={utilModule.contentdiv} style={{textAlign:'left'}}>
                  {ReactHtmlParser(persons)}
                 
                  </div> */}
      
      
            </div>
         
        )
      }  
      {/* } */}
             </>
            </div>
        );
      }
