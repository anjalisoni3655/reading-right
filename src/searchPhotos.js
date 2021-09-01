import React, { useState } from "react";
//import{ Unsplash, toJson} from "unsplash-js";
import { createApi } from 'unsplash-js';

// on your node server
const unsplash = createApi({
  accessKey: 'mAehz-Mz440HaWn_IrfTbq0ywGSUwS2OxGLfM-w0lUI',
  //...other fetch options
});

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  console.log(query);
  const searchPhotos = async (e) => {
    e.preventDefault();
    // unsplash.search
    // .photos(query)
    // .then((json) => {
    //   console.log(json);
    //
    // });


unsplash.search.getPhotos({
  query: query
}).then(data=>{console.log(data);
  setPics(data.response.results);})
    console.log("Submitting the Form")
  };
  return (
    <>
    <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
    onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
      {
          pics.map((pic) => <div className="card" key={pic.id}>
          <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
          </div>)
        }
      </div>

    </>
  );
}
