import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">
        {/* Main content */}
      </main>
    </div>
  );
}
