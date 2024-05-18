import { createFlag } from "../../services/apiClient.js";

export function NewFlagForm() {
  const submitForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const flag = {
      name: form.elements.name.value,
    };
    createFlag(flag).then(() => {
      form.reset();
    });
  }

  return (
    <div>
      <h1>New Flag Form</h1>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input name="name" type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}