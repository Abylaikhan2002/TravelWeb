import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../assets/landscape.jpg"
import Trip2 from "../assets/museum.jpg"
import Trip3 from "../assets/arches.jpg"

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unque destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip3}
                heading = "Trip in Arizona"
                text="During the trip, all the equipment you need to enjoy camping under the stars along the riverbank at night is provided by our outfitter, Arizona River Runners. This includes comfy cots, bedding, tarps, and tents as needed.  Plus, savor delicious meals prepared for you throughout the trip.  A packing list of suggested items to bring will be included in your trip information packet."
                />
                <TripData
                image={Trip2}
                heading = "Trip in Turkey"
                text="Despite not being the capital, Istanbul is Turkey's most well-known city and a major tourist destination with attractions like Hagia Sophia or the Blue Mosque; the beautiful Bosphorus Strait offers gorgeous views of the European and Asian coastlines. The fascinating history will transport you through the centuries since many ancient civilizations, such as the Romans, Greeks, Ottomans, and the Byzantine Empire, left their mark on this country. In a nutshell, there are myriad things to see and do in Turkey."
                />
                <TripData
                image={Trip1}
                heading = "Trip in China"
                text="China, being the 4th largest country in area in the World and the 4th most visited country by foreigners, provides so many reasons to spend time here. To mention a few, there is its incredibly diverse landscapes, its rich historical heritage with 5000 years of culture, its mouthwatering cuisine, its emergence into the modern world and its friendly people, all available on China tours. "
                />
            </div>
        </div>
    )
}

export default Trip;
