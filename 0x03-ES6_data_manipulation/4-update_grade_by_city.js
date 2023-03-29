export default function updateStudentGradeByCity(arr, city, newGrades) {
  return Array.isArray(arr) && arr
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: grade ? grade.grade : 'N/A',
      };
    });
}
