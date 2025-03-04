"use client";

import { useState, useEffect, useRef } from "react";
import { IoMdClose, IoMdSend } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const responses: { [key: string]: string } = {
  hi: "👋 Hello! How can I assist you with **Heavenstone** today?",
  "1 bhk":
    "🏠 **1BHK Premium Apartment**\n- **AC:** ₹2,500/day | **Non-AC:** ₹1,500/day\n- Fully furnished with modern amenities\n- High-speed **200Mbps WiFi**\n- Ideal for solo travelers or couples.",
  "one bhk":
    "🏠 **1BHK Premium Apartment**\n- **AC:** ₹2,500/day | **Non-AC:** ₹1,500/day\n- Fully furnished with modern amenities\n- High-speed **200Mbps WiFi**\n- Ideal for solo travelers or couples.",
  "2 bhk":
    "🏠 **2BHK Luxury Apartment**\n- **AC:** ₹4,000/day | **Non-AC:** ₹3,000/day\n- Spacious with separate living & dining areas\n- Premium furnishings throughout.",
  "two bhk":
    "🏠 **2BHK Luxury Apartment**\n- **AC:** ₹4,000/day | **Non-AC:** ₹3,000/day\n- Spacious with separate living & dining areas\n- Premium furnishings throughout.",

  location:
    "📍 **Heavenstone Residency** is located in **Vaduthala, Kochi, Kerala, India**. \n[Google Maps link](https://maps.app.goo.gl/9g3NvnkKSPXjhwvT9).",
  "nearest places":
    "🏙 **Nearby Landmarks:**\n- **Aster Medcity** (3 km)\n- **North Railway Station** (3 km)\n- **Lourdes Hospital** (1 km)\n- **Marine Drive** (3 km)\n- **High Court of Kerala** (3 km).",
  "nearest places to visit":
    "🎡 **Tourist Attractions in Kochi:**\n- **Fort Kochi** – Colonial-era charm & Chinese fishing nets\n- **Marine Drive** – Scenic waterfront promenade\n- **Cherai Beach** – Tranquil backwaters & golden sands\n- **Jew Town & Paradesi Synagogue** – Historic landmarks.",

  tourism:
    "🚕 **Tourism Services at Heavenstone Residency**\nWe provide **cab facilities** and help plan your day with custom itineraries. Visit Kochi’s top attractions like **Fort Kochi, Marine Drive, Cherai Beach, and Jew Town** with our comfortable transport services.",
  "tourist places":
    "🎡 **Explore Kochi’s Best Attractions:**\n- **Fort Kochi** – Colonial-era charm & Chinese fishing nets\n- **Marine Drive** – Scenic waterfront promenade\n- **Cherai Beach** – Tranquil backwaters & golden sands\n- **Jew Town & Paradesi Synagogue** – Historic landmarks.\n🚕 *We offer cab services to help you explore!*",

  "food plan":
    "🍽 **Dining Plans at Heavenstone Residency:**\n✅ **Ordinary Plan:** ₹300/day per person (Home-style meals)\n✅ **Premium Plan:** ₹600/day per person (Chef-curated gourmet meals).",
  "meal plan":
    "🍽 **Dining Plans at Heavenstone Residency:**\n✅ **Ordinary Plan:** ₹300/day per person (Home-style meals)\n✅ **Premium Plan:** ₹600/day per person (Chef-curated gourmet meals).",
  kitchen:
    "🍽 **Dining Plans at Heavenstone Residency:**\n✅ **Ordinary Plan:** ₹300/day per person (Home-style meals)\n✅ **Premium Plan:** ₹600/day per person (Chef-curated gourmet meals).",
  contact:
    "📞 You can reach Heavenstone Residency at **+91 9447959544** or email us at **theheavenstone@gmail.com**.",
  booking: `To book an apartment, call us at **+91 9447959544** or email **theheavenstone@gmail.com**. You can also <span class="text-blue-600 font-bold"> [book through Airbnb](https://www.airbnb.co.in/rooms/1154626879906290509?viralityEntryPoint=1&s=76&source_impression_id=p3_1739118285_P38xu2Kd_oy4YJAa) </span>.`,

  book: `To book an apartment, call us at **+91 9447959544** or email **theheavenstone@gmail.com**. You can also <span class="text-blue-600 font-bold"> [book through Airbnb](https://www.airbnb.co.in/rooms/1154626879906290509?viralityEntryPoint=1&s=76&source_impression_id=p3_1739118285_P38xu2Kd_oy4YJAa) </span>.`,

  default: `If you need more details, contact us at <a href="tel:+919447959544" class="text-blue-600 font-bold">+91 9447959544</a> or email us at <a href="mailto:theheavenstone@gmail.com" class="text-blue-600 font-bold">theheavenstone@gmail.com</a>. 😊`,

  initial:
    "Hello! I'm here to assist you with Heavenstone Residency. Feel free to ask about our apartments, amenities, pricing, location, tourism, or packages. 😊",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; sender: "user" | "bot" }[]
  >([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([{ text: responses["initial"], sender: "bot" }]);
      }, 300);
    }
  }, [isOpen, messages.length]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: { text: string; sender: "user" | "bot" } = {
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      const matchedResponse =
        Object.keys(responses).find((keyword) =>
          lowerInput.includes(keyword)
        ) || "default";

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        { text: responses[matchedResponse], sender: "bot" },
      ]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-800 text-white p-3 rounded-full shadow-lg"
        >
          <FiMessageCircle className="h-6 w-6 lg:h-8 lg:w-8" />
        </button>
      )}

      {isOpen && (
        <div className="w-80 lg:w-96 bg-white rounded-lg shadow-lg border border-brand-dark overflow-hidden">
          <div className="bg-brand-dark text-white flex justify-between items-center p-3 ">
            <span className="font-semibold">Chat</span>
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose className="h-5 w-5" />
            </button>
          </div>

          <div ref={chatRef} className="h-96 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 my-1 max-w-[75%] break-words whitespace-pre-wrap ${
                    msg.sender === "user"
                      ? "bg-brand-dark text-white rounded-t-lg rounded-bl-lg"
                      : "bg-gray-200 rounded-t-lg rounded-br-lg"
                  }`}
                >
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {msg.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="p-2 bg-gray-200 rounded-lg max-w-[75%] flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="4" cy="12" r="3" fill="currentColor">
                      <animate
                        id="svgSpinners3DotsBounce0"
                        attributeName="cy"
                        begin="0;svgSpinners3DotsBounce1.end+0.25s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".33,.66,.66,1;.33,0,.66,.33"
                        values="12;6;12"
                      />
                    </circle>
                    <circle cx="12" cy="12" r="3" fill="currentColor">
                      <animate
                        attributeName="cy"
                        begin="svgSpinners3DotsBounce0.begin+0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".33,.66,.66,1;.33,0,.66,.33"
                        values="12;6;12"
                      />
                    </circle>
                    <circle cx="20" cy="12" r="3" fill="currentColor">
                      <animate
                        id="svgSpinners3DotsBounce1"
                        attributeName="cy"
                        begin="svgSpinners3DotsBounce0.begin+0.2s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".33,.66,.66,1;.33,0,.66,.33"
                        values="12;6;12"
                      />
                    </circle>
                  </svg>
                </div>
              </div>
            )}
          </div>

          <div className="border-t p-2 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full p-2 border rounded-lg focus:outline-none"
              placeholder="Ask something..."
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-brand-dark text-white p-2 rounded-full hover:bg-brand-light"
            >
              <IoMdSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
