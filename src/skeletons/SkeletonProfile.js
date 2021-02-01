import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./skeleton.css";
import Shimmer from "./Shimmer";

const SkeletonProfile = () => {
    return (
        <div className={`skeleton-wrapper`}>
            <div className='skeleton-profile'>
                <div>
                    <SkeletonElement type='avatar' />
                </div>
                <div>
                    <SkeletonElement type='title' />
                    <SkeletonElement type='text' />
                    <SkeletonElement type='text' />
                </div>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonProfile;
