import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-4">Become a Nike Member</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Create your Nike Member profile and get first access to the very best of Nike
          products, inspiration, and community.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
          <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black">
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <div className="flex justify-between">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="mr-2"
              />
              Female
            </label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-500">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits.
            </span>
          </div>
          <p className="text-xs text-gray-500">
            By creating an account, you agree to Nike's{" "}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 underline">
              Terms of Use
            </a>.
          </p>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Join Us
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already a Member?{" "}
          <a href="#" className="text-blue-500 underline">
            Sign In
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Form;