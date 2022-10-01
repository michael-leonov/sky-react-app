/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import ContentLoader from "react-content-loader"

function SkeletonTrack(props) {
  return <ContentLoader 
    speed={3}
    width={1100}
    height={50}
    viewBox="0 0 1100 50"
    backgroundColor="#413e3e"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="1022" y="216" rx="5" ry="5" width="220" height="10" /> 
    <rect x="473" y="212" rx="5" ry="5" width="220" height="10" /> 
    <rect x="0" y="0" rx="0" ry="0" width="51" height="51" />
    <rect x="68" y="0" rx="0" ry="0" width="200" height="51" />
    <rect x="318" y="0" rx="0" ry="0" width="350" height="51" />
    <rect x="728" y="0" rx="0" ry="0" width="300" height="51" />
    <rect x="1068" y="0" rx="0" ry="0" width="20" height="51" />
  </ContentLoader>
}

export default SkeletonTrack