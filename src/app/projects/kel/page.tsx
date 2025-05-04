export default function Page() {
  return (
    <div className="m-4 flex flex-col items-center justify-center gap-4 p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold italic">Project Information</h1>
      <p className="text-3xl">Kel</p>
      <div className="flex flex-col items-center justify-center text-lg underline">
        <a href="https://github.com/Kel-app">View org on GitHub</a>
      </div>
      <p className="text-2xl font-bold italic">About the project:</p>
      <p>This project is a tool to take notes better and faster.</p>
    </div>
  );
}
