import React, { useState } from 'react';

function NewComponent() {
    const questionanswer = [
        {
            question: 'Какой ваш любимый жанр фильмов?',
            films: ['Драма', 'Комедия', 'Экшн', 'Научная фантастика']
        },
        {
            question: 'Какой ваш любимый фильм всех времен?',
            films: ['Форрест Гамп', 'Титаник', 'Крестный отец', 'Темный рыцарь']
        },
        {
            question: 'Какой режиссер вам нравится больше всего?',
            films: ['Кристофер Нолан', 'Квентин Тарантино', 'Мартин Скорсезе', 'Стивен Спилберг']
        },
        {
            question: 'Какой актер вам нравится больше всего?',
            films: ['Леонардо ДиКаприо', 'Том Хэнкс', 'Джонни Депп', 'Брэд Питт']
        },
        {
            question: 'Какой фильм вы смотрели больше всего раз?',
            films: ['Гарри Поттер', 'Властелин колец', 'Звездные войны', 'Матрица']
        }
    ];

    const [index, setIndex] = useState(0);
    const [answer, setAnswer] = useState(null);

    // добавить блокировку перехода 
    const [isCompleted, setend] = useState(false);

    function forward() {
        if (index < questionanswer.length - 1) {
            setIndex((prevIndex) => prevIndex + 1);
            setAnswer(null); 
        } else {
            setend(true);
        }
    }

    function back() {
        if (index > 0) {
            setIndex((prevIndex) => prevIndex - 1);
            setend(null); 
        }
    }

    function handleOptionChange(event) {
        setAnswer(event.target.value);
    }

    return (
       
            
            
        
        <div className='jumbotron d-flex align-items-center min-vh-100'>
        <div className='container mt-5 '>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className="card">
                        <div className="card-body">
                            {isCompleted ? (
                                <h4 className="card-title mb-4">Спасибо за ответ!</h4>
                            ) : (
                                <>
                                    <h4 className="card-title mb-4">{questionanswer[index].question}</h4>
                                    {questionanswer[index].films.map((film, i) => (
                                        <div className="form-check mb-3" key={i}>
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id={`fill${i}`} value={film} checked={answer === film} onChange={handleOptionChange} />
                                            <label className="form-check-label" htmlFor={`fill${i}`}>{film}</label>
                                        </div>
                                    ))}
                                </>
                            )}
                            <div className="d-flex justify-content-between mt-4">
                                {!isCompleted && (
                                    <>
                                        <button className="btn btn-secondary" onClick={back} disabled={index === 0}>Назад</button>
                                        <button className="btn btn-primary" onClick={forward} disabled={index === questionanswer.length - 1}>Вперед</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default NewComponent;
