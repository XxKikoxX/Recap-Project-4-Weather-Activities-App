export function List({ activities }) {

const activity = {activities.map ((activity) =>)}

  return (
    <>
      <h1>
        {activity.isForGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here's what you can do now:"}
      </h1>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </>
  );
}

/*- {activity.isForGoodWeather ? true : false}*/
