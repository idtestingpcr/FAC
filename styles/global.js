import css from 'styled-jsx/css'

export default css.global`
.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  body{
    background: #eee;
  }
  .black_div{
    width:900px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    margin: 30px auto;
    box-shadow: 5px 5px 5px #888888;
  }
  
  .black{
    list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
  }
  .black li{
    float: left;
  }
  .black .about{
    float:right;
  }
  .black .about a{
    background-color: #4CAF50;
  }
  .black li a{
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media screen and (max-width: 767px) {
    .black_div {
      width: 100%;
      padding: 0;
      margin-top: 0;
    }
    
    
    .contentdiv img {
      width: 100%;
    }
    
    
    .contentdiv {
      padding: 20px;
    }
    .post_cont {
      padding: 15px;
  }
  }
`