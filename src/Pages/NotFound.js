import {Link} from 'react-router-dom';

export const NotFound = () => {

  return (
    <div className="NotFound">
        <h1>Сторінку не знайдено</h1>
        <Link to="/">
            Повернутися на головну
        </Link>
    </div>
  );
};