import React, { useState } from "react";

const InputPage = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/payment/init", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, amount }),
      });

      const data = await res.json();
      console.log("Server response:", data);
      console.log({name, amount})
         if (data.url) {
       window.location.href = data.url;
     }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form>
        <label>Enter Name</label>
        <input
          type="text"
          className="border mb-5"
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Enter Amount</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="p-2 bg-amber-400 rounded-md text-black"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default InputPage;
