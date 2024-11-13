import formbricks from "@formbricks/js";
if (typeof window !== "undefined") {
  await formbricks.init({
    environmentId: "cm3f4992i00074z16pyxq47eg", 
    apiHost: "https://app.formbricks.com",
  });
}

export default function ProjectsPage() {
  return (
    <main className="bg-gray-500 text-black items-center justify-center h-screen w-screen flex flex-col">
      <h1>Projects</h1>
      <p>Coming soon!</p>
    </main>
  );
}