import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Results from '@/components/Results'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import requests from '@/utils/requests'
import { Result } from '@/types/results'

const Home: NextPage<{ results: Result[] }> = ({ results }) => {
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
			<Results results={results} />
		</div>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
	const genre = context.query.genre
	const request: { results: Result[] } = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre as string].url || requests.fetchTrending.url
		}`
	).then((res) => res.json())

	return {
		props: { results: request.results },
	}
}
