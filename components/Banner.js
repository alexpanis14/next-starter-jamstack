 
  import "./Banner.scss";
  import Link from "next/link";

  const Banner = props => (
  <Link href="/">
    <img src="\banner.jpg" alt="my image" className="Banner"></img>    
  </Link>
);

  export default Banner;