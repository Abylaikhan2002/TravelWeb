import Mountain1 from "../assets/actor.jpg"
import Mountain2 from "../assets/Tvolcano.jpg"
import Mountain3 from "../assets/desert.jpg"
import Mountain4 from "../assets/MarbleC.jpg"
import Mountain5 from "../assets/reinier1.jpg"
import Mountain6 from "../assets/reinier2.jpg"
import Mountain7 from "../assets/redwood1.jpg"
import Mountain8 from "../assets/redwood2.jpg"
import "./DestinationStyles.css"
import DestinationData from "./DestinationData"

const Destination = () =>{
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity</p>

          <DestinationData
          className="first-des"
          heading="Taal Volcano, Batangas"
          text="Taal Volcano is the second most active volcano found in the province of Batangas.  A complex volcano in the middle of Taal Lake and is often called an island within a lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation.  It offers a very a spectacular view seen from Tagaytay Ridge.  Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines. The main Vulcan point situated in the main crater lake, which is on the volcano island that is in Taal lake, which is in the main island of the Philippines (Luzon). Being part of the Pacific Ring if Fire, Taal Volcano has caused loss of lives estimated between 5,000 to 6,000. This is based on the 33 recorded eruption since 1572 to 2011.  Taal Volcano was also designated as a decade volcano. Records also say that volcano eruptions deposited pyroclastic material as far as where Manila, the capital of the Philippines, is. The volcano island is made of multiple and overlapping cones and craters.  Only 47 have been identified which are 26 tuff cones, 5 cinder cones and 4 maars."
          img1={Mountain1}
          img2={Mountain2}
          />
          <DestinationData
          className="first-des-reverse"
          heading="Marble Canyon"
          text="Marble Canyon is the section of the Colorado River canyon in northern Arizona from Lee's Ferry to the confluence with the Little Colorado River, which marks the beginning of the Grand Canyon. Lee's Ferry is a common launching point for river runners starting their journey through Marble Canyon and then onward to the Grand Canyon. Marble Canyon is also well known for the Navajo Bridge, where US Highway 89A crosses the Colorado River. Marble Canyon marks the western boundary of the Navajo Nation. In 1975, the former Marble Canyon National Monument, which followed the Colorado River northeast from the Grand Canyon to Lee's Ferry, was made part of Grand Canyon National Park."
          img1={Mountain3}
          img2={Mountain4}
          />
          <DestinationData
          className="first-des"
          heading="Mount Rainier"
          text="Mount Rainier, also known as Tahoma, is a large active stratovolcano in the Cascade Range of the Pacific Northwest in the United States. The mountain is located in Mount Rainier National Park about 59 miles (95 km) south-southeast of Seattle. With a summit elevation of 14,411 ft (4,392 m), it is the highest mountain in the U.S. state of Washington, the most topographically prominent mountain in the contiguous United States, and the tallest in the Cascade Volcanic Arc. Due to its high probability of an eruption in the near future and proximity to a major urban area, Mount Rainier is considered one of the most dangerous volcanoes in the world, and it is on the Decade Volcano list. The large amount of glacial ice means that Mount Rainier could produce massive lahars that could threaten the entire Puyallup River valley and other river valleys draining Mount Rainier, including the Carbon, White, Nisqually, and Cowlitz (above Riffe Lake). According to the United States Geological Survey, about 80,000 people and their homes are at risk in Mount Rainier's lahar-hazard zones.Between 1950 and 2018, 439,460 people climbed Mount Rainier. Approximately 84 people died in mountaineering accidents on Mount Rainier from 1947 to 2018."
          img1={Mountain5}
          img2={Mountain6}
          />
          <DestinationData
          className="first-des-reverse"
          heading="National Redwood Forrest"
          text="Officially, the oldest living coast redwood has been alive for at least 2,200 years, but foresters believe some coast redwoods may be much oldersee footnote number4. Their bark helps them survive many hardships that other trees cannot—it can be at least a foot thick and contains lots of tannins, a compound that makes redwoods resistant to insects, fungus and diseases. Their bark has very little resin which is one of the ways redwoods are fire resilient. Although a redwoods’ ability for a long lifespan contributed to its Latin name, Sequoia sempervirens—sempervirens means evergreen or everlasting in Latin—most of the remaining redwoods in the Santa Cruz Mountains are “second-growth”, about 50-150 years old. When you walk or ride through the Santa Cruz Mountains, you are in a nursery of young redwoods that, if protected, can live for 2,000 years cleaning carbon from the air, providing habitat for wildlife, and inspiring people for generations to come. That’s how our founders named our nonprofit organization working to protect, expand and care for the local redwood forests “Sempervirens” in 1900. Learn more about Sempervirens Fund’s history protecting redwoods."
          img1={Mountain7}
          img2={Mountain8}
          />

            
        </div>

    );
};

export default Destination