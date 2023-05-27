export default function Footer(props) {
  return (
    <>
      <div className='absolute z-50 top-0 left-0 group-hover:block hidden -translate-y-full transform transition duration-200 justify-center w-full'>
        <div className='flex flex-col items-center justify-center pb-1'>
          <div className='rounded px-2 py-0.5 text-[10px] bg-black/50 text-white'>{props.title}</div>
          <div className='ml-[4px] border-[4px] border-solid border-t-black/50 border-transparent'></div>
        </div>
      </div>
    </>
  )
}
