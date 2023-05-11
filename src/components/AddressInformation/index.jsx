import { useEffect, useState } from "react";
import axios from "../../services/axios";
import "./style.scss";

export function AddressInformation() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get()
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <section>
      <h6>IP ADDRESS</h6>
      <p>{data.ip}</p>
      <h6>LOCATION</h6>
      <p>{`${data.location.region}, ${data.location.country}`}</p>
      <h6>TIMEZONE</h6>
      <p>UTC {`${data.location.timezone}`}</p>
      <h6>ISP</h6>
      <p>{data.isp}</p>
    </section>
  );
}
