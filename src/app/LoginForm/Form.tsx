import React from "react";

const Form: React.FC = () => {
  return (
    <form className="max-w-sm mx-auto p-8 border border-gray-300 rounded-lg mt-8">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-xl font-bold text-center">
          YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
        </h1>
      </div>
      <h2 className="text-xl font-bold mb-4">Your Account</h2>
      <input
        type="email"
        placeholder="Email address"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Sign In
      </button>
    </form>
  );
};

export default Form;
