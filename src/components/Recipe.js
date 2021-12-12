import {React, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import cake from '../images/cake.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import english from '../images/english.png';
import finnish from '../images/finnish.png';

const Recipe = ({dose, setDose, doses, setDoses, recipe, setRecipe, portions, setPortions, language, setLanguage}) => {

    const englishDoses = [
        {id:Math.floor(Math.random() * 100), amount: null, type: "", ingredient: "Brownie layer:"},
        {id:Math.floor(Math.random() * 100), amount: 75, type: "g", ingredient: "Dark chocolate"},
        {id:Math.floor(Math.random() * 100), amount: 50, type: "g", ingredient: "Butter"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "dl", ingredient: "Sugar"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "tsp", ingredient: "Vanilla powder"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "pinch of", ingredient: "Salt"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "", ingredient: "Egg"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "tbsp", ingredient: "Cocoa powder"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "dl", ingredient: "Flour"},
        {id:Math.floor(Math.random() * 100), amount: null, type: "", ingredient: "Mousse layer:"},
        {id:Math.floor(Math.random() * 100), amount: 3, type: "dl", ingredient: "Cream"},
        {id:Math.floor(Math.random() * 100), amount: 300, type: "g", ingredient: "Cream cheese"},
        {id:Math.floor(Math.random() * 100), amount: 250, type: "g", ingredient: "Chocolate"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "tbsp", ingredient: "Irish cream liqueur "},
        {id:Math.floor(Math.random() * 100), amount: null, type: "", ingredient: "Rashberry layer:"},
        {id:Math.floor(Math.random() * 100), amount: 4, type: "dl", ingredient: "Rashberries"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "dl", ingredient: "Rashberry juice"},
        {id:Math.floor(Math.random() * 100), amount: 0.5, type: "dl", ingredient: "Sugar"},
        {id:Math.floor(Math.random() * 100), amount: 2, type: "tl", ingredient: "Agar agar"},
        {id:Math.floor(Math.random() * 100), amount: 150, type: "g", ingredient: "Thin mint chocolates"},
    ]

    const finnishDoses = [
        {id:Math.floor(Math.random() * 100), amount: null, type: "", ingredient: "Brownie-kerros:"},
        {id:Math.floor(Math.random() * 100), amount: 75, type: "g", ingredient: "Tummaa suklaata"},
        {id:Math.floor(Math.random() * 100), amount: 50, type: "g", ingredient: "Voita"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "dl", ingredient: "Sokeria"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "tl", ingredient: "Vaniljasokeria"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "hyppysellinen", ingredient: "Suolaa"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "", ingredient: "Muna"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "rkl", ingredient: "Kaakaojauhetta"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "dl", ingredient: "Vehnäjauhoa"},
        {id:Math.floor(Math.random() * 100), amount: null, type: "", ingredient: "Mousse-kerros:"},
        {id:Math.floor(Math.random() * 100), amount: 3, type: "dl", ingredient: "Kuohukermaa"},
        {id:Math.floor(Math.random() * 100), amount: 300, type: "g", ingredient: "Tuorejuustoa"},
        {id:Math.floor(Math.random() * 100), amount: 250, type: "g", ingredient: "Suklaata"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "rkl", ingredient: "Irish cream likööriä "},
        {id:Math.floor(Math.random() * 100), amount: null, type: "", ingredient: "Vadelmahyytelö:"},
        {id:Math.floor(Math.random() * 100), amount: 4, type: "dl", ingredient: "Vadelmia"},
        {id:Math.floor(Math.random() * 100), amount: 1, type: "dl", ingredient: "Vadelmamehua"},
        {id:Math.floor(Math.random() * 100), amount: 0.5, type: "dl", ingredient: "Sokeria"},
        {id:Math.floor(Math.random() * 100), amount: 2, type: "tl", ingredient: "Agar agar -jauhetta"},
        {id:Math.floor(Math.random() * 100), amount: 150, type: "g", ingredient: "Ohuita minttusuklaita"},
    ]

    const englishRecipe = () => {
        setDoses(englishDoses);
        setLanguage("english");
    }

    const finnishRecipe = () => {
        setDoses(finnishDoses);
        setLanguage("finnish");
        
    }


    const amountChange = (e) => {
        e.preventDefault();
        doses.forEach((dose) => {
            setDose(dose);
            let single = dose.amount / 10
            let newAmount = single * portions
                console.log(single);
                console.log(newAmount);
            setDose(dose.amount = newAmount)
        });
    }

    const history = useHistory();
    const closeImage = () => history.push('/');

    useEffect(() => {
        englishRecipe();
    }, [])

  
    if (language === "finnish") {

        return (
            <div>
            <div className="home-button-div whole-width">
                <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
            </div>
            <div className="recipe present-list">
            <h2 className="recipe-title">Suklaajuustokakku vadelmahatulla</h2>
            <div className="recipe-img-container">
                <img className="cake-img" src={cake} alt="chocolate rashberry cheesecake"/>
                <img src={english} onClick={englishRecipe} alt="english" className="flag-button"/>
            </div>
            <div className="recipe-modify-container">
                <p>Muuta annosmäärää:</p>
                <form className="changeAmount" onSubmit={amountChange}>
                <FontAwesomeIcon icon={faUser} />:
                <input type="number" value={portions} className="recipe-form-input" onChange={(e)=> setPortions(e.target.value)} />
                <input type="submit" value="Change" className="recipe-submit"/>
                </form>
            </div>
            

            <div className="recipe-box">
                    <div className="doses">
                {doses.map((dose) =>
                    <p>{dose.amount} {dose.type} {dose.ingredient}</p>
                )}
            </div>
            
            <div>

                <ul className="recipe-instructions">
                    <h5 className="instruction-title">Brownie-kerros</h5>
                    <li>Sulata voi ja tumma suklaa kattilassa.</li>
                    <li>Lisää sokerit ja muna ja sekoita hyvin.</li>
                    <li>Sekoita kaakaojauhe vehnäjauhoihin ja siivilöi ja sekoita ne taikinaan.</li>
                    <li>Kaada taikina kakkuvuokaan ja paista 275 asteessa noin 15 minuuttia.</li>
                    <h5 className="instruction-title">Mousse-kerros</h5>
                    <li>Sulata suklaa</li>
                    <li>Notkista tuorejuusto.</li>
                    <li>Vaahdota kerma.</li>
                    <li>Sekoita 2rkl tuorejuustoa sulatettuun suklaaseen.</li>
                    <li>Lisää tuorejuusto, suklaa ja likööri kermavaahtoon ja vatkaa hyvin. Liköörin voi korvata esim. Marianne-rakeilla.</li>
                    <li>Kaada seos vuokaan jäähtyneen kakkupohjan päälle.</li>
                    <li>Hyydytä jääkaapissa vähintään 2 tuntia.</li>
                    <h5 className="instruction-title">Vadelmakerros</h5>
                    <li>Keitä vademia, sokeria ja 0.25dl mehua kattilassa noin 5 minuuttia.</li>
                    <li>Sekoita agar agar -jauhe 0.25 desiin mehua ja lisää marjaseokseen hyvin sekoittaen.</li>
                    <li>Anna kiehua  2 minuuttia ja jäähdytä seos sitten haaleaksi.</li>
                    <li>Vuoraa keittolautanen muovikelmulla ja kaada marjaseos lautaselle. Hyydytä jääkaapissa noin 2 tuntia.</li>
                    <li>Kumoa vadelmahyytelö kakun päälle. Koristele minttusuklailla.</li>

                </ul>
            </div>
            </div>
        </div>
        </div>
        )

    } else {
        return (
            <div>
                            <div className="home-button-div whole-width">
                <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
            
            </div>
            <div className="recipe present-list">
                <h2 className="recipe-title">Chocolate Rashberry Cheesecake</h2>
                <div className="recipe-img-container">
                    <img className="cake-img" src={cake} alt="chocolate rashberry cheesecake"/>
                    <img src={finnish} onClick={finnishRecipe} alt="finnish" className="flag-button"/>
                </div>
                <div className="recipe-modify-container">
                    <p>Change number of portions:</p>
                    <form className="changeAmount" onSubmit={amountChange}>
                    <FontAwesomeIcon icon={faUser} />:
                    <input type="number" value={portions} className="recipe-form-input" onChange={(e)=> setPortions(e.target.value)} />
                    <input type="submit" value="Change" className="recipe-submit"/>
                    </form>
                </div>
                

                <div className="recipe-box">
                        <div className="doses">
                    {doses.map((dose) =>
                        <p>{dose.amount} {dose.type} {dose.ingredient}</p>
                    )}
                </div>
                
                <div>

                    <ul className="recipe-instructions">
                        <h5 className="instruction-title">Brownie layer</h5>
                        <li>Melt butter and the first amount of chocolate in a kettle.</li>
                        <li>Add sugar, vanilla and egg and mix well.</li>
                        <li>Mix cocoa with flour and add them in the mixture through a sifter. Mix again.</li>
                        <li>Pour the dough in a cake mold and bake in 175C for 15 minutes.</li>
                        <h5 className="instruction-title">Mousse layer</h5>
                        <li>Melt the chocolate.</li>
                        <li>Mix the cream cheese until it is soft.</li>
                        <li>Whip the cream.</li>
                        <li>Mix 2tbsp of cream cheese in the melted chocolate.</li>
                        <li>Add cream cheese, chocolate and liquor in the whipped cream and mix well.</li>
                        <li>Pour the mixture on top of the cake (first make sure it is not warm anymore).</li>
                        <li>Leave the cake in the fridge for at least two hours.</li>
                        <h5 className="instruction-title">Rasbberry layer</h5>
                        <li>Boil the berries, sugar  and 0.25dl juice for 5 minutes.</li>
                        <li>Mix agar agar with 0.25dl cold juice and add it in the kettle stirring well.</li>
                        <li>Boil for 2 minutes, then let the mixture cool until it is lukewarm. </li>
                        <li>Cover a soup plate with plastic foil and pour the rashberry mixture on it. Refridgerate for 2 hours.</li>
                        <li>Add the rashberry layer on top of the cake. Decorate with mint thin chocolates.</li>

                    </ul>
                </div>
                </div>
            </div>
            </div>
        )

    }
}

export default Recipe;