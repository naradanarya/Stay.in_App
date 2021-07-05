import "./list.css";

export default function List() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <div className="postUsername">
              <img
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
                className="imageTest"
              />
            </div>
            <span className="postName">Legok Kondang Lodge</span>
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postBottom">
        <span className="spanBottom">IDR 5.250.000/night</span>
        </div>
      </div>
    </div>
  );
}
