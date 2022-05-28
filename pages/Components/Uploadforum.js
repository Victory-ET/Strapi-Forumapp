import { React, useState } from "react";
import style from "../../styles/Home.module.css";
import Link from "next/Link";
import axios from "axios";

function Uploadforum({session}) {
  console.log(session);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const url = "http://localhost:1337/api/strapi-forums";

  

  const sendData = () => {
    axios.post(url, {
      data: {
        Title: name,
        Questions: description,
        Answers: [],
        Username: session.user.name,
      },
    });
  };
  return (
    <div className={style.uploadpage}>
      <div className={style.topcont}>
        <h1>Ask a question</h1>
        <Link href="/">
          <button>Forum</button>
        </Link>
      </div>
      <div className={style.formcont}>
        <form className={style.uploadform}>
          <input
            type="text"
            placeholder="Enter your title"
            maxLength="74"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Enter your description"
            rows="8"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            onClick={(e) => {
                e.preventDefault();
              sendData();
            }}
          >
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
}
export default Uploadforum;
