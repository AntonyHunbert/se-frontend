import { Button } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatPage.module.css'
import { SendOutlined, CloseOutlined } from '@ant-design/icons';
import { Input } from 'antd';


// 用龙哥的之前的代码让cahtgpt翻译的，有问题我应该不会，可以问龙哥

const ChatPage = () => {
  const [words, setWords] = useState([]);
  const [message, setMessage] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = new WebSocket("ws://127.0.0.1:8041/socket/aaa/bbb");
    socketRef.current.onmessage = (event) => {
      setWords(prevWords => [...prevWords, { text: event.data, sender: 'other' }]);
    };
    return () => socketRef.current.close();
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      sendMessage();
      event.preventDefault();
      console.log(event);

    }
  }

  const sendMessage = () => {
    if (message.trim() !== '') {
      setWords(prevWords => [...prevWords, { text: message, sender: 'me' }]);
      socketRef.current.send(message);
      setMessage('');
    }
  }

  const { TextArea } = Input;

  const selectBubble = (word) => {
    if (word.sender === 'me') {
      return 'styles.btalk'
    } else {
      return 'styles.atalk'
    }

  }


  return <div className={styles.maskbox}>
    <div className={styles.talk_box}>
      <div className={styles.userBox}>
        <div className={styles.userNameBox}>吉川富隆</div>
        <div className={styles.userNameBox}>吉川富隆</div>
        <div className={styles.userNameBox}>吉川富隆</div>


      </div>
      <div className={styles.talk_con} id="talk_con_id">
        <div className={styles.titleBox}>
          <div className={styles.chatName}>吉川富隆</div>
          
          <button className={styles.closeBtn}><CloseOutlined /></button>
        </div>
        <div className={styles.talk_show} id="words">
          <div className={styles.chatBegin}>---可以开始聊天啦！---</div>
          {words.map((word, index) => (
            word.sender === 'me' ?
              <div
                key={index}
                className={styles.btalk}
              >
                <span>{word.text}</span>
              </div>
              :
              <div
                key={index}
                className={styles.atalk}
              >
                <span>{word.text}</span>
              </div>

          ))}
        </div>
        <div className={styles.talk_send}>


          <TextArea
            rows={4}
            className="talk_word"
            value={message}
            showCount
            maxLength={50}
            onChange={handleInputChange}
            onPressEnter={handleKeyDown}
            bordered={false}
            placeholder='最多输入50字！'
          />
          <div className={styles.talk_btn}>
            <Button
              className={styles.sendBtn}
              onClick={sendMessage}
            >
              <SendOutlined />发送</Button>
          </div>

        </div>

        {/* <input
        type="button"
        value="发送"
        className="talk_sub"
        onClick={sendMessage}
      /> */}
      </div>

    </div>

  </div>
}

export default ChatPage;
