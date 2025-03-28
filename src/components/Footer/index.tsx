import { MapPin, Phone } from "lucide-react";

export  function Footer() {
  return (
    <footer className="mt-10 bg-gray-100 py-6 rounded-xl text-center px-4">
      <div className="flex flex-col items-center space-y-3 text-gray-700">
        <div className="flex  items-center space-y-1 sm:flex-row sm:space-x-2">
          <MapPin className="w-5 h-5 text-green-500" />
          <p className="text-sm text-center sm:text-base sm:text-left">
            Rua Centenário 538, Parque Morumbi 2 - Foz do Iguaçu
          </p>
        </div>
        <div className="flex  items-center space-y-1 sm:flex-row sm:space-x-2">
          <Phone className="w-5 h-5 text-green-500" />
          <p className="text-sm text-center sm:text-base sm:text-left">(45) 99954-1641</p>
        </div>
      </div>
    </footer>
  );
}
