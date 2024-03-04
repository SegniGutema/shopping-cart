import { useState } from "react";
import NormalButton from "../../Components/ButtonNormal";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [errors, setErrors] = useState({}); // State to store error messages

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isFormValid = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }
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
      setName("");
      setEmail("");
      setMessage("");
    }, 2000); // Reset form after 2 seconds
  };

  return (
    <form
      onSubmit={handleSubmit}
      name="feedback"
      action=""
      className="flex flex-col gap-10 *:border *:border-slate-300 *:rounded-md *:shadow-md mx-auto max-w-600px "
    >
      <label htmlFor="name" className="w-fit px-2">
        Name:
      </label>
      <input
        id="name"
        value={name}
        className="p-4"
        type="text"
        placeholder="Your Name"
        name="name"
        onChange={(e) => setName(e.target.value)}
        // Add error style conditionally based on errors.name
        style={errors.name ? { border: "1px solid red" } : {}}
      />
      {errors.name && <p className="text-red-500 px-2 w-fit">{errors.name}</p>}

      <label htmlFor="email" className="w-fit px-2">
        Email:
      </label>
      <input
        id="email"
        value={email}
        className="p-4"
        type="email"
        placeholder="example@email.com"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        // Add error style conditionally based on errors.email
        style={errors.email ? { border: "1px solid red" } : {}}
      />
      {errors.email && (
        <p className="text-red-500 w-fit px-2">{errors.email}</p>
      )}

      <label htmlFor="message" className="w-fit px-2">
        Message:
      </label>
      <textarea
        id="message"
        value={message}
        cols={30}
        rows={6}
        className="p-4"
        placeholder="message"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <NormalButton type="submit">Send</NormalButton>
      {showSubmitMessage && (
        <p className="bg-green-600 px-4 py-2 w-fit text-lg text-white">
          Thank you for your feedback
        </p>
      )}
    </form>
  );
};

export default FeedbackForm;
