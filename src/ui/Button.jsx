import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'duration-300 text-sm inline-block rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-900 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py- 4 md:px-6 md:py-4',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'text-sm px-4 py- 2.5 md:px-6 md:py-3.5 duration-300 inline-block rounded-full bg-transparent border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors hover:text-stone-800 hover:bg-stone-300 focus:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed',
  };

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
