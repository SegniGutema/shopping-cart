import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [errors, setErrors] = useState({}); // State to store error messages

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isFormValid = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Check if there are any errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      e.preventDefault();

      return; // Prevent submission if form is invalid
    }

    setShowSubmitMessage(true); // Show submission message immediately

    setTimeout(() => {
      setShowSubmitMessage(false);
      setEmail("");
    }, 2000); // Reset form after 2 seconds
  };
  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="flex flex-wrap gap-y-10 items-center justify-between w-full bg-orange-300 px-10 md:px-14 lg:px-16 py-8">
      <div>
        <h2 className="text-3xl font-bold w-fit">
          Subscribe to our newsletter!
        </h2>
        <p className="mt-4">
          Keep yourself up-to-date with our latest products
        </p>
      </div>
      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-4 relative"
        >
          <input
            className="w-[250px] h-[50px] p-3"
            value={email}
            placeholder="email"
            onChange={handleInput}
            type="email"
            name="email"
            id="email"
            required
          />
          {showSubmitMessage && (
            <p className="bg-green-600 px-4 py-2 w-fit text-lg text-white absolute left-0 top-[103%]">
              Thank you
            </p>
          )}
          {errors.email && (
            <p className="text-white bg-red-700 w-fit px-2 py-2  absolute left-0 top-[103%]">
              {errors.email}
            </p>
          )}
          <button
            className="text-2xl w-fit px-4 h-[50px] border-2 border-black"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
