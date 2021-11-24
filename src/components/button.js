import Link from "next/link";

export default function Button(props) {
  return (
    <Link href={props.href}>
      <a
        className={`button ${props.className}`}
        data-magnetic={
          props.className == "-underline" ||
          props.className == "-underlined" ||
          props.className == "-round" ||
          props.className == "-skew"
            ? null
            : true
        }
      >
        <span data-text={props.children}>{props.children}</span>

        {props.className == "-underline" ||
        props.className == "-underlined" ||
        props.className == "-round" ||
        props.className == "-skew" ? (
          ""
        ) : (
          <div className="ripple">
            <div className="ripple-span"></div>
          </div>
        )}
      </a>
    </Link>
  );
}
