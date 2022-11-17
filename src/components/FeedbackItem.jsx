import React from "react";
import {FaTimes} from 'react-icons/fa'
import Card from "./shared/Card";
import PropTypes from "prop-types";
function FeedbackItem({ item }) {
  const handleClick = (id)=>{
console.log(123)
  }
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>handleClick(item.id)} className="close"><FaTimes color="purple"/></button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItem.prototypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItem;
