import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.spacexdata.com/v4/rockets", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
// export default async function handler(req, res) {
//   const { method } = req;

//   try {
//     if (method === "GET") {
//       // Fetch rockets data from SpaceX API
//       const response = await axios.get(
//         "https://api.spacexdata.com/v4/rockets",
//         {
//           headers: {
//             Authorization: `Bearer ${process.env.SPACEX_API_KEY}`,
//           },
//         }
//       );

//       const rockets = response.data;

//       // Return the rockets data
//       res.status(200).json(rockets);
//     } else {
//       res.setHeader("Allow", ["GET"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//     }
//   } catch (error) {
//     console.error("Error fetching SpaceX rockets:", error);
//     res.status(500).json({ error: "Failed to fetch SpaceX rockets" });
//   }
// }
