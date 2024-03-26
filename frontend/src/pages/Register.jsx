export default function Register() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>

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
