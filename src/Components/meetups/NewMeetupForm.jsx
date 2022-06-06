import React, {useRef} from 'react'
import Card from '../UI/Card'
import newMeetupForm from './NewMeetupForm.module.css'

function NewMeetupForm(props) {

    const titleInput = useRef();
    const imageInput = useRef();
    const addressInput = useRef();
    const descriptionInput = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const title = titleInput.current.value;
        const image = imageInput.current.value;
        const address = addressInput.current.value;
        const description = descriptionInput.current.value;

        const newMeetup = {
            title: title,
            image: image,
            address: address,
            description: description
        }

        props.onAddMeetup(newMeetup);
    }

  return (
    <Card >
        <form className={newMeetupForm.form} onSubmit={submitHandler}>
            <div className={newMeetupForm.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id='title' ref={titleInput}/>
            </div>
            <div className={newMeetupForm.control}>
                <label htmlFor="image"  >Meetup Image</label>
                <input type="url" required id='image' ref={imageInput}/>
            </div>
            <div className={newMeetupForm.control}>
                <label htmlFor="address"  >Meetup Adress</label>
                <input type="text" required id='address' ref={addressInput}/>
            </div>
            <div className={newMeetupForm.control}>
                <label htmlFor="description" >Meetup Description</label>
                <textarea name="description" id="description" rows="5"  ref={descriptionInput}></textarea>
            </div>
            <div className={newMeetupForm.actions}>
                <button type="submit">Add Meetup</button>
            </div>
        </form>
    </Card>
  )
}

export default NewMeetupForm