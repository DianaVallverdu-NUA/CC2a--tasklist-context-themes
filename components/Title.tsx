interface TitleProps {
  myName?: string
}

const Title = (props: TitleProps) => {

  const titleToShow = props.myName ? `${props.myName}'s To Do List` : "My To Do List";

  return (<h1>{titleToShow}!</h1>)
}

export default Title;
