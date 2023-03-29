export default function getStudentIdsSum(arr) {
  return Array.isArray(arr) && arr.reduce((acc, student) => acc + student.id, 0);
}
