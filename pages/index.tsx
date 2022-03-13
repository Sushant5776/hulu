import Header from '@/components/Header'
import Nav from '@/components/Nav'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hulu</title>
				<meta name='description' content='Watch your favorite movies..!' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Header */}
			<Header />
			{/* Nav */}
			<Nav />
			{/* Results */}
		</div>
	)
}

export default Home
