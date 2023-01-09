import { useEffect, useState } from "react";

export default function Filter(prop) {
  const prd = prop.prdata;
  const [ship, setship] = useState(false);
  const [instal, setinstal] = useState("all");

  useEffect(() => {
    if (ship) {
      if (instal === "0-3") {
        prop.setfiltprd(
          prd.filter(
            (item) =>
              item.installments >= 0 &&
              item.installments < 4 &&
              item.freeship === true
          )
        );
      } else if (instal === "4-6") {
        prop.setfiltprd(
          prd.filter(
            (item) =>
              item.installments >= 4 &&
              item.installments < 7 &&
              item.freeship === true
          )
        );
      } else if (instal === "More than 6") {
        prop.setfiltprd(
          prd.filter((item) => item.installments >= 6 && item.freeship === true)
        );
      } else {
        prop.setfiltprd(prd.filter((item) => item.freeship === true));
      }
    } else {
      if (instal === "0-3") {
        prop.setfiltprd(
          prd.filter((item) => item.installments >= 0 && item.installments < 4)
        );
      } else if (instal === "4-6") {
        prop.setfiltprd(
          prd.filter((item) => item.installments >= 4 && item.installments < 7)
        );
      } else if (instal === "More than 6") {
        prop.setfiltprd(prd.filter((item) => item.installments >= 6));
      } else {
        prop.setfiltprd(prd);
      }
    }
  }, [ship, instal]);

  const handleinst = (event) => {
    setinstal(event.target.value);
  };

  function handleship(event) {
    setship(!ship);
  }

  return (
    <div style={{ borderStyle: "solid" }}>
      <p>
        Choose installments
        <select defaultValue={"any"} onChange={handleinst}>
          <option>any</option>
          <option>0-3</option>
          <option>4-6</option>
          <option>More than 6</option>
        </select>
      </p>
      <p>
        Free shipping
        <input type="checkbox" checked={ship} onChange={() => handleship()} />
        <p>Filters</p>
      </p>
    </div>
  );
}
