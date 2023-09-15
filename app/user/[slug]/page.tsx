import React, { Suspense } from "react";
import { json } from "stream/consumers";
import ListProject from "./listProject";

async function fetchData(params: string) {
  const res = await fetch(`https://api.github.com/users/${params}`);
  await new Promise((r) => setTimeout(r, 2000));
  return res.json();
}
export default async function userSlug({
  params,
}: {
  params: { slug: string };
}) {
  const datas = await fetchData(params.slug);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={datas.avatar_url} // Gantilah dengan path gambar Anda
              alt="Deskripsi Gambar"
              style={{ width: "100%" }}
            />
            {/* <img src="https://via.placeholder.com/150" alt="Foto Profil" className="img-fluid rounded-circle"> */}
          </div>
          <div className="col-md-4">
            <h1>{datas.login}</h1>
            <div>
              <span>
                <strong>Followers:</strong> {datas.followers}
              </span>
              <span className="mx-2">
                <strong>Following:</strong> {datas.following}
              </span>
            </div>
            <p>
              <strong>Bio : </strong>
              {datas.bio}
            </p>
            <p>
              <strong>Alamat : </strong>
              {datas.location}
            </p>
            <p>
              <strong>Company : </strong>
              {datas.company}
            </p>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h4>Project</h4>
              </div>
              {/* <ListProject login={params.slug} /> */}
              <Suspense>
                <ListProject login={params.slug} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
