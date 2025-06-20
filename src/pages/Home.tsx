import Omnibar from '../components/Omnibar';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';

function Home() {
  return (
    <Page sidebar={<Sidebar />}>
      <Omnibar />
    </Page>
  );
}

export default Home;
