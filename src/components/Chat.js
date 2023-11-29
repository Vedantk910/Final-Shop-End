import React, { Component } from 'react'

export class Chat extends Component {

  componentDidMount(){
    // <script type="text/javascript">
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"1deab5d086b99b79bc00b4b6799aac895","popupWidget":true,"automaticChatOpenOnNavigation":true,
            "voiceInput":true,
            "voiceOutput":true,"voiceName":"Rishi",
            "voiceRate":1};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
// </script>
  }

  render() {
    return (
      <div>
        {/* <h1>This is our chatbot</h1> */}
      </div>
    )
  }
}

export default Chat
