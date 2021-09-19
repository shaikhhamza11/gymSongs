import React, { useState } from "react";
import "./styles.css";

export default function App() {
  let rapDB = {
    "Desi Rap Songs": [
      {
        name: "Untitled",
        artist: "KR$NA",
        link:
          "https://open.spotify.com/track/3ThgrOSD6V8pXEjFDQMl95?si=BoG86GvIQOSWjs--bkhp9w&dl_branch=1"
      },
      {
        name: "Nanchaku",
        artist: "Seedhe Maut",
        link:
          "https://open.spotify.com/track/6YwiqqQ5xoeUkPwrn9cfEw?si=6735cfbfb3e0474c"
      },
      {
        name: "Say my name",
        artist: "KR$NA",
        link:
          "https://open.spotify.com/track/2HjKqfHZUAFE21Uc6dXZGi?si=30d1660947c142b4"
      },
      {
        name: "Wish you were here",
        artist: "Encore X Frappe",
        link:
          "https://open.spotify.com/track/2HjKqfHZUAFE21Uc6dXZGi?si=30d1660947c142b4"
      },
      {
        name: "Class Sikh vol2",
        artist: "Seedhe Maut X Prabhdeep",
        link:
          "https://open.spotify.com/track/6DcNdNKibIGW5urA4HYNbQ?si=6c6788e640c04fd2"
      }
    ],
    "Pakistani Rap Songs": [
      {
        name: "Laga Reh",
        artist: "Young Stunners",
        link:
          "https://open.spotify.com/track/7Dp2cvwS1migPssQvMFyQe?si=b7f34cf143d649ad"
      },
      {
        name: "Quarantine",
        artist: "Young Stunners x KR$NA",
        link:
          "https://open.spotify.com/track/2yLWMKMhGDsWneO4cTlSDz?si=3aaea638fef64650"
      },
      {
        name: "Gumaan",
        artist: "Young Stunners",
        link:
          "https://open.spotify.com/track/2d0mogXeL0tw0CdYWh0xoZ?si=7271640460344bdf"
      },
      {
        name: "Afsanay",
        artist: "Young Stunners",
        link:
          "https://open.spotify.com/track/5TZh6RFBz3PUTP56hej65q?si=4a7b6c8c7e374719"
      },
      {
        name: "9mm",
        artist: "Talha Anjum",
        link:
          "https://open.spotify.com/track/2yLWMKMhGDsWneO4cTlSDz?si=3aaea638fef64650"
      }
    ],
    "Hollywood Hip Hop": [
      {
        name: "Not Afraid",
        artist: "Eminem",
        link:
          "https://open.spotify.com/track/7Ie9W94M7OjPoZVV216Xus?si=105c794393b04671"
      },
      {
        name: "The Search",
        artist: "NF",
        link:
          "https://open.spotify.com/track/2OKo7g3KfmCt3kyLvUAL0g?si=9325916607aa4157"
      },
      {
        name: "My Anxety",
        artist: "Cal Scruby",
        link:
          "https://open.spotify.com/track/2u36AfO6p7f6ciw15E4xh9?si=c7b6dc9b3a894a60"
      },
      {
        name: "Lucid Dreams",
        artist: "Juice WRLD",
        link:
          "https://open.spotify.com/track/285pBltuF7vW8TeWk8hdRR?si=8ff03f3d4b43494f"
      },
      {
        name: "Lose Yourself",
        artist: "Eminem",
        link:
          "https://open.spotify.com/track/1v7L65Lzy0j0vdpRjJewt1?si=e0c1aea037fd4379"
      },
      {
        name: "The Real Slim Shady",
        artist: "Eminem",
        link:
          "https://open.spotify.com/track/3yfqSUWxFvZELEM4PmlwIR?si=075da776462a4a7e"
      }
    ]
  };
  const rapGenre = Object.keys(rapDB);
  //default state
  const [genre, setGenre] = useState(rapDB["Desi Rap Songs"]);
  //changed stated on click
  const changeGenre = (rap) => {
    let clickedGenre = rap;
    setGenre(rapDB[clickedGenre]);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="container-center">
          <h1>My Gym playlist</h1>
          <p>Checkout my favorite Rap songs. Select a Genre to get started</p>
          <div className="flex">
            {rapGenre.map((rap) => {
              return (
                <button
                  className="btn"
                  key={rap}
                  onClick={() => changeGenre(rap)}
                >
                  {rap}
                </button>
              );
            })}
          </div>
          <hr />
          <table className="tableStyle">
            <thead>
              <tr>
                <th>Song Name</th>
                <th>Artist</th>
                <th>Song Link</th>
              </tr>
            </thead>
            <tbody>
              {genre.map((obj) => {
                return (
                  <tr>
                    <td>{obj.name}</td>
                    <td>{obj.artist}</td>
                    <td>
                      <a
                        style={{
                          textDecoration: "none"
                        }}
                        href={obj.link}
                      >
                        Listen Song
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
