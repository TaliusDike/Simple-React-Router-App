const User = (props) => {
  return (
    <section>
        <li>
      <h2>{props.name}</h2>
      <h3>{props.email}</h3>
      <h3>{props.id}</h3>
      </li>
    </section>
  );
};

export default User;
