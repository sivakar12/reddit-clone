import { Subreddit } from "../types/models"
import Link from "next/link"
import { supabase } from "../utils/supabase"

export async function getServerSideProps() {

    let { data: subreddits, error } = await supabase
        .from('subreddits')
        .select('*')

    if (error) {
        throw error
    }
    return {
      props: {
        subreddits,
      },
    }
  }

export default function Subreddits({ subreddits }: { subreddits: Subreddit[]}) {
    return (
        <>
            <div className="title">
                Subreddits
            </div>
            <ul className="list-group">
                {subreddits.map((subreddit: any) => (
                    <li className="list-group-item" key={subreddit.id}>
                        <Link href={`/subreddits/${subreddit.id}`}>
                            {subreddit.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}