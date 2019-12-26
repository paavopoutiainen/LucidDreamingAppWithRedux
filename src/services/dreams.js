import axios from "axios"
import moment from "moment"

const getAll = async () => {
    const dreams = await axios.get("http://localhost:3001/api/dreams")
    /*const dateFixedDreams = dreams.data.map(d => {
      const date = moment(d.date)
      return {...d, date: date.format('MMMM Do YYYY, h:mm:ss a')}
    })*/
    return dreams.data
}   

const create = async(newDream) => {
    try {
      const response = await axios.post("http://localhost:3001/api/dreams", newDream)
      return response.data
    } catch (exception) {
      console.error(exception)
    }
 }

export default { getAll, create }