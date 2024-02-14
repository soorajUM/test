import { useRef, useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<any>([]);
  const [editindex, seteditindex] = useState<number | null>(null);

  return (
    <div className="main flex-col place-items-center flex bg-violet-200 h-screen">
      <div className="input">
        <input
          className=" w-[500px] m-4 p-4 rounded-2xl shadow-md"
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button
          className="bg-violet-400 p-2 rounded-lg shadow-md"
          onClick={() => {
            if (editindex !== null) {
              todos[editindex] = todo;
            } else {
              setTodos([...todos, todo]);
            }
            seteditindex(null);
            setTodo("");
          }}
        >
          add
        </button>
      </div>
      <div>
        <ul className="">
          <div className="w-[600px] overflow-hidden m-4 p-4">
            {todos.map((element: string, index: number) => (
              <div
                id="todo"
                className=" flex gap-5 justify-between px-6 py-7 bg-white rounded-2xl shadow-md max-w m-4 "
              >
                <div id="content" className="overflow-hidden flex items-center">
                  <li className="" key={index}>
                    {element}
                  </li>
                </div>
                <div id="option" className="bg-white flex px-4">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/50569d44fa30da420b553304ce9374ff5f46606f9e42b1da28eb244cca779a03?"
                    className="aspect-square w-[25px] cursor-pointer"
                    onClick={() => {
                      setTodo(element);
                      seteditindex(index);
                    }}
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/471f8cb1ba3459175174c01db3fe20b9216d64b645f163831e28acce2c0ddbf1?"
                    className="aspect-square w-[25px] cursor-pointer"
                    onClick={() =>
                      setTodos(
                        todos.filter((element: string, i: number) => {
                          console.log(index, i);
                          return i !== index;
                        })
                      )
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
