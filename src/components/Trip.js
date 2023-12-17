import React from 'react'
import './Tripstyle.css'
import TripData from './TripData'
function Trip() {
  return (
    <>
      <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps</p>
        <div className='tripcard'>
            <TripData 
              image="https://images.unsplash.com/photo-1561100344-0cce8621ca6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxNUGJqZE9MQXljWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              heading="Trip in Indonesia"
              text="Indonesia consists of thousands of distinct native ethnic and hundreds of linguistic groups, with Javanese being the largest. A shared identity has developed with the motto Bhinneka Tunggal Ika (Unity in Diversity literally, many, yet one), defined by a national language, cultural diversity, religious pluralism within a Muslim-majority population, and a history of colonialism and rebellion against it. "

            />
             <TripData 
              image="https://images.unsplash.com/photo-1555217851-6141535bd771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              heading="Trip in Singapore"
              text="Singapore's history dates back at least a millennium, having been a maritime emporium known as Temasek and subsequently as a major constituent part of several successive thalassocratic empires. Its contemporary era began in 1819 when Stamford Raffles established Singapore as an entrepôt trading post of the British Empire. In 1867, the colonies in Southeast Asia were reorganised  "
              
            />
             <TripData 
              image="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8RHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              heading="Trip in Dubai"
              text="Dubai is thought to have been established as a fishing village in the early 18th century[30] and was, by 1822, a town of some 700–800 members of the Bani Yas tribe and subject to the rule of Sheikh Tahnun bin Shakhbut of Abu Dhabi.[31] In 1822, a British naval surveyor noted that Dubai was at that time populated with a thousand people living in an oval-shaped town surrounded by a mud wall, "
              
            />
        </div>
      </div>
    </>
  )
}

export default Trip
