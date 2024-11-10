
function Input(props){

return(
    <div className="my-5 w-full  flex justify-between items-center pr-5">
    <label className="w-1/3">{props.label} </label>
    <input
      className="w-3/4 h-8 rounded-lg border-2 border-zinc-200 px-3"
      type="text"
    />
  </div>
);
}

export default Input;