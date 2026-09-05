import { useState, useRef, useEffect } from 'react'
import { Settings, User, Bell } from 'lucide-react'

interface MenuItemProps {
  icon: React.ReactNode
  title: string
  description: string
  isLast?: boolean
}

function MenuItem({ icon, title, description, isLast }: MenuItemProps) {
  return (
    <div className={`block px-5 py-4 ${isLast ? '' : 'border-b border-dropcall-border'}`}>
      <span className="text-dropcall-icon">{icon}</span>
      <h3 className="mt-1 text-[16px] font-bold tracking-[.05rem] text-dropcall-title">{title}</h3>
      <p className="mt-1 text-[14px] font-light text-dropcall-paragraph">{description}</p>
    </div>
  )
}

interface DropdownProps {
  buttonLabel?: string
}

export function Dropdown({ buttonLabel = 'Privacy Settings' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="flex justify-center px-4">
      <div ref={dropdownRef} className="relative inline-block">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-[14px] text-dropcall-text transition-colors hover:text-dropcall-hover"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <Settings size={18} />
          {buttonLabel}
          <span className="ml-1 text-[10px]">&#9662;</span>
        </button>

        {isOpen && (
          <div className="absolute left-1/2 z-10 mt-[50px] flex w-[700px] -translate-x-1/2 bg-white opacity-100 shadow-[0_15px_30px_0_rgba(0,0,0,0.2)] transition-all duration-300">
            {/* Column 1 */}
            <div className="w-1/2">
              <MenuItem
                icon={<Settings size={30} />}
                title="Settings"
                description="Customize your privacy preferences and control how your data is used across our platform."
              />
              <MenuItem
                icon={<User size={30} />}
                title="Account"
                description="Manage your account details, profile information, and connected services."
                isLast
              />
            </div>
            {/* Column 2 */}
            <div className="w-1/2">
              <MenuItem
                icon={<Settings size={30} />}
                title="Settings"
                description="Adjust notification settings and choose what updates you want to receive."
              />
              <MenuItem
                icon={<Bell size={30} />}
                title="Notification"
                description="Control your notification preferences and alert delivery channels."
                isLast
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
