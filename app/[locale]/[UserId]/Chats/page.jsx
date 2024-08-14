"use client";
import React, { useEffect, useState } from "react";
import { socket } from "../../../../socket";

const Chats = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");
  const [message, setMessage] = useState(""); // State for the input message
  const [messages, setMessages] = useState([]); // State for storing chat messages

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    // Listen for incoming messages
    socket.on("chat message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("chat message"); // Clean up listener on component unmount
    };
  }, []);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("chat message", message); // Emit message to server
      setMessage(""); // Clear the input field after sending
    }
  };

  return (
    <div className='flex flex-col items-start pl-10 justify-center h-full gap-5'>
      <div className="flex flex-col w-full">
        <div className="group w--1/2 h-[38px] md:h-[50px] flex items-center justify-center flex-col">
          <div className={`w-full rounded-[7px] bg-gray-200 group-focus-within:gradient-primary`}>
            <input
              className="w-full p-[10px] md:p-[12px] outline-none rounded-[6px] border-[2px] border-transparent font-DM-Sans font-normal text-[12px] md:text-[16px] leading-[16px] md:leading-[24px]"
              placeholder="Send message"
              value={message}
              onChange={handleChange}
              type="text"
              name="message"
              style={{ backgroundColor: "white", backgroundClip: "padding-box", }}
            />
          </div>
        </div>
        <button
          type="button"
          className='h-[38px] md:h-[50px] px-10 rounded-[6px] md:flex items-center justify-center [background:linear-gradient(180deg,_#60b7cf_10%,_#3e8da7_74.5%,_rgba(0,_62,_92,_0.6))] text-white font-DM-Sans font-bold text-[18px] leading-[24px]'
          onClick={handleSendMessage}
        >
          Send Message
        </button>
      </div>
      <div className='w-full'>
        <div className='border-t border-gray-300'>
          {messages.map((msg, index) => (
            <div key={index} className='p-2'>
              <p>{msg}</p> {/* Display each message */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chats;
