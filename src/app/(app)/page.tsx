import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_TITLE} - ${process.env.NEXT_PUBLIC_SITE_DESCRIPTION}`,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

const Homepage = async () => {
  redirect("/projects");
};

export default Homepage;
