import { useState, useId } from "react";

const CreateQuestion = ({ onDelete, onCreate }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const radioGroupName = useId(); // ensures uniqueness across components

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    const prevValue = newOptions[index];
    newOptions[index] = value;

    if (correctAnswer === prevValue) {
      setCorrectAnswer(value);
    }

    setOptions(newOptions);
  };

  const addOption = () => setOptions([...options, ""]);

  const removeOption = (index) => {
    const removed = options[index];
    const updated = options.filter((_, i) => i !== index);
    setOptions(updated);

    if (removed === correctAnswer) setCorrectAnswer("");
  };

  const handleDeleteQuestion = () => {
    if (onDelete) onDelete();
  };

  const handleCreateQuestion = () => {
    if (onCreate) {
      const questionData = {
        question,
        options,
        correctAnswer,
      };
      onCreate(questionData);
    }
  };

  return (
    <div className="border p-6 rounded-xl shadow-md bg-white space-y-4">
      {/* Question Input */}
      <div>
        <input
          type="text"
          placeholder="Enter your question"
          className="w-full border border-gray-300 p-2 rounded-md"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="radio"
              name={radioGroupName}
              value={option}
              checked={correctAnswer === option}
              onChange={() => setCorrectAnswer(option)}
            />
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              className="flex-1 border border-gray-300 p-2 rounded-md"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <button
              onClick={() => removeOption(index)}
              className="text-red-600 hover:text-red-800 font-bold px-2"
              title="Remove option"
            >
              X
            </button>
          </div>
        ))}
        <button
          onClick={addOption}
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          + Add option
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2">
        <button
          onClick={handleCreateQuestion}
          className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
        >
          ✅ Create Question
        </button>
        <button
          onClick={handleDeleteQuestion}
          className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md"
        >
          🗑️ Delete Question
        </button>
      </div>
    </div>
  );
};

export default CreateQuestion;
