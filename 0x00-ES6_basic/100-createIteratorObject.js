export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flatMap(department => department);

  return {
    [Symbol.iterator]: function* () {
      for (const employee of employees) {
        yield employee;
      }
    }
  };
}
