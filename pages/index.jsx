import Link from "next/link";
import styles from '../styles/auth.module.scss'
import { AuthLayout } from "components";

export default function Login () {
  return (
    <AuthLayout title="Login">
      <form action="/home" className="mt-24" method="post">
        <div className='my-5'>
          <label htmlFor="email" className='font-medium text-sm'>Email</label>
          <input type="email" name="email" className={`border border-primary-500 ${styles.inputShadow} w-full block rounded-lg h-10 md:h-12 focus:border-gray focus:outline-none px-4`} id="email" />
        </div>
        <div className='my-5'>
          <label htmlFor="password" className='font-medium text-sm'>Password</label>
          <input type="password" name="password" className={`border border-primary-500 ${styles.inputShadow} w-full block rounded-lg h-10 md:h-12 focus:border-gray focus:outline-none px-4`} id="password" />
        </div>
        <div className='my-5 md:text-right'>
          <button type="submit" className={` rounded-lg h-10 focus:border-gray focus:outline-none  bg-primary-500 text-white px-11 font-medium uppercase hover:bg-primary-500/90`}>Login</button>
        </div>
      </form>
      <div className="flex justify-between">

        <Link href={"/"} >
          <a className='text-primary-500 hover:text-primary-500/90 underline font-medium text-sm'>
            Forgot Password?
          </a>
        </Link>

        <Link href="/signup">
          <a className='text-primary-500 hover:text-primary-500/90 underline font-medium text-sm'>
            Sign Up
          </a>
        </Link>
      </div>
    </AuthLayout>
  )
}
