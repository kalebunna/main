import Link from "next/link";
import React from "react";
import useSWR from "swr";

interface props {
  query: string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function HasilPencarian({ query }: props) {
  const { data, error } = useSWR(
    `https://api.github.com/search/users?q=${query}`,
    fetcher
  );

  var Loading = !data && !error;
  return (
    <div>
      {Loading && "Please Wait...."}
      {/* <h1>{JSON.stringify(data)}</h1> */}
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Nama</th>
            <th scope="col">Detail</th>
            {/* <th scope="col">Detail</th> */}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.items.map((user: any, index: number) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{user.login}</td>
                  <td>
                    <Link
                      href={"user/" + user.login}
                      className="btn btn-info btn-sm"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
