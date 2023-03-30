import Card from "./Card.js";
function Tours({tours, removeTour}) {
    return (
        <div>
            <div className="heading">
                <h1 className="title">Plan With Hanzala</h1>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;