import { fetchFlags } from "../../services/apiClient.js";
import { useEffect, useState } from "react";

export default function FlagsList() {
  const [flags, setFlags] = useState([]);
  useEffect(() => {
    fetchFlags().then((data) => setFlags(data));
  }, []);
  return (
    <div>
      <h2>Flags List</h2>
      <ul>
        {flags.map((flag) => (
          <li key={flag.id}>{flag.name}</li>
        ))}
      </ul>
    </div>
  );
}
