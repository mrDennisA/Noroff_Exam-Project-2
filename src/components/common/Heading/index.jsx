export default function Heading({ element: El = "h1", children, style = null }) {
  return <El className={style}>{children}</El>;
}
