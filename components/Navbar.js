export default function Navbar() {
  return (
    <>
      <div className="w-full flex py-7 items-center justify-center">
        <div className="max-w-7xl w-full flex justify-between">
          <div className="w-14 h-14 border-2 rounded-full flex items-center justify-center"></div>

          <div className="flex items-center gap-7">
            <ul className="flex items-center gap-7">
              <li>About</li>
              <li>Experience</li>
              <li>Work</li>
            </ul>

            <button className="px-4 py-2 rounded-xl border-2">Contact Me</button>
          </div>
        </div>
      </div>
    </>
  )
}
