import "./detail.css";
export default function Detail() {
  return (
    <div className="detailContainer">
      <div className="detailNotice">
        <span className="spanDetailNotice">
          All of our partners have implemented the best health protocols
        </span>
      </div>
      <div className="detailContent">
        <span className="spanDetailContent">Legok Kondang Lodge</span>
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt=""
          className="imageDetail"
        />
        <span className="spanDetailPrice">IDR 5.250.000/night</span>
        <button className="detailBooking">Book Now</button>
      </div>
    </div>
  );
}
