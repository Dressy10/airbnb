import React from "react"
import Header from "./Header"
import Hero from "./Hero"
import Card from "./Card"
import cardData from "./cardData"
import "./styles/style.css"

const App = () => {
    const cardElement = cardData.map(card => {
        return <Card
                    key={card.id}
                    item={card}
                />
    })
    return(
        <div>
            <Header />
            <Hero / >
            <div className="main-card">
               {cardElement}
            </div>
            
        </div>
    )
}

export default App