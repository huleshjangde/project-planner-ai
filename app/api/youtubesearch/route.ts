import { getJson } from "serpapi";

async function fetchJsonFromSerpApi(params: {
  engine: string;
  api_key: string;
  search_query: string;
  location: string;
}) {
  return new Promise((resolve, reject) => {
    getJson(params, (json: unknown) => {
      if (json) {
        resolve(json);
      } else {
        reject(new Error("Failed to get data from serpapi"));
      }
    });
  });
}

export async function POST(req: Request) {
  const { q } = (await req.json()) as {
    q: string;
  };
  let data: any = "";
  console.log("====================================");
  console.log(q);
  console.log("====================================");
  try {
    data = await fetchJsonFromSerpApi({
      engine: "youtube",
      api_key:
        "4bf026db13cadf4c5e107ae187dd912955672f4639b957400b7acad33dce2ac6",
      search_query: `${q} `,
      location: "india",
    });
    // return new Response(JSON({json :  json, status: 200}))

    return new Response(JSON.stringify({ data }));
  } catch (error) {
    // return new Response(json.stringify({error :  error, status: 500}))
    return new Response(JSON.stringify({ error }));
  }
}
