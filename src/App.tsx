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
        <Line />
        <TopBanner />
        <Line />
        <BottomBanner />
        <Line />
      </Layout>
    </>
  );
}

export default App;
