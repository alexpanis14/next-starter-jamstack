import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import Layout from "../components/Layout";

const Index = () => (
    <Layout>
        <table>
        <tr>
            <td>
            <p>
            <Link href="/explore">
                <a> Welcome to Gamer's Lobby! Start Exploring Now</a>        
            </Link>
            </p>
            </td>
        </tr>
        <tr>
            <td>
            <script src="//alpa-xpsingle-single.azurewebsites.net/bundle/beacon"></script>
            </td>
        </tr>
      </table>
    </Layout>
  );

export default Index;

