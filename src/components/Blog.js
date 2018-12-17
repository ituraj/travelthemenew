import React, { Component } from "react";
import "../styles/App.scss";

import vietnamImage from "../images/vietnam.jpg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-light-svg-icons";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="blog mx-lg-4 mx-1 px-3">
        <div className="row">
          <h4 className="col-12 mb-4">
            Experience more: <span>Motorcycle Diaries</span>
          </h4>
        </div>
        <div className="row blog-image-wrapper">
          <img src={vietnamImage} alt="test" className="col-12 blog-image" />
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-4">
            <p>
              We’ve decided to change our way of traveling in Vietnam. While we
              were surfing the Internet, we saw many videos and descriptions of
              motorbike expeditions. I got excited, Iza was less enthusiastic.
              However we’ve decided to buy kind of a motorcycle and a scooter.
              Our plan is to go from Hanoi to Ho Chi Minh City.Hanoi is
              definitely not the best place to ride a motorcycle for the first
              time. We kept it in mind and set off at 5am to avoid the morning
              rush hours. Unfortunately the weather did not favor us. Motorcycle
              started running really poorly after heavy rain.
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 px-4 my-4">
            <p>
              First, we had to repair lights, 30 kilometers later I got a flat
              tire. In the end we had to leave the bike at the mechanic shop for
              a night. For the last 30 km to Ha Long Bay we took a bus. To avoid
              going a busy “highway” we chose the narrow road through the
              villages and rice fields. The only problem was that we were not
              sure if we can find a bridge connecting the two roads on both
              sides of the river. So we were driving ahead with hope that
              somehow we can get across the river. Unfortunately, there wasn’t
              any bridge anywhere in sight. After a while Wiola noticed a ferry.
              Well, raft, which she intended to take to go to the other side. I
              couldn’t change her mind…
            </p>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 my-4">
            <div className="row mx-0">
              <p>
                We tell all travelers heading in the opposite direction how
                beautiful is area around the Tam Coc. I don’t what we were
                thinking about, that we didn’t take more photos. I guess the
                feeling of the wind whipping in our hair distracted us.Ho Chi
                Minh road is the only alternative to Highway 1. Most of the
                expedition choose it to go across the country because it’s less
                busy and more scenic. The same trail was used by the North
                Vietnamese as a supply route for weapons and equipment.
                Currently the road is fully paved and most of the time empty and
                calm which makes it great alternative for novices like us.
              </p>
            </div>
            <div className="row mx-0">
              <Link to="/shop" className="text-dark d-flex align-items-center">
                <span>Read more</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="2x"
                  className="pl-2"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
