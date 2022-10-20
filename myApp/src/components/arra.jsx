import React from "react";

const Rock = () => {
  const [follower, unfollower] = React.useState(false);
  return (
    <div className="brands">
      <div className="brandname">
        <h4>Oneplus</h4>
        <i>brand</i>
        {!follower ? (
          <div className="buttonchange">
            <button onClick={() => unfollower(true)}>follow</button>
          </div>
        ) : (
          <div className="buttonchange">
            <button onClick={() => unfollower(false)}>unfollow</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Rock;
