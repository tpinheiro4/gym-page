export default function Workout() {
    const workoutCards = [
        {
            name: 'braços',
            image: '/src/assets/arms.png',
        },
        {
            name: 'costas',
            image: '/src/assets/back.png',
        },
        {
            name: 'abdômen',
            image: '/src/assets/abs.png',
        },
        {
            name: 'costas',
            image: '/src/assets/legs.png',
        },
        {
            name: 'ombros',
            image: '/src/assets/workoutLogo.png',
        },
    ]

    return (
        <section className="workout">
            <div className="container">
                <h2>Sugestão de treinos</h2>

                <div className="cards">
                    {workoutCards.map((card, index) => (
                        <div key={index} className="cards__item">
                            <div className='cards__item--content'>
                                <img className="background" src={card.image} alt="" />
                                <p>{card.name}</p>
                            </div>

                            <button className="cards__item--button">Saiba Mais</button>
                        </div> 
                    ))}
                </div>
            </div>
        </section>
    )
}