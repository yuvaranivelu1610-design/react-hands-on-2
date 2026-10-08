function student() {
  const students = ["Jayashree", "Priya", "Kavya", "Divya", "Harini"];

  return (
    <div>
      <h1>students List</h1>

      {students.map((student) => (
        <p>{student}</p>
      ))}
    </div>
  );
}

export default student;