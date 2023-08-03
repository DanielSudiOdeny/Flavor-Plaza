import Restaurant from "./Restaurant";

function Restaurants({ restaurants }) {
  return (
<>

  <h2 className="restaurant-browse">Browse Restaurants</h2>
    <div className="container-fluid restaurant p-5 shadow">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
        {restaurants.map((restaurant) => (
          <Restaurant restaurant={restaurant} />
        ))}
      </div>
    </div>
</>
  
  );
}

export default Restaurants;
