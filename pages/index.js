import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Layout from "../components/Layout";

const Index = () => (
    <Layout>
        <p>
        <Link href="/explore">
            <a> Welcome to Gamer's Lobby! Start Exploring Now</a>        
        </Link>
        </p>
      <script src="https://alpa-xpsingle-single.azurewebsites.net/bundle/beacon"></script>
    </Layout>    
  );

export default Index;

