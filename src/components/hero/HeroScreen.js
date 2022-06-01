import React, { useMemo } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

//import batman from '../../assets/image/dc-batman.jpg' // estatico
const heroImages =  require.context('../../assets/image', true)

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate()

  const hero = useMemo(() => getHeroById(heroeId), [heroeId])

  if (!hero) {
    return <Navigate to='/' />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  //const imagePath = `/assets/image/${id}.jpg`;


  const handleReturn = () => {
    navigate(-1)
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          //src={imagePath}
          //src={`../assets/image/${id}.jpg`} // desde public/assets
          //src={batman} import
          src={ heroImages(`./${id}.jpg`) }
          alt={superhero}
          className="img-thumbnail"
        />

      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item"><b>Alter ego:</b> {alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
          <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
        </ul>

        <h5>characters</h5>
        <p>{characters}</p>

        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Regresar
        </button>
      </div>
    </div>
  )
}
