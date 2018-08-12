import React from "react";
import Link from "next/link";

const Tutorials = () => (
  <div className="tutorials">
    <span>Coming soon</span>
    <Link href="/">
      <a className="tutorials__go-back">Go Back</a>
    </Link>
  </div>
);

export default Tutorials;
