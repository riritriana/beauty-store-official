export default function Login() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input id="password" type="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
