import { AddressInformation } from "../../components/AddressInformation";
import { Header } from "../../components/Header";
import arrow from "../../assets/images/icon-arrow.svg";
import "./style.scss";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <input
            type="text"
            name=""
            id="ip"
            placeholder="Search for any IP address or domain"
          />
          <button>
            <img src={arrow} alt="Arrow Icon" />
          </button>
        </div>
        <AddressInformation />
      </main>
    </>
  );
}
