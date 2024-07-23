import { useState } from "react";
import GoalList from "../GoalList/GoalList";
import NewGoal from "../NewGoal/NewGoal";
const AppLayout = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);
 
  const addNewGoalHandler = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal1));
    setCourseGoals((prevCourseGoals1) => prevCourseGoals1.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h1
        style={{
          backgroundColor: "darkorange",
          color: "White",
          padding: "15px",
          textAlign: "center",
        }}
      >
       Course goals form
      </h1>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};
export default AppLayout;
