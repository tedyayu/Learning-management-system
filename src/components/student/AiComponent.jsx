
export default function AiComponent() {
  return (
    <div className="w-full max-w-sm border rounded-lg shadow p-4 bg-white">
      <h2 className="text-lg font-semibold mb-2">Udacity AI</h2>

      <div className="border rounded p-3 mb-4">
        <h3 className="text-sm font-medium mb-2">Get Started with Udacity AI</h3>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "0%" }}></div>
        </div>
        <ul className="text-sm space-y-1">
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
            Try Quote-to-Text
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
            Ask how to improve your prompt
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
            Ask how else Udacity AI can help
          </li>
        </ul>
        <button className="text-red-500 text-xs mt-2 hover:underline">Dismiss</button>
      </div>

      <div className="text-sm">
        <p className="mb-2">
          <span className="font-semibold">Hi Tewodros!</span> I’m Udacity AI – I’m here to help you throughout your learning journey.
        </p>
        <p className="mb-2">
          I can assist with content-related questions, offer additional practice, provide account support, help troubleshoot workspaces and more.
        </p>
        <p>Is there anything I can help you with now?</p>
      </div>

      <button className="mt-4 w-full text-sm border rounded px-3 py-2 hover:bg-gray-100">
        Chat with Udacity AI
      </button>
    </div>
  );
}
