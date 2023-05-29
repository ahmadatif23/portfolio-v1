import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser'

export default function ContactForm(props) {
  const contactForm = useRef()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cannotSubmit, setCannotSubmit] = useState(true)

  const handleCloseForm = (e) => {
    e.preventDefault()
    props.onHandleCloseForm && props.onHandleCloseForm()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ((firstName && lastName && email && phone)) {
      emailjs.sendForm('service_edwauwu', 'template_i5hs4go', contactForm.current, 'Il5utdz2v3novGZ_j')
        .then((result) => {
          props.onHandleCloseForm && props.onHandleCloseForm()
          e.target.reset()
        }, (error) => {
          // console.log(error.text)
        })
    }
  }

  useEffect(() => {
    setCannotSubmit(!(firstName && lastName && email && phone))
  }, [firstName, lastName, email, phone])

  return (
    <>
      <div className='absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black/30 z-30'>
        <div className='bg-white rounded-xl p-6 flex flex-col items-center sm:w-1/4 w-[90%] relative'>
          <button onClick={ handleCloseForm } className='absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rounded-full shadow hover:scale-[1.05] hover:bg-sky-100 transition bg-white h-8 w-8 text-sm'>X</button>

          <p className='sm:text-3xl text-xl font-semibold mb-6'>Let's Chat</p>

          <form ref={ contactForm } onSubmit={ handleSubmit } className='flex flex-col w-full gap-4'>
            <div className='relative flex-1'>
              <input value={ firstName } onInput={ e => setFirstName(e.target.value) } type='text' name='user_first_name' required className='relative z-10 bg-transparent focus-within:bg-white peer w-full text-sm border rounded-xl px-3 py-2 focus-within:outline-none focus-within:border-sky-600 appearance-none' />
              <label htmlFor='user_first_name' className='absolute top-0 transform transition-all duration-200 peer-valid:hidden text-slate-400 peer-focus-within:z-20 peer-focus-within:-translate-y-1/2 peer-focus-within:text-xs peer-focus-within:bg-white peer-focus-within:px-1 peer-focus-within:py-0 peer-focus-within:left-2 peer-focus-within:text-sky-600 left-3 py-2 text-sm'>First Name</label>
            </div>

            <div className='relative flex-1'>
              <input value={ lastName } onInput={ e => setLastName(e.target.value) } type='text' name='user_last_name' required className='relative z-10 bg-transparent focus-within:bg-white peer w-full text-sm border rounded-xl px-3 py-2 focus-within:outline-none focus-within:border-sky-600 appearance-none' />
              <label htmlFor='user_last_name' className='absolute top-0 transform transition-all duration-200 peer-valid:hidden text-slate-400 peer-focus-within:z-20 peer-focus-within:-translate-y-1/2 peer-focus-within:text-xs peer-focus-within:bg-white peer-focus-within:px-1 peer-focus-within:py-0 peer-focus-within:left-2 peer-focus-within:text-sky-600 left-3 py-2 text-sm'>Last Name</label>
            </div>

            <div className='relative flex-1'>
              <input value={ email } onInput={ e => setEmail(e.target.value) } type='email' name='user_email' required className='relative z-10 bg-transparent focus-within:bg-white peer w-full text-sm border rounded-xl px-3 py-2 focus-within:outline-none focus-within:border-sky-600 appearance-none' />
              <label htmlFor='user_email' className='absolute top-0 transform transition-all duration-200 peer-valid:hidden text-slate-400 peer-focus-within:z-20 peer-focus-within:-translate-y-1/2 peer-focus-within:text-xs peer-focus-within:bg-white peer-focus-within:px-1 peer-focus-within:py-0 peer-focus-within:left-2 peer-focus-within:text-sky-600 left-3 py-2 text-sm'>Email Address</label>
            </div>

            <div className='relative flex-1'>
              <input value={ phone } onInput={ e => setPhone(e.target.value) } type='number' name='user_phone' required className='relative z-10 bg-transparent focus-within:bg-white peer w-full text-sm border rounded-xl px-3 py-2 focus-within:outline-none focus-within:border-sky-600 appearance-none' />
              <label htmlFor='user_phone' className='absolute top-0 transform transition-all duration-200 peer-valid:hidden text-slate-400 peer-focus-within:z-20 peer-focus-within:-translate-y-1/2 peer-focus-within:text-xs peer-focus-within:bg-white peer-focus-within:px-1 peer-focus-within:py-0 peer-focus-within:left-2 peer-focus-within:text-sky-600 left-3 py-2 text-sm'>Phone Number</label>
            </div>

            <button disabled={ cannotSubmit } className='w-full py-2 text-sm border rounded-xl transition text-slate-500 hover:bg-sky-600 hover:text-white hover:border-sky-600 disabled:bg-slate-100 disabled:hover:text-slate-500 disabled:border-0'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}
