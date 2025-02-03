
export const Newsboard = () => {

    const[article,setArtical] = useState([]);
    useEffect(()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    })

  return (
    <div>
    <h2 className="text-center"> Latest <span className="badge bg-danger">News</span></h2>
    </div>
  )
}
