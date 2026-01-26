function Settings(props) {
  return (
    <div className={`${!props.open && "hidden"} h-full w-96 z-50 right-0 float-right `}>
      <h1>Settings</h1>
      <h2>General</h2>
      <p>Confirm before deleting</p>
    </div>
  )
}
export default Settings