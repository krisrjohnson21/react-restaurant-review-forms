import React, { useState } from 'react'

const ratings = [1, 2, 3, 4, 5]

const ReviewForm = (props) => {
  const [reviewRecord, setReviewRecord] = useState({
    name: "",
    rating: "",
    content: "",
  })

  const ratingOptions = [""].concat(ratings).map((rating) => {
    return(
      <option key={rating} value={rating * 20}>
        {rating}
      </option>
    )
  })

  const handleInputChange = (event) => {
    setReviewRecord({
      ...reviewRecord,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const clearForm = () => {
    event.preventDefault()
    setReviewRecord({
      name: "",
      rating: "",
      content: "",
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    props.onReviewSubmitted(reviewRecord)
    clearForm()
  }

  return(
    <form className="callout" id="review-form" onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={reviewRecord.name}
        />
      </div>

      <div>
        <label htmlFor="rating">Rating:</label>
        <select
          type="text"
          id="rating"
          name="rating"
          onChange={handleInputChange}
          value={reviewRecord.rating}>
          {ratingOptions}
        </select>
      </div>

      <div>
        <label htmlFor="content">Review Text:</label>
        <input
          type="text"
          id="content"
          name="content"
          onChange={handleInputChange}
          value={reviewRecord.content}
        />
      </div>

      <div className="button-group">
        <input className="button" type="submit" value="Submit Review"/>
        <button className="button" onClick={clearForm}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default ReviewForm
