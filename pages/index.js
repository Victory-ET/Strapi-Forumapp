import { react, useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Displayforum from "./Components/Displayforum";
import { readForum, createQuestion } from "./api";



export default function Home() {
  const [question, setQuestions] = useState({});
    const [response, setResponse] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await readForum();
        setResponse(result.data.data);
      };
      fetchData();
    }, []);
  return (
    <div className={styles.container}>
      <Displayforum response={response}/>
    </div>
  );
}