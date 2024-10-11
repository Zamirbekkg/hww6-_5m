import './Card.scss';


const Card = ({item}) => {
    return (
        <div className="col-3">
            <div className="cart">
                <img src={item.image} alt="" className="card-img" />
                <h3 className="card-title">{
                 item.title.length > 30
                ? item.title.substr(0,27).trim() + '...'
                : item.title
                }</h3>
                <p className="card-text">{
                item.description.length > 30
                ? item.description.substr(0,27).trim() + '...'
                : item.description
                }</p>
                <p className="card-text">{item.prise}</p>
                <button className="card-btn">buy</button>
            </div>
        </div>
    );
}

export default Card;
