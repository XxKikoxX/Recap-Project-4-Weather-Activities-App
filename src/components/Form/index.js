export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataObject = {
      name: formData.get("name"),
      isForGoodWeather: formData.get("isForGoodWeather") === "on",
    };
    console.log(dataObject);
    event.target.reset();
    event.target.elements.name.focus();
    onAddActivity(dataObject);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new activity:</h1>
      <label htmlFor="input-name">Name of activity</label>
      <br />
      <input type="text" name="name" id="input-name"></input>
      <br />
      <input
        type="checkbox"
        name="isForGoodWeather"
        id="input-activity"
      ></input>
      <label htmlFor="input-activity">Good weather activity?</label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
