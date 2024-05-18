const pagesData = {
  pages:
  [
    {
        "pageId": "1",
        "className": "home",
        "url": "./",
        "title":"Journey Through Emotions with Soulful Sound!",
        "text": "Welcome to SoulMood, where every melody is a bridge to your inner world, crafting personalized playlists that resonate with your emotions and uplift your soul.",
        "button": "let's start"
      },
      {
        "pageId": "2",
        "pageName": "about",
        "url": "./About",
        "title": "About Us",
        "text": "Welcome to SoulMood. At SoulMood, we blend emotional intelligence with music to create a unique and personalized listening experience. Our mission is to harmonize your emotions with soulful melodies, offering curated playlists that resonate with your inner world. Powered by innovative mood analysis technology, we invite you to explore a diverse range of music that speaks to your soul. Join us on a journey where every note is a reflection of your emotions, and let the power of music transform your mood and uplift your spirit."
      },
      {
        "pageId": "3",
        "pageName": "service",
        "url": "./Service",
        "title":"SOULMOOD",
        "textTitle":"Dscover new music and improve your emotional well-being",
        "field": [
          {
            "type": "file",
            "id":"fileUpload",
            "label": "none",
            "name": "upload",
            "infieldicon":"",
            "placeholder": "Take or Uplod photo"
          }],
        "iconText": "Ready to dive in? ",
        "buttons": [
          {
            "type": "submit",
            "name": "Start"
          }],
        "textBa": "Discover the power of emotional analysis with our service! We analyze your emotions and curate personalized playlists just for you.",
        "images":[
          {"urlRsideImg":"./images/option1.png"},{"popAlb1Img":"./images/option1.png"},{"popAlb2Img":""},{"popAlb3Img":""},
          {"popAlb4Img":""},{"popAlb5Img":""} ,{"popMid1Img":""},{"popMid2Img":""},
          {"popMid3Img":""},{"popMid4Img":""},{"popMid5Img":""}
        ],
        "titleAlbum":"Popular Albums:",
        "titleMid":"Popular Meditations:",
        "titleHTU":"How to Use?",
        "pList1":"User uploads a photo: Users upload a photo of themselves or use a web camera for real-time mood analysis.",
        "pList2":"The system processes the image: the system analyzes facial expressions and extracts emotional insights using facial recognition technology.",
        "pList3":"Personalized music playlists: Based on the emotional analysis, the system generates personalized playlists that resonate with the user's current mood.",
        "pList4":"User Engagement: Users can listen to playlists, like or dislike songs, skip tracks, and explore related music recommendations for a seamless and engaging experience.",
        "studiesTitle":"Studies and articles about the relationship between data analysis and music:",
        "textArtR":"Articles to Read:",
        "links":[{"name":"Article1", "url":"https://ieeexplore.ieee.org/document/1561259"},{"name":"Article2", "url":"https://jyx.jyu.fi/handle/123456789/68883"},{"name":"Article3", "url":"https://pragmaticgeek.medium.com/facial-sentiment-analysis-as-user-input-07b89ca6c098"}]


      },
      {
        "pageId": "4",
        "pageName": "SignUp",
        "url": "./SignUp",
        "menuIds": ["11", "12"],
        "title": "Join us to unlock a world of personalized music experiences tailored to your emotions!",
        "img": "/",
        "imgUrl": "./images/signup.png",
        "formId": "signUpForm",
        "formId": "1"
      },
      {
        "pageId": "5",
        "pageName": "Contact Us",
        "url": "./ContactUs.js",
        "text":"Contact Us",
        "menuIds": ["11", "12"],
        "formId":"contactUsForm"
      },
      {
        "pageId": "6",
        "pageName": "Log In",
        "url": "./LogIn.js",
        "text":"Log In",
        "menuIds": ["11", "12"],
        "formId":"LogInForm"
      }
      


    
    ]};

export default pagesData;  