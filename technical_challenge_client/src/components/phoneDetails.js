import { Card, Spin } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

function PhoneDetails({ id }) {
  console.log("id>>>", id);
  const [phoneDetails, setPhoneDetails] = useState(null);
  useEffect(() => {
    if (!isNaN(id)) fetchPhone();
  }, [id]);

  const fetchPhone = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/phones/${id}`)
      .then((response) => {
        setPhoneDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {phoneDetails ? (
        <Card
          className="phone-details align-center"
          hoverable
          cover={
            <img
              className="img__phone--medium align-center"
              alt="example"
              src={`/images/${phoneDetails.imageFileName}`}
            />
          }
        >
          <p>
            <strong>{phoneDetails.name}</strong>
          </p>
          <p>{phoneDetails.color}</p>
          <p>{phoneDetails.description}</p>
          <p>{phoneDetails.price}€</p>
        </Card>
      ) : (
        <Spin />
      )}
    </>
  );
}

export default PhoneDetails;
