function Question({ question, description, onUpdate, answers, correctAnswer }) {
    const descriptionSplit = description.split("|");

    const handleUpdate = (answer) => {
        onUpdate(checkForCorrectAnswer(answer));
    };

    const checkForCorrectAnswer = (answer) => {
        if (answer === correctAnswer) {
            return true;
        }
        return false;
    };

    return (
        <div>
            <div>
                <h2>{question}</h2>
                {descriptionSplit.map((description) => <p>{description}</p>)}
                {answers.map((currentAnswer) => (

                    <button
                        className="no-bg-button"
                        onClick={() => handleUpdate(currentAnswer)}
                    >
                        <img src={`../assets/${currentAnswer}.png`} alt={currentAnswer} />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;