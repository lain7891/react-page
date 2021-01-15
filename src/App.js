import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Navbar/Card/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">My Portfolio Page</h1>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              pLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <Card title="Linkedin" 
            link="https://www.linkedin.com/in/estefania-lupo/" 
            image="https://image.shutterstock.com/image-photo/presentation-project-management-areas-knowledge-260nw-706715482.jpg"
            description="This is my Linkedin Profile"
            />
          </div>
          <div className="col-sm-4">
            <Card title="Github"/>
          </div>
          <div className="col-sm-4">
            <Card title="Resume"/>
          </div>
        </div>

      
      </div>
    </>
  );
}

export default App;
