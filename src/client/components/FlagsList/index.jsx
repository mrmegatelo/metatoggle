import { fetchFlags } from "../../services/apiClient.js";
import { useEffect, useState } from "react";

export default function FlagsList() {
  const [flags, setFlags] = useState([]);
  useEffect(() => {
    fetchFlags().then((data) => setFlags(data));
  }, []);
  return (
    <div>
      <h1>Flags List</h1>
      <ul>
        {flags.map((flag) => (
          <li key={flag.id}>{flag.name}</li>
        ))}
      </ul>
    </div>
  );
}
