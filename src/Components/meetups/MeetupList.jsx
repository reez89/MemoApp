import React from 'react'
import meetupList from './MeetupList.module.css'
import MeetupItem from './MeetupItem'

function MeetupList(props) {
    return (
        <ul className={meetupList.list}>
            {/* COME SEMPRE DECIDO IO COME CHIAMARE LA PROPRIETA ALL INTERNO DI PROPS, IN QUESTO CASO meetups */}
            {props.meetups.map(meetup =>
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    description={meetup.description}
                    address={meetup.address} />)}
        </ul>
    )
}

export default MeetupList