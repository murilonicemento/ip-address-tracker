import { useState } from "react";
import { AddressInformation } from "../../components/AddressInformation";
import { Header } from "../../components/Header";
import { Map } from "../../components/Map";
import { ToastContainer, toast } from "react-toastify";
import { createAPIInstance } from "../../services/axios";
import arrow from "../../assets/images/icon-arrow.svg";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

export function Home() {
  const [data, setData] = useState({});
  const [userIP, setUserIP] = useState("");

  const handleSearch = async () => {
    if (userIP) {
      const instance = createAPIInstance(userIP);
      try {
        const response = await instance.get();
        setData(response.data);
      } catch (error) {
        toast.error("IP inválido");
      }
    }
  };

  return (
    <>
      <Header />
      <main>
        <ToastContainer />
        <div>
          <input
            type="text"
            name="ip-address"
            id="ip-address"
            placeholder="Search for any IP address or domain"
            value={userIP}
            onChange={(event) => setUserIP(event.target.value)}
          />
          <button onClick={handleSearch}>
            <img src={arrow} alt="Arrow Icon" />
          </button>
        </div>
        <AddressInformation userIP={userIP} data={data} />
      </main>
      <Map data={data} />
    </>
  );
}
