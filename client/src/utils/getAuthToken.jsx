export default function getAuthToken() {
  const data = JSON.parse(localStorage.getItem("auth"));
  const role = localStorage.getItem("role");

  return data && role ? { ...data, role: role } : null;
}
