import React from 'react';

const Assessment = ({ match }) => {
  const courseId = match.params.courseId;

  // Add logic for rendering the assessment page for the specific courseId

  return (
    <div>
      <h2>Assessment for Course {courseId}</h2>
      {/* Render the assessment content */}
    </div>
  );
};

export default Assessment;
