import React from "react";
import { calculateDiscount } from "../utils/calculateDiscount";
import { currency } from "../utils/currency";

export default function ProductCard({
  name,
  images,
  price,
  real_price,
  rating_average,
  review_count,
  thumbnail_url,
  slug,
}) {
  const img1 = images?.[0]?.thumbnail_url;
  const img2 = images?.[1]?.thumbnail_url || img1;

  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        <div className="badge badge-white card-badge card-badge-left text-uppercase">
          New
        </div>
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <a className="card-img-hover" href="product.html">
            <img className="card-img-top card-img-back" src={img1} alt="..." />
            <img className="card-img-top card-img-front" src={img2} alt="..." />
          </a>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="modal"
                data-target="#modalProduct"
              >
                <i className="fe fe-eye" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-shopping-cart" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            <a className="text-muted" href="shop.html">
              Shoes
            </a>
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <a className="text-body" href="product.html">
              {name}
            </a>
          </div>
          {/* Price */}
          <div className="d-flex">
            <div className="font-weight-bold text-muted">
              {currency(real_price)}
            </div>
            <div className="text-muted ml-5 d-inline" style={{ color: "red" }}>
              -{calculateDiscount(price, real_price)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
