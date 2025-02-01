import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGooglePlay } from "react-icons/bs";

// function ProjectCards(props) {
//   const imgPath = props.imgPath; // Assume imgPath comes as a prop

//   return (
//     <Card className="project-card-view">
//       {/* {props.imgPath.includes("https://") ?
//         (<Card.Img variant="top" src={imgPath} alt="card-img" />) :
//         (<Card.Img variant="top" src={props.imgPath} alt="card-img" />)
//       } */}
//       <Card.Img variant="top" src={imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGooglePlay /> &nbsp;
//           {props.isBlog ? "Blog" : "Play Store"}
//         </Button>
//         {"\n"}
//         {"\n"}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"Demo"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;


function ProjectCards(props) {
  const imgPath = props.imgPath;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" className="project-card-img" />
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Text className="project-card-description">
          {props.description}
        </Card.Text>
        <div className="project-card-buttons">
          <Button variant="primary" href={props.ghLink} target="_blank" className="project-card-button">
            <BsGooglePlay /> &nbsp;
            {props.isBlog ? "Blog" : "Play Store"}
          </Button>
          {"\n"}
          {"\n"}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-card-button"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;