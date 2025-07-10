import Line from "./commons/Line";
import BottomBanner from "./components/BottomBanner";
import Notice from "./components/Notice";
import TopBanner from "./components/TopBanner";
import Layout from "./layout";

function App() {
  return (
    <main>
      <Layout>
        <Line />
        <Notice />
        <Line />
        <TopBanner />
        <Line />
        <BottomBanner />
        <Line />
      </Layout>
    </main>
  );
}

export default App;
