interface Iprops {
  title: string;
  children: string[];
}

function Column(props: Iprops) {
  const { title, children } = props;
  return (
    <div>
      <h5 className="">{title}</h5>
      <ul>
        {children.map((item) => {
          return (
            <li key={item}>
              <a className="" href="#!">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Column;
