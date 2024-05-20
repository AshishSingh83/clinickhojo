import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.css";

function Skeletonn({ count = "5", height, width }) {
  return (
    <>
      <div>
        <SkeletonTheme highlightColor="#444">
          <p>
            <Skeleton
              className="skeleton"
              count={count}
              width={width}
              height={height}
              duration={300}
              direction="rtl"
            />
          </p>
        </SkeletonTheme>
      </div>
    </>
  );
}

export default Skeletonn;
