import React,{ useContext } from 'react'
import meetupItem from './MeetupItem.module.css'
import Card from '../UI/Card'
import FavoritesContext from '../../store/favorites-context'

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        } else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    return (
        <li className={meetupItem.item}>
            <Card>
                <div className={meetupItem.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={meetupItem.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={meetupItem.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorite'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem