import "./App.css";
import { Form } from "./components/Form/index.js";
import { List } from "./components/List/index.js";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    const id = uid();
    const newActivityWithID = { ...newActivity, id };
    setActivities([...activities, newActivityWithID]);
    console.log(activities);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <ul>
        <List
          activities={activities.filter(
            (activity) => activity.isForGoodWeather === true
          )}
        />
      </ul>
    </>
  );
}

export default App;
