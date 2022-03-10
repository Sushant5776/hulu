import { JSXElementConstructor, ComponentProps } from 'react'

interface HeaderItemProps {
	title: string
	Icon: JSXElementConstructor<ComponentProps<'svg'>>
}

const HeaderItem = ({ title, Icon }: HeaderItemProps) => {
	return (
		<div className='flex flex-col items-center hover:text-white cursor-pointer w-12 sm:w-20 group'>
			<Icon className='h-8 mb-1 group-hover:animate-bounce' />
			<p className='opacity-0 group-hover:opacity-100 tracking-widest'>
				{title.toUpperCase()}
			</p>
		</div>
	)
}

export default HeaderItem
