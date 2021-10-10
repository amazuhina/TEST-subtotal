import {finishLoading, pushData, sortStatusSelector, SortStatusType, startLoading} from "../../redux/slice";
import {useDispatch, useSelector} from "react-redux";

export const useFetchCards = () => {
  const dispatch = useDispatch()
  const actualSortType = useSelector(sortStatusSelector)

  const fetchCards = () => {
    dispatch(startLoading())

    console.log(actualSortType)

    const filter = {
      "query": {
        "date_utc": {
          "$gte": "2015-01-01T00:00:00.000Z",
          "$lte": "2019-12-31T00:00:00.000Z"
        },
        "success" : true
      },
      "options": {
        "sort": {
          date_unix: (actualSortType === SortStatusType.DESC)
            ? -1
            : 1
        },
        limit: 10
      }
    }

    fetch('https://api.spacexdata.com/v4/launches/query', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(filter)
    })
      .then(res => res.json())
      .then(res => {
        const payload = {
          data: res.docs.map(i => ({
            id: i.id,
            name: i.name,
            dateUnix: i.date_unix,
            date: i.date_local,
            info: i.details,
            url: i.links.patch.small,
            success: i.success,
            rocketId: i.rocket,
          }))
        }
        dispatch(pushData(payload))
        dispatch(finishLoading())

      })

      .catch(errorMessage => {
        console.log(errorMessage.error)
      })
  }

  return [fetchCards]
}