import React from "react";

interface props {
  visibility: string;
  projectName: string;
}
export default function ProjectDetail({ visibility, projectName }: props) {
  console.log(visibility);

  return (
    <li className="list-group-item">
      <span className="badge bg-primary">{visibility}</span>
      <span className="m-2">{projectName}</span>
    </li>
  );
}
