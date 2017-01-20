import React from 'react';

class  ChatRoom extends React.Component {
  render() {
    return (
        <div>
          Student1 <input type="text"/> <input onclick="sendMessage()"type="button" value="Send"/>
          Student2 <input type ="text"/><input type="button" value="Send"/>
        </div>
    );
  }
}
