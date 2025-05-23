import pokeapi_256 from './assets/pokeapi_256.png'
import eevee from './assets/eevee.jpg'
import './PokeGrid.css'


const PokeGrid = () => {
    return (
        <div className='PokeGrid'>
            <img src={eevee} />
            <img src={pokeapi_256} />
            
        </div>
    )
}

export default Home