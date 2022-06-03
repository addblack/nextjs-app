import React from 'react'
import { SearchProps } from './SearchProps';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import SearchIcon from './search.svg';
import { useRouter } from 'next/router';

export const Search = ({className, ...props } : SearchProps) : JSX.Element => {
  const [search, setSearch] = React.useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };

  const enterPressed = (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      goToSearch();
    }
  }

  return (
    <div className={cn(className, styles.Search)} {...props}>
    <Input
      placeholder='Search...'
      className={styles.Input}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => enterPressed(e)}
      />
    <Button
      appearance='primary'
      className={styles.Button}
      onClick={() => goToSearch()}
      >
      <SearchIcon />
    </Button>
    </div>
  );
};