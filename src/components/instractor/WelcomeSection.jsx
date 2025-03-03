export const WelcomeSection = ({ name }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800">Welcome, {name}!</h1>
      <div className="mt-4 flex space-x-4">
        <a href="#" className="text-blue-600 hover:underline">My Profile</a>
        <a href="#" className="text-blue-600 hover:underline">Settings</a>
        <a href="#" className="text-blue-600 hover:underline">Support</a>
      </div>
    </div>
  );