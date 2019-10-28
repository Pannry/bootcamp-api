import req from "supertest";
import server from "./server";

test("[GET] /api/v1/bootcamps", async () => {
  const res = await req(server).get("/api/v1/bootcamps/");
  expect(res.body).toStrictEqual({ "success": true, "msg": "show all bootcamps" });
});