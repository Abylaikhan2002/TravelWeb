import { useState, useEffect } from "react";
import axios from "axios";
import "./ContactFormStyles.css";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    let processing = true;
    axiosFetchData(processing);
    return () => {
      processing = false;
    };
  }, []);


  const axiosFetchData = async (processing) => {
    await axios
      .get("http://localhost:4000/users")
      .then((res) => {
        if (processing) {
          setSelectData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const axiosPostData = async () => {
    const postData = {
      email: email,
      website: selectValue,
      message: message,
    };

    await axios
      .post("http://localhost:4000/contact/send", postData)
      .then((res) => setError(<p className="success">{res.data}</p>));
  };

  const SelectDropdown = () => {
    return (
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="" key="1">
          {" "}
          -- Select One --{" "}
        </option>
        {selectData?.map((item) => (
          <option value={item.website} key={item.website}>
            {item.website}
          </option>
        ))}
      </select>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) {
      setError(
        <p className="required">Message is empty. Please type a message.</p>,
      );
    } else {
      setError("");
      axiosPostData();
      setEmail("");
      setMessage("");
      setSelectValue("");
    }
  };

  return (
    <>
      <h1>Contact Us</h1>

      <form className="from-container">
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>How Did You Hear About Us?</label>
        <SelectDropdown />

        <label>Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
        ></textarea>

        {error}

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
