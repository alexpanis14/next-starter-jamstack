import Head from "next/head";

import Header from "./Header";
import Banner from "./Banner";
import NavBar from "./NavBar";

import "./Layout.scss";
import "./index.scss";

import navButtons from "../config/buttons";

const Layout = props => {
  const appTitle = `> Gamer's Lobby`;

  return (
    <div className="Layout">
      <Head>
        <title>Gamer's Lobby</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} />
      <Banner />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} />
    </div>
  );
};

export default Layout;