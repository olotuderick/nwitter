import React, { useEffect, useState } from "react";
import { db } from "../firebase";
const Home = ({ userObj }) => {
  console.log(userObj)
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const getNweets = async () => {
    const dbNweets = await db.collection("nweets").get();
    dbNweets.forEach((document) => {
      const nweetObj = {
        ...document.data,
        id: document.id,
      };
      setNweets((prev) => [nweetObj, ...prev]);
    });
  };
  useEffect(() => {
    getNweets();
    db.collection("nweets").onSnapshot(snapshot => {
      console.log("something happened")
    })
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await db.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      //creatorId: userObj.uid,
    });
    setNweet(" ");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          vlaue={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on you mind..?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
