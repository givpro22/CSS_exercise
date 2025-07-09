import Line from "./commons/Line";
import BottomBanner from "./components/BottomBanner";
import Notice from "./components/Notice";
import TopBanner from "./components/TopBanner";
import Layout from "./layout";

function App() {
  return (
    <>
      <Layout>
        <Line />
        <Notice />
        <TopBanner />
        <BottomBanner />
      </Layout>
    </>
  );
}

export default App;
