export const QuizPage = () => {
  const quiz_link = sessionStorage.getItem("quiz");
  return (
    <div className="reg__form-container">
      <div className="container spaceTop">
        <div className="reg__success">
          <h2>Welcome Back!</h2>
          <p>Your Application is completed. An email was sent to you with details on the next step.</p>
          <p>If you did not recieve an email, kindly click on the button below</p>
          <a href={quiz_link ? quiz_link : "/"}>Proceed to Quiz</a>
        </div>
      </div>
    </div>
  );
};
