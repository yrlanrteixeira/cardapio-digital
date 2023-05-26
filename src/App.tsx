import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/card";
import { useFoodData } from "./hooks/useFoodData";
import { CreateModal } from "./components/card/create-modal/create-modal";
import { Header } from "./components/header";
import { ButtonSimple } from "./components/buttonSimple";

function App(): JSX.Element {
  const { data, isLoading } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div className="container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-grid">
            {data?.map((foodData) => (
              <Card
                key={foodData.id}
                price={`${foodData.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}`}
                title={foodData.title}
                image={foodData.image}
              />
            ))}
          </div>
        )}
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <ButtonSimple onClick={handleOpenModal}>Cadastrar</ButtonSimple>
      </div>
    </div>
  );
}

export default App;
