import React, { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar"

const RecipeInfo = ({image, title, id}) => {
    const API_KEY = process.env.REACT_APP_FOOD_API_KEY;
    let params = useParams()
    const[vegetarian, setVegetarian] = useState(false)
    const[healthScore, setHealthScore] = useState(0)
    const[sourceURL, setSourceURL] = useState('')
    const[title2, setTitle2] = useState('')
    const[img, setImg] = useState('')
    useEffect(() => {
        const getRecipeInfo = async () => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${API_KEY}`)
            const json = await response.json()
            setTitle2(json.title)
            setImg(json.image)
            setSourceURL(json.sourceUrl)
            setHealthScore(json.healthScore)
            setVegetarian(json.vegetarian)
        }
        getRecipeInfo().catch(console.error)
    }, [id])
    return (


        <div className="App">
            <Link to="/" className="sidebar">
                <Sidebar />
            </Link>
            <div>
                <img id='big-img' src={img}/>
                <h1>{title2}</h1>
                <h5>{`ID: ${params.id}`}</h5>
                <h5>{`Health Score: ${healthScore}`}</h5>
                <h5>{`Vegetarian: ${vegetarian}`}</h5>
                <div>{`Source url: ${sourceURL}`}</div>
            </div>
            
        </div>
    )
}

export default RecipeInfo;