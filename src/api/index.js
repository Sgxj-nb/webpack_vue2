import axios from '@/utils/request';

export async function login(data) {
  console.log(data);
  const res = await axios.post('?s=Manage.Brac_User.Login', data);
  return res;
}
