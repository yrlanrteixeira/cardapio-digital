import { useEffect, useRef, useState } from "react";
import { useFoodDataMutate } from "../../../hooks/useFoodDataMutate";
import { FoodData } from "../../../interface/FoodData";
import "./modal.css";

interface InputProps {
    label: string;
    value: string | number;
    updateValue: (value: any) => void;
}

interface ModalProps {
    closeModal: () => void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={(event) => updateValue(event.target.value)}></input>
        </>
    );
};

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();
    const modalRef = useRef<HTMLDivElement>(null);

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image,
        };
        mutate(foodData);
    };

    useEffect(() => {
        if (isSuccess) {
            closeModal();
        }
    }, [isSuccess]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [closeModal, modalRef]);

    return (
        <div className="modal-overlay">
            <div ref={modalRef} className="modal-body">
                <h2>Cadastre um novo item no Cardápio</h2>
                <form className="input-container">
                    <Input label="Item" value={title} updateValue={setTitle} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <Input label="URL da Imagem" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary"> {isLoading ? "Carregando..." : "Cadastrar"} </button>
            </div>
        </div>
    );
}
