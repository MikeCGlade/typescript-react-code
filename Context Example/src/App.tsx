import "./css/app.css";
import { Card } from "./components/card.tsx";
import ComponentA from "./components/ComponentA.tsx";

function App() {
    const cards = [
        {
            title: "Card One",
            image: "src/assets/images/card.jpg",
            description: "Description for card one."
        },
        {
            title: "Card Two",
            image: "src/assets/images/card2.jpg",
            description: "Description for card two."
        },
        {
            title: "Card Three",
            image: "src/assets/images/card3.jpg",
            description: "Description for card three."
        }
    ];

  return (
    <>
        <section className="card-grid">
            {cards.map((card, index) => (
                <Card
                key={index}
                title={card.title}
                image={card.image}
                description={card.description}
                />
            ))}
        </section>

        <ComponentA />
    </>
  )
}

export default App
