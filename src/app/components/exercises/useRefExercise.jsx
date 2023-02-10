import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const divBlocRef = useRef();
    const renderBloc = useRef("Блок");
    const [state, toggleState] = useState(true);

    const hendleClickchange = () => {
        divBlocRef.current.style.width = "80px";
        divBlocRef.current.style.height = "150px";
        toggleState(!state);
    };

    useEffect(() => {
        renderBloc.current = "text";
    });

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={divBlocRef}
            >
                <small>{renderBloc.current}</small>
            </div>
            <button className="btn btn-primary" onClick={hendleClickchange}>
                изменить блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
