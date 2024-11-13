"use client";
import formbricks from "@formbricks/js";

if (typeof window !== "undefined") {
  await formbricks.init({
    environmentId: "cm3f4992i00074z16pyxq47eg", 
    apiHost: "https://app.formbricks.com",
  });
}

export default function ContactPage() {
  return (
    <main className="bg-gray-500 text-black items-center justify-center h-screen w-screen flex flex-col">
      <h1 className="text-primary text-center text-4xl font-bold mb-8">Contact Me</h1>
        If the survey didn&apos;t work, reload the page and try again.
    </main>
  );
}