import { ChangeEvent, FormEvent, useState, useCallback } from "react"

const GetToken = () => {
	const [token, setToken] = useState("")

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setToken(e.currentTarget.value)
	}, [])

	const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		localStorage.setItem("finnhub_api_token", token)
		window.location.reload()
	}, [token])

	return <div>
		<form onSubmit={onSubmit} className="token">
			<label><a href="https://finnhub.io/">Finnhub</a> API Token</label>
			<div><input type="text" onChange={onChange} /></div>
			<div><input type="submit" value="Submit" /></div>
		</form>
	</div>
}

export default GetToken