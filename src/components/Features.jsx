import { Clock, Lock, RotateCcw, Truck } from "lucide-react";

const features = [
  { icon: Truck, text: "Free Shipping", subtext: "On orders over ৳1000" },
  { icon: Lock, text: "Secure Payment", subtext: "100% protected payments" },
  { icon: RotateCcw, text: "Easy Returns", subtext: "30-day return policy" },
  {
    icon: Clock,
    text: "24/7 Supports",
    subtext: "Dedicated customer services",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 lg:gap-x-8">
          {features.map((feature, index) => {
            return (
              <div
                key={index}
                className="group flex items-center justify-center text-center sm:text-left cursor-pointer"
              >
                <feature.icon
                  className="flex-shrink-0 h-10 w-10 text-gray-600 group-hover:text-gray-800 transform group-hover:rotate-[360deg] transition-all duration-200 ease-in-out  "
                  aria-hidden="true"
                />

                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {feature.text}
                  </p>

                  <p className="mt-1 text-sm font-normal text-gray-500">
                    {feature.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
