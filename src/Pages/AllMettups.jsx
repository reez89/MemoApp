import { useState, useEffect } from 'react'
import MeetupList from '../Components/meetups/MeetupList'

function AllMettups() {

    const [isLoading, setIsLoading] = useState(true);
    const [meetups, setMettups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://meetup-ff8f4-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                const meetups = [];
                for(const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    }
                meetups.push(meetup)
                }
                setIsLoading(false)
                setMettups(meetups)
            });

    }, [])

    if (isLoading) {
        return (<section>
            Loading...
        </section>)
    }

    return (
        <section>
            <h1>All items</h1>
            <MeetupList meetups={meetups} />
        </section>
    )
}

export default AllMettups