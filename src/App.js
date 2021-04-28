import Header from "./components/Header"
import FilterCard from "./components/FilterCard"
import CheckOutCard from "./components/CheckOutCard"
import FailureCard from "./components/FailureCard"
import LicenseCard from "./components/LicenseCard"
import DiscordCard from "./components/DiscordCard"
import TransferCard from "./components/TransferCard"
import DownloadCard from "./components/DownloadCard"
import Table from "./components/Table"

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row  flex-wrap layOut">
        <div className="col-lg-8 col-12 ">
          <div className="d-flex flex-wrap justify-content-between mb-5">
            <FilterCard />
            <CheckOutCard />
            <FailureCard />
          </div>

          <Table />

        </div>
        <div className="col-lg-4 col-12">
          <LicenseCard />
          <DiscordCard />
          <TransferCard />
          <DownloadCard />
        </div>

      </div>

    </div>

  );
}

export default App;
