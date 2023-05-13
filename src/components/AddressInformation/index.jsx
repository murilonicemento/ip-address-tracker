import PropTypes from "prop-types";
import "./style.scss";

export function AddressInformation({ data }) {
  return (
    <section>
      {data?.ip ? (
        <div>
          <h6>IP ADDRESS</h6>
          <p>{data.ip}</p>
        </div>
      ) : (
        <div>
          <h6>IP ADDRESS</h6>
          <p>IP address</p>
        </div>
      )}
      {data.location?.region ? (
        <div>
          <h6>LOCATION</h6>
          <p>{`${data.location.region}, ${data.location.city} ${data.as.asn}`}</p>
        </div>
      ) : (
        <div>
          <h6>LOCATION</h6>
          <p>Localização</p>
        </div>
      )}
      {data.location?.timezone ? (
        <div>
          <h6>TIMEZONE</h6>
          <p>UTC {`${data.location.timezone}`}</p>
        </div>
      ) : (
        <div>
          <h6>TIMEZONE</h6>
          <p>Timezone</p>
        </div>
      )}
      {data?.isp ? (
        <div>
          <h6>ISP</h6>
          <p>{data.isp}</p>
        </div>
      ) : (
        <div>
          <h6>ISP</h6>
          <p>ISP</p>
        </div>
      )}
    </section>
  );
}

AddressInformation.propTypes = {
  data: PropTypes.object,
};
