export default function CVPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-[90vh] bg-white shadow-xl rounded-lg overflow-hidden">
        <iframe
          src="/cv/cv-adesh-kumar-sharma.pdf"
          className="w-full h-full"
          title="Adesh Kumar Sharma CV"
        ></iframe>
      </div>
    </main>
  );
}
