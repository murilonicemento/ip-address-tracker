import { useState } from "react";
import { AddressInformation } from "../../components/AddressInformation";
import { ToastContainer, toast } from "react-toastify";
import { createAPIInstance } from "../../services/axios";
import { Header } from "../../components/Header";
import arrow from "../../assets/images/icon-arrow.svg";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

export function Home() {
  const [data, setData] = useState({});
  const [userIP, setUserIP] = useState("");
  return (
    <>
      <Header />
      <main>
        {/* <ToastContainer /> */}
        <div>
          <input
            type="text"
            name="ip-address"
            id="ip-address"
            placeholder="Search for any IP address or domain"
            value={userIP}
            onChange={(event) => setUserIP(event.target.value)}
          />
          <button
            onClick={() => {
              if (userIP) {
                const instance = createAPIInstance(userIP);
                instance
                  .get()
                  .then((response) => setData(response.data))
                  .catch(() =>
                    toast.error("IP incorreto", {
                      className: "toastify-error",
                    })
                  );
              }
            }}
          >
            <img src={arrow} alt="Arrow Icon" />
          </button>
        </div>
        <AddressInformation userIP={userIP} data={data} />
      </main>
    </>
  );
}
