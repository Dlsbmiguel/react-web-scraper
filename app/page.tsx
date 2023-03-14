import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
      <h1 className="text-3xl mt-2 font-bold mb-5">
        Welcome to the Amazon Web Scraper
      </h1>

      <h2 className="text-lg italic text-black/50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi
        lectus.
      </h2>

      <h3 className="text-lg italic text-black/50">https://www.amazon.com</h3>
    </div>
  );
}
