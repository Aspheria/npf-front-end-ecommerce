import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NftComponent = () => {
  const nft = useSelector((state) => state.allNft.nft);
  const renderList = nft.map((nft) => {
    const { id, title, image, price, category } = nft;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/nft/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">BRL {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default NftComponent;
