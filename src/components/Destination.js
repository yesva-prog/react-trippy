import React from 'react'
import './Destinatonstyle.css'
import DestinationData from './DestinationData'
function Destination() {
  return (
    <div className='destination'>
      <h1>popular Destinations</h1>
      <p>Tours give you the oppurtunity to see a lot,with a time frame</p>

      <DestinationData
        className="first-des"
        heading="Tall Volcano,Batanges"
        text="Taal Volcano and Lake are entirely located in the province of Batangas. The northern half of Volcano Island falls under the jurisdiction of the lake shore town of Talisay, and the southern half in San Nicolas.The other communities that encircle Taal Lake include the cities of Tanauan and Lipa, and the municipalities of Talisay, Laurel, Agoncillo, Santa Teresita, San Nicolas, Alitagtag, Cuenca, Balete, and Mataasnakahoy.Permanent settlement on the island is prohibited by the Philippine Institute of Volcanology and Seismology (PHIVOLCS), declaring the whole Volcano Island as a high-risk area and a Permanent Danger Zone (PDZ). "
        img1="https://images.unsplash.com/photo-1508437478851-0b66cb5105b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluJTIwcGVha3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "
        img2="https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vdW50YWluJTIwcGVha3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "
       />

       <DestinationData
        className="first-des-reverse"
        heading="Mt.Daguldul,Batangas"
        text="Batangas City is classified as one of the fastest urbanizing cities of the Philippines, and is known as the Industrial Port City of Calabarzon. It is home to the Batangas International Port, one of the busiest passenger and container terminals in the Philippines. It also hosts one of the largest oil refineries in the country, three natural gas power plants, and several other major industries. In addition, the city also serves as the educational, industrial and the transportation center of the province. "
        img1="https://images.unsplash.com/photo-1591628996738-4109706107f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cml2ZXIlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
        img2="https://images.unsplash.com/photo-1563718944-758794a56b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cml2ZXIlMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "
       />
    </div>
  )
}

export default Destination
