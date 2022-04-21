
function saveTodos(todos: String) {
  // 将数据转换成json格式，存入到浏览器的localStorage中
  localStorage.setItem("todos_key", JSON.stringify(todos));
}

function readTodos() {
  // 将JSON格式的字符串转换成JSON对象进行处理
  return JSON.parse(localStorage.getItem("todos_key") || "[]");
}

export { saveTodos, readTodos };
