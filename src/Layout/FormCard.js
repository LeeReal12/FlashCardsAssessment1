import React from 'react';
import { useHistory, Link } from 'react-router-dom';

function FormCard({ deckId, newCardData, changeHandler, submitHandler }) {
  const history = useHistory();
  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <label htmlFor='front'>Front</label>
        <textarea className='form-control'
        id='front'
        name='front'
        rows='5'
        placeholder='Front of card'
        onChange={changeHandler}
        value={newCardData.front}
        required />
      </div>
      <div className='form-group'>
        <label htmlFor='back'>Back</label>
        <textarea className='form-control'
        id='back'
        name='back'
        rows='5'
        placeholder='Back of card'
        onChange={changeHandler}
        value={newCardData.back}
        required />
      </div>
      <Link to={`/decks/${deckId}`} className='mr-2'>
        <button
          type='button'
          className='btn btn-secondary'
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          Done
        </button>
      </Link>
      <button type='submit' className='btn btn-primary'>
        Save
      </button>
    </form>
  );
}

export default FormCard;
