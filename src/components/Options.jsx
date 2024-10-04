import React from "react";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  console.log(question);
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={answer != null}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          key={index}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
