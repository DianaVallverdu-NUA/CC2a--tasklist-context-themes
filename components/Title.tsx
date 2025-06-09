// interfaces & props
interface TitleProps {
  myName?: string
}

// main class
const Title = (props: TitleProps) => {

  // use ternary operation to decide tasklist Title if name is / isn't defined
  const titleToShow = props.myName ? `${props.myName}'s To Do List` : "My To Do List";

  // display title
  return (<h1>{titleToShow}!</h1>)
}

export default Title;
