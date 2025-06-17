import { Link, useLocation } from "react-router-dom";

const SubHeader = ({ isLoggedIn, user }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const filteredSegments = pathSegments.filter(segment => {
    // Filter out UUIDs (36-char segments with dashes) or numbers
    return !/^[0-9a-fA-F-]{36}$/.test(segment) && isNaN(Number(segment));
  });

  const getBreadcrumbName = (segment) => {
    if (segment === "course") return "Course";
    if (segment === "ContentDetail") return "Course Detail";
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  // Define existing routes (that are safe to navigate to)
  const knownRoutes = ["/", "/course"]; // Add more if needed

  return (
    <div className="bg-white py-10 border-t border-gray-700">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            {isLoggedIn ? (
              <span className="text-4xl font-thin">Welcome {user.student.firstName}</span>
            ) : (
              <span className="text-4xl font-thin">Afro-Lang E-Learning Portal</span>
            )}
          </div>

          {/* Breadcrumb Navigation */}
          <div className="text-sm text-blue-600 space-x-2">
            <Link to="/" className="hover:underline">Home</Link>
            {filteredSegments.map((segment, index) => {
              const url = "/" + filteredSegments.slice(0, index + 1).join("/");
              const name = getBreadcrumbName(segment);
              const isLast = index === filteredSegments.length - 1;

              return (
                <span key={index}>
                  {" > "}
                  {knownRoutes.includes(url) && !isLast ? (
                    <Link to={url} className="hover:underline">{name}</Link>
                  ) : (
                    <span className="text-gray-500">{name}</span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
