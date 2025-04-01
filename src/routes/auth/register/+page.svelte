<script lang="ts">
  import { enhance } from "$app/forms";
  import type { registerFormData } from "$lib/types.ts";
  export let form: registerFormData;

  let thisForm: HTMLFormElement;
</script>

<div class="container">
  <h1 class="title">Create an account</h1>

  <form bind:this={thisForm} use:enhance method="POST" action="?/signup">
    <div class="form-item">
      <label for="username">Username<sup><small>*</small></sup></label>
      <input
        type="text"
        id="username"
        name="username"
        class:fieldError={form?.usernameUsed}
        required
        value={form?.username ?? ""}
      />
    </div>
    <div class="form-item">
      <label for="password">Password<sup><small>*</small></sup></label>
      <input
        type="password"
        id="password"
        name="password"
        required
        class:fieldError={form?.weakPassword}
      />
    </div>
    <div class="field-item">
      {#if form?.error}
        <small>{form?.message}</small>
      {/if}
    </div>
    <div class="form-item">
      <button type="submit">Register</button>
    </div>
  </form>
</div>

<style>
  .container {
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
  .title {
    color: #fff;
    font-size: 2em;
    margin-bottom: 1em;
  }
  div {
    color: #fff;
    margin-bottom: 0.5em;
  }
  label {
    padding-right: 0.5em;
  }
  small {
    padding-left: 0.5em;
    color: #ff0000;
  }
  button {
    margin-top: 1em;
    padding: 0.5em;
    width: 100%;
    background-color: #fff;
    color: black;
    transition: all 0.3s ease-in;
    border-radius: 5px;
  }
  button:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #fff;
    background-color: var(--primary-color);
    transition: all 0.3s ease-in;
  }
  .form-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.5em;
  }
  .fieldError {
    outline: 2px solid #ff0000;
  }
  input {
    background-color: rgb(234, 212, 236);
    border-radius: 5px;
    color: black;
  }
</style>
