"use client";
import ProjectDetail from "@/app/components/projectDetail";
import React from "react";
import useSWR from "swr";

interface props {
  login: string;
}

async function getData(params: string) {
  const res = await fetch(`https://api.github.com/users/${params}/repos`);
  //   await new Promise((r) => setTimeout(() => {}, 2000));
  return res.json();
}

export default async function ListProject({ login }: props) {
  const data = await getData(login);

  var Loading = !data;
  return (
    <div>
      <div className="container">{Loading && "Please Wait...."}</div>
      <div className="card-body">
        <ul className="list-group">
          {/* {JSON.stringify(data)} */}
          {data &&
            data.map((project: any, index: number) => {
              return (
                <ProjectDetail
                  visibility={project.visibility}
                  projectName={project.name}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}
