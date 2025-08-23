import { MailCheck, MapPinned, PhoneCall } from "lucide-react";
import { LuMessageCircleCode } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Get in Touch With{" "}
          <span className="text-rose-500 font-serif">Sofian</span>{" "}
          <span className="text-emerald-500 font-mono">Shop</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* info */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-gray-300 font-medium">
                Have a question or need support? We're here to help you with
                your electronics journey.
              </p>
            </div>

            <div>
              <p className="group mt-2 font-medium text-base flex items-center">
                <MapPinned
                  size={24}
                  className="group-hover:text-neutral-400 transform group-hover:rotate-[360deg] transition-transform duration-200 ease-out"
                />
                <a
                  href="https://maps.app.goo.gl/TZQrDRBGdmNeQPEN7"
                  target="_blank"
                  className="ml-3 group-hover:text-amber-400 group-hover:translate-x-1 duration-200 ease-in"
                >
                  Someshpur Tech City, Belkuchi, Sirajganj, Rajshahi, Bangladesh
                </a>
              </p>

              <p className="group mt-3 text-base font-semibold flex items-center">
                <MailCheck
                  size={24}
                  className="group-hover:text-neutral-400 transform group-hover:rotate-[360deg] transition-transform duration-200 ease-out"
                />
                <a
                  href="mailto:dip.akand9899@gmail.com"
                  className="ml-3 group-hover:text-amber-400 group-hover:translate-x-1 duration-200 ease-in"
                >
                  dip.akand9899@gmail.com
                </a>
              </p>

              <p className="group mt-3 text-base font-semibold flex items-center">
                <PhoneCall
                  size={24}
                  className="group-hover:text-neutral-400 transform group-hover:rotate-[360deg] transition-transform duration-200 ease-out"
                />
                <a
                  href="tel:+8801689190142"
                  className="ml-3 group-hover:text-amber-400 group-hover:translate-x-1 duration-200 ease-in"
                >
                  (+880) 1689 190142
                </a>
              </p>
            </div>
          </div>
          {/* info */}

          {/* form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-200 font-medium mb-1.5">
                Your Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="block text-gray-200 font-medium mb-1.5">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-400 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <div>
              <label className="block text-gray-200 font-medium mb-1.5">
                Your Message
              </label>

              <textarea
                rows="4"
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-400 rounded-xl border border-white/30 focus:border-transparent  focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-500 to-purple-500 hover:bg-gradient-to-l text-white py-2 font-semibold rounded-xl hover:opacity-90 transition-all duration-300"
            >
              Send Message{" "}
              <span className="transform group-hover:rotate-[360deg] transition-transform duration-300 ease-in-out">
                <LuMessageCircleCode size={20} />
              </span>
            </button>
          </form>
          {/* form */}
        </div>

        {/* map */}
        <div className="mt-7 w-full">
          <div className="relative w-full h-0 pb-[40%]">
            {/* 16:9 ratio */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3634.610540813719!2d89.69939727520715!3d24.360055578259406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDIxJzM2LjIiTiA4OcKwNDInMDcuMSJF!5e0!3m2!1sen!2sbd!4v1755944054720!5m2!1sen!2sbd"
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* map */}
      </div>
    </div>
  );
};

export default Contact;
