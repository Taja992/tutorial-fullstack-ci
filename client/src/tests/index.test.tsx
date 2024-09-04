import { describe, expect, it } from "vitest";
import {
  createMemoryRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { render, screen } from "@testing-library/react";
import routes from "../router.tsx";
import { http } from "../http.ts";
import { default as fakeData } from "./fake-posts.ts";

vi.spyOn(http, "blogList").mockResolvedValue({ data: fakeData } as any);

describe("Index", () => {
  it("shows a list of posts", async () => {
    const router = createMemoryRouter(createRoutesFromElements(routes), {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={router} />);

    expect(await screen.findByText("Welcome")).toBeInTheDocument();
  });
});
