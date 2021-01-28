import React, { useState, useRef, useEffect } from "react";
import { YMaps, Map } from "react-yandex-maps";
import "./style.css";

const mapState = {
  center: [53.863402, 27.466978],
  zoom: 10,
};

export default function YandexMap({ id }) {
  const [ymaps, setYmaps] = useState(null);
  const [text, setText] = useState(null);
  const [bounds, setBounds] = useState(null);
  const [firstAdress, setFirstAdress] = useState(null);
  const [secondAdress, setSecondAdress] = useState(null);
  const [thirdAdress, setThirdAdress] = useState(null);

  const routes = useRef();
  const mapRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (text && searchRef.current) {
      searchRef.current.search(text);
    }
  }, [text]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setBounds(bounds);
    }
  }, [bounds]);

  const firstMark = [firstAdress, secondAdress, thirdAdress];

  const createMark = (e) => {
    setFirstAdress(e.target.closest("form").querySelectorAll("input")[0].value);
    setSecondAdress(
      e.target.closest("form").querySelectorAll("input")[1].value
    );
    setThirdAdress(e.target.closest("form").querySelectorAll("input")[2].value);
    console.log(firstMark);
    setTimeout(() => {
      document.querySelector(".ymaps-2-1-77-route-pin__label-a").click();
    }, 2000);
  };

  const getRoute = (ref) => {
    if (ymaps) {
      const multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: firstMark,
          params: {
            results: 2,
          },
        },
        {
          boundsAutoApply: true,
          routeActiveStrokeWidth: 6,
          routeActiveStrokeColor: "#fa6600",
        }
      );

      routes.current = multiRoute;
      ref.geoObjects.add(multiRoute);
    }
  };

  if (mapRef.current) {
    console.log(mapRef);
  }

  return (
    <div className="map_container">
      <div className="map" id={id}>
        <YMaps
          version="2.1.77"
          query={{
            apikey: "af28acb6-4b1c-4cd1-8251-b2f67a908cac",
          }}
        >
          <Map
            modules={[
              "multiRouter.MultiRoute",
              "coordSystem.geo",
              "geocode",
              "util.bounds",
            ]}
            onLoad={(ymaps) => {
              setYmaps(ymaps);
            }}
            state={mapState}
            instanceRef={(ref) => {
              if (ref) {
                setTimeout(() => console.log(ref.geoObjects.getBounds()), 100);
                mapRef.current = ref;
                ref.setBounds(bounds);
              }
            }}
            instanceRef={(ref) => ref && getRoute(ref)}
            width="500px"
            height="500px"
          ></Map>
        </YMaps>
      </div>

      <div className="calculator">
        <form>
          <input className="adress" type="text" placeholder="adres first" />
          <input className="adress" type="text" placeholder="adres sec" />
          <input className="adress" type="text" placeholder="adres 3" />

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              createMark(e);
            }}
          >
            Show route
          </button>
        </form>
      </div>
    </div>
  );
}
