import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feeback item 1",
      rating: 5,
    },
    {
      id: 2,
      text: "This is feeback item 2",
      rating: 4,
    },
    {
      id: 3,
      text: "This is feeback item 3",
      rating: 10,
    },
  ]);

  const [feedbackEdit, SetFeeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //add feedbacl

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  //de;ete deefbackk
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to Delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id
          ? {
              ...item,
              ...updItem,
            }
          : item
      )
    );
  };

  //set item to be updated
  const editFeedback = (item) => {
    SetFeeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
