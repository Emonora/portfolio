export default function BOC() {
  return (
    <div className="m-4 flex flex-col items-center justify-center gap-4 p-4 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold italic">Project Information</h1>
      <p className="text-3xl">Blood Orange Clicker</p>
      <div className="flex flex-col items-center justify-center text-lg underline">
        <a href="https://github.com/Emonora/Blood-orange-clicker">
          View on GitHub
        </a>
        <a href="https://github.com/Emonora/Blood-orange-clicker/issues">
          Report an Issue
        </a>
      </div>
      <p className="text-2xl font-bold italic">About the project:</p>
      <p>This project is a simple cookie clicker clone.</p>
    </div>
  );
}
