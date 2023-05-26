import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/card";
import { useFoodData } from "./hooks/useFoodData";
import { CreateModal } from "./components/card/create-modal/create-modal";
import { Header } from "./components/header";

function App(): JSX.Element {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <Header></Header>
      <div className="card-grid">
        {data?.map((foodData) => (
          <Card
            price={`${foodData.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}`}
            title={foodData.title}
            image={foodData.image}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Cadastrar</button>
    </div>
  );
}

export default App;
