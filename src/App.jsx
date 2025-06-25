import "./App.css";
import Header from "./components/header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Memberlist from "./components/MemberList/Memberlist";
import Section from "./components/Section/Section";

function App() {
  //const [count, setCount] = useState(0);
  const people = [
    { name: "Sivareddy", city: "Hyderabad" },
    { name: "Ramana", city: "Bangalore" },
    { name: "Charan", city: "Chennai" },
    { name: "Venu", city: "Mumbai" },
    { name: "Malli Karjuna", city: "Telangana" },
    { name: "siva kumar", city: "kakinada" },
    { name: "Ramesh", city: "kareem Nagar" },
    { name: "Naveen", city: "Nandyala" },
    { name: "Bharat", city: "Pune" },
    { name: "Somesh", city: "Kurnool" },
    { name: "Shivesh", city: "UttaraPradesh" },
    { name: "Yaswanth", city: "Mumbai" },
    { name: "Vivek", city: "Vizag" },
    { name: "Soujanya", city: "Ananthapur" },
    { name: "Chandrakala", city: "Kadapa" },
  ];

  return (
    <div>
      <Header />
      <div className="center-screen">
        {/* <AboutUs />
        <Memberlist people={people} /> */}
        <Section title="About Us">
          <AboutUs />
        </Section>
        <Section title="Members">
          <Memberlist people={people} />
        </Section>
      </div>
    </div>
  );
}

export default App;
