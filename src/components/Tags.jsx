import { Badge } from "react-bootstrap"

function Tags({genres}) {
  return (
    <div>
        {
              genres.map((genre, index) => (
                <Badge key={index} bg={genre.color} className="me-1">
                      {genre.text}
                </Badge>
            ))
        }
    </div>
  )
}

export default Tags