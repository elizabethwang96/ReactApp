import "./Message.css";

function Message() {
  return (
    <div className="message-container">
      <div className="single-message">
        <p className="user-name">elizabeth:</p>
        <p className="user-message">hello</p>
      </div>

      <div className="submit-container">
        <div className="input">
          <input type="text"></input>
        </div>

        <div className="submit">Send</div>
      </div>
    </div>
  );
}

export default Message;
