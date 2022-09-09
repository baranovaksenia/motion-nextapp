import Link from 'next/link';

const Nav = ({ navData, header }) => {
  return (
    <div className='flex items-center'>
      <ul className='flex gap-[95px]'>
        {navData.map((item, index) => {
          // destructure item
          const { name, href } = item;
          return (
            <li key={index}>
              <Link href={href}>
                <a
                  className={`${
                    header ? 'text-primary' : 'text-white'
                  } cursor-pointer hover:text-accent-hover transition`}
                >
                  {name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
