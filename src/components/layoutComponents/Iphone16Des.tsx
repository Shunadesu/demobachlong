export default function Iphone16Description() {
  return (
    <div className="bg-white p-6 md:p-10 w-full mx-auto flex justify-center flex-col items-center gap-2">

      {/* Product Title */}
      <h1 className="text-3xl font-bold text-gray-900 mt-6 text-center">
        iPhone 15 Pro Max - Redefining Innovation
      </h1>

      {/* Price & Availability */}
      <p className="text-xl text-red-600 font-semibold mt-2 text-center">Starting from $999</p>
      <p className="text-sm text-gray-500 text-center">Available for pre-order now!</p>

      {/* Key Features */}
      <ul className="mt-6 space-y-3 text-gray-700">
        <li className="flex items-center">
          ✅ <span className="ml-2"> 6.5 Super Retina XDR Display with ProMotion</span>
        </li>
        <li className="flex items-center">
          ✅ <span className="ml-2">A18 Bionic Chip - Faster & More Efficient</span>
        </li>
        <li className="flex items-center">
          ✅ <span className="ml-2">Triple-lens 48MP Pro Camera System</span>
        </li>
        <li className="flex items-center">
          ✅ <span className="ml-2">All-day Battery Life & MagSafe Charging</span>
        </li>
        <li className="flex items-center">
          ✅ <span className="ml-2">5G Connectivity & WiFi 7 for Blazing Speeds</span>
        </li>
        <li className="flex items-center">
          ✅ <span className="ml-2">Durable Titanium Build - Sleek & Lightweight</span>
        </li>
      </ul>

      {/* CTA Buttons */}
      <div className="pt-16 flex flex-col md:flex-row gap-4">
        <button className="w-full md:w-auto px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-700 transition cursor-pointer">
          Buy Now
        </button>
        <button className="w-full md:w-auto px-6 py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}
