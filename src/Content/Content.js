import "./Content.css";

const Content = () => {
  return (
    <form className="form">
      <label classname="label" htmlFor="query">
        Title here
      </label>
      <input type="text" name="query" placeholder="i.e superbad"></input>
      <button className="button">Submit</button>
    </form>
  ); 
};

export default Content;

//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit
