export default function getListStudentIds(getListStudents) {
  return getListStudents.map((student) => student.id);
}
