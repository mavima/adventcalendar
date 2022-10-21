import React from 'react';
import StoryForm from './StoryForm';
import { useHistory } from "react-router-dom";
import shuffle from '../helpers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import english from '../images/english.png';
import finnish from '../images/finnish.png';



const Story = ({setAdjectives, adjectives, inputText, setInputText, inputTarget, setInputTarget, language, setLanguage}) => {

    const history = useHistory();
    const closeImage = () => history.push('/');

    const createStory = () => {
        const shuffledList = shuffle(adjectives)
        setAdjectives(shuffledList)
    }


    const [, updateState] = React.useState();
    const reOrder = React.useCallback(() => updateState({}), []);

    const start = () => {
        setAdjectives([])
    }

    const englishLang = () => {
        setLanguage("english")
        setAdjectives([])
    }

    const finnishLang = () => {
        setLanguage("finnish")
        setAdjectives([])
    }


    let englishStory = ""
    let finnishStory = ""
    if (adjectives.length > 19) {
     englishStory = `Once upon a time there was a little ${adjectives[0].text} reindeer who lived in a ${adjectives[1].text} forest in Lapland. He had many ${adjectives[2].text} reindeer friends but sometimes he would get bored while watching the ${adjectives[3].text} night sky upon the snowy mountains. He felt there should be something more ${adjectives[4].text} in the life. A ${adjectives[5].text} November
    morning he decided to leave. He said goodbye to his friends and started a ${adjectives[6].text} journey over the hills and through the ${adjectives[7].text} forest. Days and nights passed, but the reindeer would not stop. Until one ${adjectives[9].text} evening he saw lights shining in a small valley behind the hilltops. Cautiously he walked closer and peeked between the trees. He saw a ${adjectives[10].text} big house and through the windows he could see that it was full of ${adjectives[11].text} figures who seemed extremely busy and ${adjectives[12].text}. Outside the buildings he saw more of this two-legged folk and with them quite many ${adjectives[13].text} reindeer. They were happily singing a ${adjectives[14].text} song. The little reindeer could not resist, but walked toward the ${adjectives[15].text} looking strangers. Shyly he introduced himself and was greeted with ${adjectives[16].text} words. He found out that the house belonged to Santa Claus. The  two-legged were his elves and the reindeer were of course the ones who help him deliver the ${adjectives[17].text} presents on Christmas. The little reindeer was invited to join Santa’s reindeer and he was absolutely ${adjectives[18].text} . The other reindeer promised to teach him to fly. And on Christmas Eve, he joined his new ${adjectives[19].text} friends and helped Santa on his yearly mission to bring joy and presents to all the ${adjectives[8].text} children of the world.`

    finnishStory = `Olipa kerran pieni ${adjectives[0].text} poro Jäkälä, joka asui kaukana pohjoisessa Lapissa. Yhdessä porokavereidensa kanssa hän katsoi usein, miten ${adjectives[1].text} tunturi kohosi kaukaisessa taivaanrannassa. Joskus Jäkälä jäi katsomaan tunturia ja mietti, mitä salaisuuksia se kätki taakseen.

    Oli ${adjectives[2].text} marraskuinen aamu, kun Jäkälä päätti, että oli tullut aika lähteä. Tuolla jossain ${adjectives[3].text} maailma odotti häntä. Hän hyvästeli ystävänsä ja aloitti matkan. Edessä levisi ${adjectives[4].text} jänkä ja sen takana oli tunturien rivi, joka hänen oli ylitettävä. Kun matkan katkaisi ${adjectives[5].text} joki, Jäkälä karaisi mielensä ja ui sen yli. Päivät kuluivat, mutta ${adjectives[6].text} poro vain jatkoi matkaansa.
    
    Eräänä iltana hän näki valojen loistavan läheisten tunturien välissä. Varovasti Jäkälä käveli lähemmäs ja kurkisti puiden takaa. Valojen lähde oli suuri ${adjectives[7].text} talo. Talon ikkunoiden läpi hän näki, että siellä vallitsi ${adjectives[8].text} kiire ja hässäkkä. Kaksijalkainen ${adjectives[9].text} otus toisensa jälkeen kipitti ikkunan ohi touhukkaan näköisenä. Pihalla oli lisää kaksijalkaisia, ja niiden ympärillä oli poroja. Jäkälään päin oleva poro näytti olevan ${adjectives[10].text} ja kaikki lauloivat iloisesti laulua, joka oli Jäkälän mielestä ${adjectives[11].text}.
    
    Pikku poro ei voinut vastustaa houkutusta mennä lähemmäksi. Hän esitteli itsensä ujosti ja vastaanotto oli ${adjectives[12].text}. Jäkälä sai tietää, että ${adjectives[13].text} talo oli joulupukin. Kaksijalkaiset olivat tietenkin pukin tonttuja. Porojen ${adjectives[14].text} tehtävä oli auttaa pukkia viemään ${adjectives[15].text} lahjakuorma lapsille jouluna.
    
    Jäkälälle ehdotettiin, että hän liittyisi joulupukin porojoukkoon, ja hän oli tarjouksesta ${adjectives[16].text}. Vanhempi poro lupasi opettaa hänet vetämään pukin rekeä. Jouluaattona ${adjectives[17].text} Jäkälä osallistui ylpeänä Joulupukin saattueeseen ja oli mukana varmistamassa, että jokainen ${adjectives[18].text} lapsi sai lahjansa, ja ${adjectives[19].text} joulumieli vallitsi jokaisessa kodissa.
    `
    }
    if (language === "finnish") {
        if (adjectives.length < 20) {
            return (
                <div>
                    <div className="home-button-div whole-width">
                        <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
                    </div>
                    <div className="present-list story-container">
                        <h1 className="story-title">Keksi 20 adjektiivia ja luo oma joulutarinasi</h1>
                        <p>Pyydä apua perheeltä tai ystäviltä - se on hauskempaa yhdessä!</p>
                        <StoryForm
                        adjectives={adjectives}
                        setAdjectives={setAdjectives}
                        inputText={inputText}
                        setInputText={setInputText}
                        inputTarget={inputTarget}
                        setInputTarget={setInputTarget}
                        />
                        <ol className="">
                        {adjectives.map(adjective => (
                            
                            <li key={adjective.key}>{adjective.text}</li>
                        ))}
                        </ol>
                        <img src={english} onClick={englishLang} alt="english" className="flag-button right-corner"/>
                    </div>
                </div>
    
            )} else {
                createStory()

            return(
                <div>
                    <div className="home-button-div whole-width">
                        <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
                    </div>
                    <div className="present-list story-container">
                        <h1 className="recipe-title">Joulutarina</h1>
                        <p>{finnishStory}</p>
                        <button className="story-button" onClick={reOrder}>Sekoita adjektiivit</button>
                        <button className="story-button" onClick={start}>Kokeile uudelleen</button>
                        <img src={english} onClick={englishLang} alt="english" className="flag-button right-corner"/>
                    </div>
                </div>
            )

            }
    } else {
        if (adjectives.length < 20) {
        return (
            <div>
                <div className="home-button-div whole-width">
                    <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
                </div>
                <div className="present-list story-container">
                    <h1 className="story-title">Give 20 adjectives to write your own Christmas story</h1>
                    <p>Ask friends or family to join - it's more fun together</p>
                    <StoryForm
                    adjectives={adjectives}
                    setAdjectives={setAdjectives}
                    inputText={inputText}
                    setInputText={setInputText}
                    inputTarget={inputTarget}
                    setInputTarget={setInputTarget}
                    />
                    <ol className="">
                    {adjectives.map(adjective => (
                        
                        <li key={adjective.key}>{adjective.text}</li>
                    ))}
                    </ol>
                    <img src={finnish} onClick={finnishLang} alt="english" className="flag-button right-corner"/>
                </div>
            </div>
        )} else {

            createStory()

            return(
                <div>
                    <div className="home-button-div whole-width">
                        <button className="present-button no-margin" onClick={closeImage}><FontAwesomeIcon icon={faHome} /></button>
                    </div>
                    <div className="present-list story-container">
                        <h1 className="recipe-title">Christmas Story</h1>
                        <p>{englishStory}</p>
                        <button className="story-button" onClick={reOrder}>Re-order</button>
                        <button className="story-button" onClick={start}>Try again</button>
                        <img src={finnish} onClick={finnishLang} alt="english" className="flag-button right-corner"/>
                    </div>
                </div>

            )
            
        }
    }

}

export default Story;