import React, { createContext, useContext, useState } from "react";

// Create the context
const WorkflowContext = createContext();

// Custom hook for consuming context
export const useWorkflow = () => useContext(WorkflowContext);

export const WorkflowProvider = ({ children }) => {
  const [workflowName, setWorkflowName] = useState("Workflow #1");
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [keywords, setKeywords] = useState({ include: [], exclude: [] });
  const [workflowType,setWorkflowType]= useState("1");
  const [replies, setReplies] = useState([
    "Hey @username, please check your inbox when you can! 📬",
    "Hi there, @username! I've sent you a DM, take a look! 📥",
    "@username, could you check your DMs, please? 😊",
    "Hello @username, I just sent you a direct message! ⭐",
    "Hey @username, when you have a moment, check your DM! 📩",
    "@username, I've sent you a message. Please confirm if you received it! 🌟",
    "Hi @username! I just sent you a DM, please let me know if you got it! 📬",
    "Hey @username, did you get my message? Let me know! 🌠",
    "Hi there @username! Please look for my DM and get back to me! 📥",
    "Hello @username, I sent you a DM, please check it out! 💌",
    "Hey @username, check your DM when you can, it's important! 🌟",
    "Hi @username! You have a new message, please confirm! 🌟",
    "@username, please check your DM and let me know! 📥",
    "Hey there @username! I sent you a message, did you get it? 📬",
    "Hi @username, I just sent you a DM, please check! 💫",
    "Hello @username, please look in your inbox for my message! 🌟",
    "Hey @username, please check your messages and confirm! 📬",
    "Hi @username, I sent you a DM, please take a look! 👋",
    "Hey @username, I've sent you a DM, let me know if you got it! 🌟",
    "Hi @username, please check your inbox for my message! 📩",
    "@username, I sent you a message, please let me know if you received it! 🌠",
    "Hey @username, did you get my DM? Please confirm! 📬",
    "Hello @username, I sent you a DM, check it out! ⭐",
    "Hi @username, please check your messages and let me know! 📩",
    "Hey @username, look for my DM and confirm you got it! 🌠",
    "Hello @username, I've messaged you, please check! 🌟",
    "@username, DM sent, please confirm receipt! 📬",
    "Hi @username, please check your DM when you can! 🌠",
    "Hey @username, look at your inbox for my message! ⭐",
    "Hi @username, you've got a new message, please check! 🌟",
    "Hey @username, sent you a DM. Please take a moment to look at it! 📬",
    "Hi @username! I've sent a message to your inbox. Please check! 📥",
    "@username, I've sent you a DM. Can you confirm you received it? 😊",
    "Hello @username, please check your direct messages when you have time! ⭐",
    "Hey @username, I've messaged you. Please check your DM! 📩",
    "@username, sent you an important message. Please confirm receipt! 🌟",
    "Hi @username! Look in your DMs and let me know if you got my message! 📬",
    "Hey @username, did you see my DM? Please check and let me know! 🌠",
    "Hi there @username! I've sent you a DM. Please have a look! 📥",
    "Hello @username, I've sent you a message. Please check your DMs! 💌",
    "Hey @username, can you check your DM? I've sent something important! 🌟",
    "Hi @username! You have a new DM. Please confirm you got it! 🌟",
    "@username, check your DMs and let me know if you received my message! 📥",
    "Hey there @username! I sent you a message. Did you get it? 📬",
    "Hi @username, please check your DMs for my message! 💫",
    "Hello @username, I just sent you a DM. Please look in your inbox! 🌟",
    "Hey @username, check your messages and let me know you received them! 📬",
    "Hi @username, I've sent you a DM. Please check and confirm! 👋",
    "Hey @username, just letting you know I sent you a DM! 🌟",
    "Hi @username, please check your inbox for my recent message! 📩"
  ]);
  const [dmText, setDmText] = useState("");
  const [buttons, setButtons] = useState([]);

  const [carousels, setCarousels] = useState([]); // array to store carousel

  //state for whether filters used on comments or not (included keywords etc)
  //"specific" or "any", for included excluded keywords
  const [selection, setSelection] = useState("specific");
  const [selectionReply, setSelectionReply] = useState(true); //true or false based on reply
  const [selectionDM, setSelectionDM] = useState(true); //true or false
  const [carouselDM, setCarouselDM] = useState(false); //true or false
  const [isFollowRequired, setIsFollowRequired] = useState(true);
  const [contentType, setContentType] = useState("");

  return (
    <WorkflowContext.Provider
      value={{
        selectedPosts,
        setSelectedPosts,
        workflowType,
        setWorkflowType,
        keywords,
        setKeywords,
        replies,
        setReplies,
        dmText,
        setDmText,
        buttons,
        setButtons,
        selection,
        setSelection,
        selectionReply,
        setSelectionReply,
        workflowName,
        setWorkflowName,
        selectionDM,
        setSelectionDM,
        carousels,
        setCarousels,
        carouselDM,
        setCarouselDM,
        isFollowRequired,
        setIsFollowRequired,
        contentType,
        setContentType
      }}
    >
      {children}
    </WorkflowContext.Provider>
  );
};
