import image from '../../assets/workoutLogo.png'

export default function Workout() {
    return (
        <section className="workout-container container">
            <h2>Sugestão de treinos</h2>
            <div className="card-container">
                <div className="card">
                    <div className='card-content'>
                        <p>Lorem, ipsum.</p>
                    </div>
                    <button>Saiba Mais</button>
                </div>

                <div className="card">
                    <div className='card-content'>
                        <p>Lorem, ipsum.</p>
                    </div>
                    <button>Saiba Mais</button>
                </div>
                
                <div className="card">
                    <div className='card-content'>
                        <p>Lorem, ipsum.</p>
                    </div>
                    <button>Saiba Mais</button>
                </div>

                <div className="card">
                    <div className='card-content'>
                        <p>Lorem, ipsum.</p>
                    </div>
                    <button>Saiba Mais</button>
                </div>
            </div>
        </section>
    )
}