export const PendingApprovals = () => {
    const pendingStudents = [
      { id: 1, name: "Jane Smith", course: "Introduction to React" },
      { id: 2, name: "Mike Johnson", course: "Web Design Fundamentals" },
    ];
  
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Pending Approvals</h2>
        {pendingStudents.length === 0 ? (
          <p className="text-gray-600">No pending approvals</p>
        ) : (
          <div className="space-y-4">
            {pendingStudents.map(student => (
              <div key={student.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{student.name}</p>
                  <p className="text-sm text-gray-600">{student.course}</p>
                </div>
                <div className="space-x-2">
                  <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Approve</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Reject</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  