
function Input(props){

return(
    <div className="my-8 w-full  flex justify-between items-center pr-5">
    <label className="w-1/3">{props.label} </label>
    <input
      className="w-2/3 h-9 rounded-lg border-2 border-zinc-200 px-3 focus:border-zinc-400"
      type="text"
    />
  </div>
);
}

export default Input;