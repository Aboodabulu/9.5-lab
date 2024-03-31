import logo from './logo.svg';
import './App.css';

const gardenPlants = [
  {name: "Tomatoes", growthStage: "Flowering"},
  {name: "Cucumbers", growthStage: "Flowering"},
  {name: "Potatoes", growthStage: "Germination"},
  {name: "Mint", growthStage: "Fully Grown"},
];

const currentWeather = [
  {condition: "Sunny",
  temperature: 24}
];

const plantCareSchedule = [
  { name: "Tomatoes", careType: "Watering", nextDue: "Today", completed: false },
  { name: "Carrots", careType: "Fertilizing", nextDue: "In 2 days", completed: true },
  { name: "Lettuce", careType: "Harvesting", nextDue: "Next week", completed: false },
];

function GardenOverview() {
  return (
    <div>
      <h2>Garden Overview</h2>
      <ul>
        {gardenPlants.map(plant => (
          <li key={plant.name}>Plants: {plant.name} Stage: {plant.growthStage}</li>
        ))}
      </ul>
    </div>
  );
}

function WeatherAdvice() {
  const weather = currentWeather[0];
  let advice = null;
  if (weather.condition === "Sunny"){
    advice = "Great day to plant new seeds and water your garden early in the morning.";
  } else if (weather.condition === "Rainy"){
    advice = "Avoid watering today; check for snails and slugs that thrive in wet conditions.";
  } else if (weather.condition === "Cloudy"){
    advice = "Turn on LED lights or consider indoor planting for proper plant growth.";
  } else{
    advice = "Today is a beautiful day! Enjoy it!";
  }

  return (
    <div>
      <h2>Weather and Gardening Advice</h2>
      <p>{advice}</p>
      <p>Current Temperature: {weather.temperature}C</p>
    </div>
  );
}

function PlantCareList() {
  return (
    <div>
      <h2>Upcoming Gardening Tasks</h2>
      <ul>
        {plantCareSchedule.map((task,index) => (
          <li key={index} style={{color: task.completed ? 'green' : 'red'}}>
            {task.name}: {task.careType}: due {task.nextDue} - {task.completed ? 'Done' : 'Not Done'}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GardenOverview />
        <WeatherAdvice />
        <PlantCareList />
      </header>
    </div>
  );
}

export default App;
