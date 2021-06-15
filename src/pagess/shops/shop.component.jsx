import React from "react";
import "./shop.style.scss";
import ShopData from "./shop.data.js";
import PreCollection from "../../component/preview-collection/preview.component";
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: ShopData,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
