import { useState } from "react";
import NormalButton from "../../Components/ButtonNormal";

const InputForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      action=""
      className="flex flex-col gap-10 *:border *:border-slate-300 *:rounded-md *:shadow-md mx-auto max-w-600px "
    >
      <input
        value={name}
        className="p-4"
        type="text"
        placeholder="Name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        className="p-4"
        type="email"
        placeholder="example"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        value={message}
        cols={30}
        rows={6}
        className="p-4"
        placeholder="message"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <NormalButton type="submit">Send</NormalButton>
    </form>
  );
};

export default InputForm;
