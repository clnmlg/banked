import React from 'react'
import Image from 'next/image'
import { logoutAccount } from '@/lib/actions/user.actions'
import { useRouter } from 'next/navigation'
const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router = useRouter()

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount()
  }

  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">{user.name[0]}</p>
      </div>
      <div
        className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image
          src="icons/logout.svg"
          alt="footer_image"
          width={'40'}
          height={'40'}
        />
      </div>
    </footer>
  )
}

export default Footer
