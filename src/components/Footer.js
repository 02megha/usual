// what react bassically does 
// react works on single page application concept.
//which means only one index.html is there.
// now with the help of react we get control over the file
// now with the help of java script logic we make thar one index.html file and heance our app become single page application and heance faster.

// what is component ?
// components are basically like functions which  return in  index.js file we return only one component that are the parent component
// which  app.js .all the other subcomponents and logic are done inside app.js
// 

// basic things to be taken care while making components .
// 1. a component file must  start with capital letter
//2. a component must return all the html inside a single tag generally <> </>
// 3. a component function must also be capatalized 
// 4 . in component class is replaced by class name
// 

const Footer = () => {
    return (
        <>
            <h1 style = {{color : "pink", backgroundColor : " orange",}}> this is Footer </h1>
        </>
    );
};

export default Footer ;