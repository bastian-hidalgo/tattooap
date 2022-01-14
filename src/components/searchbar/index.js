import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form';

import { useStore } from '../../store/Store';
import usersService from '../../services/Users/service';
import usersActions from '../../store/Users/actions';
import Results from './components/results/index';

const Searchbar = () => {
  const { register, handleSubmit } = useForm();
  const [{users: { users }}, dispatch] = useStore();
  const onSubmit = async(data) => {
      const { data: usersData } = await usersService.getUsersByName(data.name);
      new Promise ((resolve, reject) => {
          resolve(usersData);
      }).then((data) => dispatch(usersActions.getUsersByName(data)));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="navbar__search-input" type="text" placeholder="Buscar" {...register("name", {required: true})} />
      <SearchIcon onClick={handleSubmit(onSubmit)} />
      {users?.usuarios && users?.usuarios.length > 0 && <Results data={users?.usuarios} />}
    </form>
  )
};

export default Searchbar;
